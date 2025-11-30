// server.js - Node.js/Express Backend API
const express = require('express');
const cors = require('cors');
const { Client, Environment } = require('square');
const nodemailer = require('nodemailer');
const multer = require('multer');
const { S3Client, PutObjectCommand, CopyObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// AWS S3 Configuration
const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1'
});

// Middleware
app.use(cors());

app.use(cors({
  origin: [
    'http://localhost:5001',
    'http://localhost:3000',
    'http://localhost:5000',
    'https://bristolpropertymaintenance.co.uk',
    'https://bristolpropertymaintenance.co.uk',
    'https://www.bristolpropertymaintenance.co.uk',
    'https://api.bristolpropertymaintenance.co.uk'
  ],
  credentials: true
}));

app.use(express.json());

// Square Client Configuration
const squareClient = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: process.env.SQUARE_ENVIRONMENT === 'production' 
    ? Environment.Production 
    : Environment.Sandbox,
});


// Email Configuration (using nodemailer)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: true, // true for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Database connection (PostgreSQL with SSL for AWS RDS)
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || `postgresql://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=require`,
  ssl: {
    rejectUnauthorized: false
  }
});



// File upload configuration
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { 
    fileSize: 5 * 1024 * 1024,
    files: 50
  }
});

/**
 * Helper function to rename/copy S3 files with postcode
 */
