import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import ReCAPTCHA from 'react-google-recaptcha';
import { Padding } from '@mui/icons-material';

export default function MiniForm() {
  const [message, setMessage] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const form = useRef();

  useEffect(() => {
    if (form.current) {
      form.current.current_url.value = window.location.href;
    }
  }, []);

  const onReCAPTCHAChange = (token) => {
    setRecaptchaToken(token);
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    if (!recaptchaToken) {
      setMessage('Please complete the reCAPTCHA');
      return;
    }
  
    emailjs.sendForm('service_go85cgq', 'template_zjh82na', form.current, 'n3cGJxtvclpiQjFrD')
      .then((result) => {
        console.log(result.text);
        setMessage('Your message has been received');
  
        // ✅ Google Ads conversion tracking
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-11182108205/hlcPCMjeqrgaEK3chdQp',
            value: 1.0,
            currency: 'GBP',
          });
          
        }
  
        // ✅ Then redirect
        window.location.replace("/thankyou");
  
      }, (error) => {
        setMessage('Error sending message, please email hello@bristolpropertymaintenance.co.uk/');
        console.log(error.text);
      });
  };
  

  return (
    <OverlayWrapper id="contact">
      <InnerFormWrapper>
        <HeaderInfo>
          <h1 className="font30 extraBold">Get a Free Quote Today!</h1>
        </HeaderInfo>

        {message && <Message>{message}</Message>}

        <Form onSubmit={sendEmail} ref={form} id="miniForm">

          <input
            required
            type="text"
            name="fname"
            placeholder="First Name"
            className="font16"
          />

          <input
            required
            type="tel"
            name="user_number"
            placeholder="Phone Number"
            className="font16"
          />

          <input
            required
            type="email"
            name="user_email"
            placeholder="Email Address"
            className="font16"
          />

          <textarea
            rows="3"
            id="message"
            name="message"
            placeholder="Brief Description"
            className="font16"
          />

          <input type="hidden" name="current_url" />

          <ReCAPTCHA
            sitekey="6LfV9nkqAAAAAKJA-KJdoNsvQDXNTbBDIxkDXKbp"
            onChange={onReCAPTCHAChange}
          />

          <SubmitWrapper>
            <ButtonInput type="submit" >Request Your Free Quote</ButtonInput>
           
          </SubmitWrapper>
          <p style={{textAlign: 'center', Padding: '5px'}}>✅ “We’ll call you back within 15 minutes!”</p>
        </Form>
      </InnerFormWrapper>
    </OverlayWrapper>
  );
}

const OverlayWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 100%;
  max-width: 500px;

  @media (max-width: 960px) {
    position: relative;
    transform: none;
    top: auto;
    left: auto;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
  }
`;

const InnerFormWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

  @media (max-width: 960px) {
    padding: 15px;
  }
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
  }
`;

const Message = styled.div`
  margin-bottom: 15px;
  color: green;
  font-weight: bold;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #707070;
    margin-bottom: 12px;
    font-size: 14px;
    padding: 8px 0;

    ::placeholder {
      color: #aaa;
      font-size: 14px;
    }
  }

  textarea {
    min-height: 60px;
  }

  @media (max-width: 860px) {
    padding: 10px 0;
  }
`;

const ButtonInput = styled.button`
background:#FF3D00;
  color: white !important; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              /* White text */
  border: none;              /* Remove border */
  padding: 18px 20px;        /* A bit more padding for better appearance */
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease; /* Smooth transition on hover */
  width: 100%;               /* Optional: if you want it full width */

  /* Optional: Add a border for more visibility */
  /* border: 1px solid #580cd2; */

  &:hover {
    background-color: #FF3D00;
     transform: scale(1.05);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 991px) {
    width: 100%;
  }
`;


const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
