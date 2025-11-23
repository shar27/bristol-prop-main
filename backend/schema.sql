-- Database Schema for Bristol Property Maintenance Booking System

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    
    -- Customer Information
    first_name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    postcode VARCHAR(10) NOT NULL,
    
    -- Collection Details
    size VARCHAR(20) NOT NULL CHECK (size IN ('small', 'medium', 'large', 'xlarge', 'xxlarge')),
    collection_date DATE NOT NULL,
    collection_window VARCHAR(20) NOT NULL CHECK (collection_window IN ('morning', 'afternoon', 'evening')),
    description TEXT NOT NULL,
    extras JSONB DEFAULT '[]',
    
    -- Additional Options
    property_valuation BOOLEAN DEFAULT FALSE,
    
    -- Pricing
    base_price DECIMAL(10, 2) NOT NULL,
    extras_total DECIMAL(10, 2) DEFAULT 0.00,
    vat DECIMAL(10, 2) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    
    -- Payment Information
    payment_id VARCHAR(255),
    payment_status VARCHAR(50) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
    
    -- Booking Status
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')),
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP
);

-- Create booking_images table
CREATE TABLE IF NOT EXISTS booking_images (
    id SERIAL PRIMARY KEY,
    booking_id INTEGER NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    filename VARCHAR(255) NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    s3_url TEXT,
    data BYTEA,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create booking_notes table (for admin notes)
CREATE TABLE IF NOT EXISTS booking_notes (
    id SERIAL PRIMARY KEY,
    booking_id INTEGER NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    note TEXT NOT NULL,
    created_by VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX idx_bookings_email ON bookings(email);
CREATE INDEX idx_bookings_collection_date ON bookings(collection_date);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_payment_status ON bookings(payment_status);
CREATE INDEX idx_bookings_created_at ON bookings(created_at);
CREATE INDEX idx_booking_images_booking_id ON booking_images(booking_id);
CREATE INDEX idx_booking_notes_booking_id ON booking_notes(booking_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_bookings_updated_at 
    BEFORE UPDATE ON bookings 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Sample query to get booking statistics
-- SELECT 
--     COUNT(*) as total_bookings,
--     SUM(total_price) as total_revenue,
--     AVG(total_price) as average_booking_value,
--     COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_bookings,
--     COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_bookings
-- FROM bookings
-- WHERE created_at >= CURRENT_DATE - INTERVAL '30 days';

-- Sample query to get bookings by date range
-- SELECT 
--     id,
--     first_name,
--     surname,
--     email,
--     phone,
--     collection_date,
--     collection_window,
--     size,
--     total_price,
--     status,
--     payment_status
-- FROM bookings
-- WHERE collection_date BETWEEN '2025-01-01' AND '2025-01-31'
-- ORDER BY collection_date, collection_window;

-- Sample query to get today's collections
-- SELECT 
--     id,
--     first_name || ' ' || surname as customer_name,
--     phone,
--     address,
--     postcode,
--     collection_window,
--     description,
--     total_price
-- FROM bookings
-- WHERE collection_date = CURRENT_DATE
--     AND status IN ('confirmed', 'pending')
-- ORDER BY 
--     CASE collection_window
--         WHEN 'morning' THEN 1
--         WHEN 'afternoon' THEN 2
--         WHEN 'evening' THEN 3
--     END;