async function renameS3FilesWithPostcode(s3Urls, bookingId, postcode) {
  const newUrls = [];
  
  for (let i = 0; i < s3Urls.length; i++) {
    const oldUrl = s3Urls[i];
    const oldKey = oldUrl.split('.amazonaws.com/')[1];
    
    // Create new key with postcode: bookings/{bookingId}/{postcode}_{index}.jpg
    const extension = oldKey.split('.').pop();
    const newKey = `bookings/${bookingId}/${postcode}_${i + 1}.${extension}`;
    
    try {
      // Copy object to new location
      await s3Client.send(new CopyObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        CopySource: `${process.env.AWS_S3_BUCKET}/${oldKey}`,
        Key: newKey,
      }));
      
      // Delete old temp file
      await s3Client.send(new DeleteObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: oldKey,
      }));
      
      const newUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${newKey}`;
      newUrls.push(newUrl);
      
    } catch (error) {
      console.error(`❌ Error renaming ${oldKey}:`, error);
      // If rename fails, keep old URL
      newUrls.push(oldUrl);
    }
  }
  
  return newUrls;
}

/**
 * Process Square Payment
 */
app.post('/api/process-payment', async (req, res) => {
  try {
    const { sourceId, amount } = req.body;

    const payment = await squareClient.paymentsApi.createPayment({
      sourceId,
      amountMoney: {
        amount: BigInt(amount),
        currency: 'GBP',
      },
      idempotencyKey: require('crypto').randomUUID(),
    });

    // Convert BigInt to string for JSON serialization
    const paymentData = JSON.parse(JSON.stringify(payment.result.payment, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    ));

    res.json({
      success: true,
      payment: paymentData,
    });
  } catch (error) {
    console.error('Payment error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Payment processing failed',
    });
  }
});

/**
 * Temporary upload endpoint for image preview
 * Uploads directly to S3 and returns URL
 */
app.post('/api/upload-temp', upload.array('images', 50), async (req, res) => {
  try {
    
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const uploadPromises = req.files.map(async (file) => {
      const key = `temp/${Date.now()}-${file.originalname}`;
      
      
      const uploadParams = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      };

      await s3Client.send(new PutObjectCommand(uploadParams));
      const s3Url = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
     
      
      return s3Url;
    });

    const urls = await Promise.all(uploadPromises);
    
    res.json({ 
      success: true,
      s3Urls: urls 
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload files' });
  }
});

/**
 * Create Booking
 */
app.post('/api/bookings', express.json(), async (req, res) => {
  
  
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');

    const {
      size,
      firstName,
      surname,
      email,
      phone,
      address,
      postcode,
      collectionDate,
      collectionWindow,
      description,
      agreeToTerms,
      propertyValuation,
    } = req.body;

 // Parse JSON fields safely with try-catch
const parseJson = (value, defaultValue) => {
  try {
    if (!value || value === '' || value === 'undefined' || value === 'null') {
      return defaultValue;
    }
    return JSON.parse(value);
  } catch (e) {
    console.error('JSON parse error for value:', value, e);
    return defaultValue;
  }
};

const extras = parseJson(req.body.extras, []);
const pricing = parseJson(req.body.pricing, { basePrice: 0, extrasTotal: 0, vat: 0, totalPrice: 0 });
const paymentResult = parseJson(req.body.paymentResult, {});
const s3Urls = parseJson(req.body.s3Urls, []);



    // Insert booking into database
    const bookingQuery = `
      INSERT INTO bookings (
        size, first_name, surname, email, phone, address, postcode,
        collection_date, collection_window, description, extras,
        property_valuation, base_price, extras_total, vat, total_price,
        payment_id, payment_status, created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, NOW())
      RETURNING id
    `;

    const bookingValues = [
      size,
      firstName,
      surname,
      email,
      phone,
      address,
      postcode,
      collectionDate,
      collectionWindow,
      description,
      JSON.stringify(extras || []),
      propertyValuation || false,
      pricing.basePrice,
      pricing.extrasTotal,
      pricing.vat,
      pricing.totalWithVat,
      paymentResult.payment.id,
      'completed',
    ];

    const bookingResult = await client.query(bookingQuery, bookingValues);
    const bookingId = bookingResult.rows[0].id;

    // Rename S3 files with postcode and store in database
    let finalS3Urls = [];
    
    if (s3Urls && s3Urls.length > 0) {
      // Rename files to include postcode
      finalS3Urls = await renameS3FilesWithPostcode(s3Urls, bookingId, postcode);
      
      // Store renamed URLs in database
      for (const s3Url of finalS3Urls) {
        const filename = s3Url.split('/').pop();
        const imageQuery = `
          INSERT INTO booking_images (booking_id, filename, mime_type, s3_url)
          VALUES ($1, $2, $3, $4)
        `;
        await client.query(imageQuery, [
          bookingId,
          filename,
          'image/jpeg',
          s3Url,
        ]);
        console.log(`✅ DB record created for: ${filename}`);
      }
    } else {
      console.log('No images to store');
    }

    await client.query('COMMIT');

    // Send confirmation email to customer
    await sendCustomerConfirmationEmail({
      email,
      firstName,
      bookingId,
      collectionDate,
      collectionWindow,
      address,
      postcode,
      totalPrice: pricing.totalWithVat,
    });

    // // Send notification email to admin
    await sendAdminNotificationEmail({
      bookingId,
      firstName,
      surname,
      email,
      phone,
      address,
      postcode,
      collectionDate,
      collectionWindow,
      description,
      totalPrice: pricing.totalWithVat,
      imageUrls: finalS3Urls,
    });

    res.json({
      success: true,
      bookingId,
      message: 'Booking created successfully',
    });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Booking error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to create booking',
    });
  } finally {
    client.release();
  }
});

/**
 * Send customer confirmation email
 */
async function sendCustomerConfirmationEmail(data) {
  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #003366; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .booking-details { background-color: white; padding: 15px; margin: 15px 0; border-left: 4px solid #003366; }
        .footer { text-align: center; padding: 20px; color: #777; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Booking Confirmation</h1>
        </div>
        <div class="content">
          <p>Dear ${data.firstName},</p>
          <p>Thank you for booking with Bristol Property Maintenance. Your booking has been confirmed!</p>
          
          <div class="booking-details">
            <h3>Booking Details</h3>
            <p><strong>Booking Reference:</strong> #${data.bookingId}</p>
            <p><strong>Collection Date:</strong> ${new Date(data.collectionDate).toLocaleDateString('en-GB')}</p>
            <p><strong>Collection Window:</strong> ${data.collectionWindow}</p>
            <p><strong>Collection Address:</strong><br>${data.address}<br>${data.postcode}</p>
            <p><strong>Total Paid:</strong> £${data.totalPrice.toFixed(2)}</p>
          </div>
          
          <p>We will contact you 24 hours before your scheduled collection to confirm the exact time.</p>
          <p>If you have any questions, please don't hesitate to contact us:</p>
          <p>📞 0117 299 0185<br>📧 hello@bristolpropertymaintenance.co.uk</p>
        </div>
        <div class="footer">
          <p>Bristol Property Maintenance<br>A trading name of SWIFT UK PROPERTY INVESTMENTS LTD<br>Company number: 15244665</p>
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: data.email,
    subject: `Booking Confirmation - #${data.bookingId}`,
    html: emailHtml,
  });
}

/**
 * Generate .ics calendar file for booking
 */
