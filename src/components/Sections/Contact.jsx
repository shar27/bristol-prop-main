import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import ThankYou from "../../screens/ThankYou";
import WhatsappIcon from "../Elements/WhatsappIcon";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const form = useRef();

  useEffect(() => {
    // Set the current URL in the hidden input field when component mounts
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
      setMessage("Please complete the reCAPTCHA");
      return;
    }
  
    const formEl = form.current;
  
    // Optional: Enhanced conversions
    if (window.gtag) {
      window.gtag("set", "user_data", {
        email: formEl.user_email.value,
        phone_number: formEl.user_number.value,
        first_name: formEl.fname.value,
        address: {
          postal_code: formEl.user_postcode.value,
          country: "GB"
        }
      });
    }
  
    emailjs
      .sendForm("service_go85cgq", "template_zjh82na", formEl, "n3cGJxtvclpiQjFrD")
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Your message has been received");
  
          // 🔁 Redirect to thank you page (conversion tag fires there)
          window.location.replace("/thankyou");
        },
        (error) => {
          setMessage("Error sending message, please email hello@bristolpropertymaintenance.co.uk");
          console.log(error.text);
        }
      );
  };
  
  

  return (
    <Wrapper id="contactlg">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Get a Free Quote</h1>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-10">
              {message}
              <Form onSubmit={sendEmail} ref={form} id="contactForm">
                <label className="font13">First name:</label>
                <input
                  required
                  type="text"
                  name="fname"
                  className="font20 extraBold"
                />
                <label className="font13">Number:</label>
                <input
                  required
                  type="tel"
                  name="user_number"
                  className="font20 extraBold"
                />
                <label className="font13">Email:</label>
                <input
                  required
                  type="email"
                  name="user_email"
                  className="font20 extraBold"
                />
                <label className="font13">Postcode:</label>
                <input
                  required
                  type="text"
                  name="user_postcode"
                  className="font20 extraBold"
                />

                <label className="font13">Enquiry Type:</label>
                <select
                  required
                  name="user_enquiry"
                  className="font20 extraBold"
                >
                  <option value="handyman">Handyman</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="clearance">Clearance</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrician">Electrician</option>
                  <option value="cctv">cctv</option>
                  <option value="Roofing">Roofing</option>
                  <option value="Painting">Painting</option>
                  <option value="Commercial">Commercial</option>
                </select>

                <label className="font13">
                  Have you sent us photos on WhatsApp or Email?
                </label>
                <select
                  required
                  name="user_photos"
                  className="font20 extraBold"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>

                <label className="font13">Subject:</label>
                <input
                  required
                  type="text"
                  name="subject"
                  className="font20 extraBold"
                />
                <label className="font13">Description:</label>
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                />

                <input type="hidden" name="current_url" />

                <ReCAPTCHA
                  sitekey="6LfV9nkqAAAAAKJA-KJdoNsvQDXNTbBDIxkDXKbp"
                  onChange={onReCAPTCHAChange}
                />

                <SubmitWrapper className="flex">
                  <ButtonInput
                    type="submit"
                    value="Submit"
                    className="pointer animate radius8"
                    style={{ maxWidth: "220px" }}
                  />
                </SubmitWrapper>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// Styled components...

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #ff3d00 !important;
  width: 100%;
  border-radius: 6px;
  height: 50px !important;
  padding: 18px 20px;
  outline: none;
  color: #fff;
  &:hover {
    background-color: #ff3d00;
    transform: scale(1.05);
  }

  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SubmitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