function generateCalendarInvite(data) {
  const collectionDate = new Date(data.collectionDate);
  
  // Set time based on collection window
  let startHour, endHour;
  switch(data.collectionWindow) {
    case 'morning':
      startHour = 8;
      endHour = 12;
      break;
    case 'afternoon':
      startHour = 12;
      endHour = 17;
      break;
    case 'evening':
      startHour = 17;
      endHour = 20;
      break;
    default:
      startHour = 9;
      endHour = 17;
  }
  
  const startDate = new Date(collectionDate);
  startDate.setHours(startHour, 0, 0);
  
  const endDate = new Date(collectionDate);
  endDate.setHours(endHour, 0, 0);
  
  // Format dates for iCalendar (YYYYMMDDTHHMMSS)
  const formatICalDate = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };
  
  const now = new Date();
  const dtstamp = formatICalDate(now);
  const dtstart = formatICalDate(startDate);
  const dtend = formatICalDate(endDate);
  
  // Build description with images
  let description = `Booking #${data.bookingId}\\n\\n`;
  description += `Customer: ${data.firstName} ${data.surname}\\n`;
  description += `Phone: ${data.phone}\\n`;
  description += `Email: ${data.email}\\n`;
  description += `Address: ${data.address}, ${data.postcode}\\n`;
  description += `Description: ${data.description}\\n`;
  description += `Total: £${data.totalPrice.toFixed(2)}\\n`;
  
  if (data.imageUrls && data.imageUrls.length > 0) {
    description += `\\nImages:\\n`;
    data.imageUrls.forEach((url, index) => {
      description += `${index + 1}. ${url}\\n`;
    });
  }
  
  // Generate .ics file content
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Bristol Property Maintenance//Booking System//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:booking-${data.bookingId}@bristolpropertymaintenance.co.uk`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${dtstart}`,
    `DTEND:${dtend}`,
    `SUMMARY:House Clearance - ${data.firstName} ${data.surname}`,
    `LOCATION:${data.address}, ${data.postcode}`,
    `DESCRIPTION:${description}`,
    `STATUS:CONFIRMED`,
    `SEQUENCE:0`,
    `BEGIN:VALARM`,
    `TRIGGER:-PT24H`,
    `ACTION:DISPLAY`,
    `DESCRIPTION:Reminder: House clearance tomorrow`,
    `END:VALARM`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
  
  return icsContent;
}

/**
 * Send admin notification email
 */
async function sendAdminNotificationEmail(data) {
  // Build image links HTML
  let imagesHtml = '';
  if (data.imageUrls && data.imageUrls.length > 0) {
    imagesHtml = '<div class="detail-row"><strong>Uploaded Images:</strong></div>';
    data.imageUrls.forEach((url, index) => {
      const filename = url.split('/').pop();
      imagesHtml += `<div class="detail-row" style="margin-left: 20px;">
        ${index + 1}. <a href="${url}" target="_blank" style="color: #003366;">${filename}</a>
      </div>`;
    });
  }

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #003366; color: white; padding: 20px; }
        .details { background-color: #f9f9f9; padding: 20px; margin: 20px 0; }
        .detail-row { margin: 10px 0; }
        .calendar-note { background-color: #e8f4f8; padding: 15px; margin: 20px 0; border-left: 4px solid #003366; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Booking Received - #${data.bookingId}</h2>
        </div>
        <div class="details">
          <div class="detail-row"><strong>Customer:</strong> ${data.firstName} ${data.surname}</div>
          <div class="detail-row"><strong>Email:</strong> ${data.email}</div>
          <div class="detail-row"><strong>Phone:</strong> ${data.phone}</div>
          <div class="detail-row"><strong>Address:</strong> ${data.address}, ${data.postcode}</div>
          <div class="detail-row"><strong>Collection Date:</strong> ${new Date(data.collectionDate).toLocaleDateString('en-GB')}</div>
          <div class="detail-row"><strong>Collection Window:</strong> ${data.collectionWindow}</div>
          <div class="detail-row"><strong>Description:</strong> ${data.description}</div>
          <div class="detail-row"><strong>Total Price:</strong> £${data.totalPrice.toFixed(2)} (Calculated from your selected load. Additional items may incur extra charges.)</div>
          ${imagesHtml}
        </div>
        <div class="calendar-note">
          <strong>📅 Calendar Invite Attached</strong><br>
          Open the attached .ics file to add this booking to your calendar (works with Outlook, Google Calendar, Apple Calendar).
        </div>
      </div>
    </body>
    </html>
  `;

  // Generate calendar invite
  const calendarInvite = generateCalendarInvite(data);

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: `New Booking #${data.bookingId} - ${data.firstName} ${data.surname}`,
    html: emailHtml,
    attachments: [
      {
        filename: `booking-${data.bookingId}.ics`,
        content: calendarInvite,
        contentType: 'text/calendar; charset=utf-8; method=REQUEST'
      }
    ]
  });
}

/**
 * Get booking by ID
 */
app.get('/api/bookings/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await pool.query(
      'SELECT * FROM bookings WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({ error: 'Failed to fetch booking' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;