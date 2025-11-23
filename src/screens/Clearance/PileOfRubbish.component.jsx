import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";

import Rubbish from '../../assets/img/Clearance/rubbish-temp.jpg';

import QuoteModal from '../../components/Elements/Modal/QuoteModal.component';

import Button, { BUTTON_TYPE_CLASSES } from '../../components/Buttons/buton.component';

import TopNavbar from '../../components/Nav/TopNavbar';

const PileOfRubbish = () => {
    const [quoteModalOpen, setQuoteModalOpen] = useState(false);
    const [message, setMessage] = useState("");
    const form = useRef(null);

    const handleQuoteClick = () => {
        document.body.style.overflow = "hidden"
        //const newSelectedproduct = products.filter((product) => product.id === productId)
        setQuoteModalOpen(true);
    };

    const handleModalClose = () => {
        document.body.style.overflow = "unset"
        setQuoteModalOpen(false);
    };

    const sendEmail = () => {
        //e.preventDefault();

        // if (!recaptchaToken) {
        //     setMessage("Please complete the reCAPTCHA");
        //     return;
        // }

        const formEl = form.current;

        // Optional: Enhanced conversions
        // if (window.gtag) {
        //     window.gtag("set", "user_data", {
        //         email: formEl.user_email.value,
        //         phone_number: formEl.user_number.value,
        //         first_name: formEl.fname.value,
        //         address: {
        //             postal_code: formEl.user_postcode.value,
        //             country: "GB"
        //         }
        //     });
        // }

        emailjs
            .sendForm("service_go85cgq", "template_9r8mipf", formEl, "n3cGJxtvclpiQjFrD")
            .then(
                (result) => {
                    console.log(result.text);
                    setMessage("Your message has been received");

                    // 🔁 Redirect to thank you page (conversion tag fires there)
                    //window.location.replace("/thankyou");
                },
                (error) => {
                    setMessage("Error sending message, please email hello@bristolpropertymaintenance.co.uk");
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            {quoteModalOpen &&
                <QuoteModal
                    modalOpen={quoteModalOpen}
                    handleModalClose={handleModalClose}
                    formRef={form}
                    emailDisplayMessage={message}
                    sendEmail={sendEmail}
                />
            }

            <TopNavbar />

            <div style={{ maxWidth: '80%', marginInline: 'auto' }}>
                <div style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'space-between',
                    marginTop: '10rem',
                    marginBottom: '2rem'
                }}>
                    <div style={{ width: '34px' }}>
                        <p>Back</p>
                    </div>
                    <h3 style={{ display: 'block', textAlign: 'center' }}>Step 1: Select size</h3>
                    <div style={{ width: '34px' }}></div>
                </div>

                <div>
                    <div style={{
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <div>
                                Small
                            </div>
                            <div>
                                Medium
                            </div>
                            <div>
                                Large
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>Unsure what to choose?</span>
                            <Button
                                buttonType={BUTTON_TYPE_CLASSES.inline}
                                onClick={() => handleQuoteClick()}
                            >Get a Quote</Button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            {/* Size Card */}
                            <div style={{ width: '90%', padding: '1rem auto 1rem 1rem', backgroundColor: 'red', borderRadius: '0.5rem' }}>
                                <div style={{ display: 'flex', gap: '2rem' }}>
                                    <div style={{ position: 'relative', overflow: 'hidden', height: '22rem', width: 'auto', borderRadius: '0.5rem' }}>
                                        <img src={Rubbish} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '8/9' }} />
                                    </div>
                                    <div>
                                        <h4>Title</h4>
                                        <p>Subtitle</p>
                                        <div>
                                            <div>
                                                <span>The item size</span>
                                                <span>Item size estimate</span>
                                            </div>
                                            <div>
                                                <span>The item weight</span>
                                                <span>Item weight estimate</span>
                                            </div>
                                            <div>
                                                <span>Number of bags</span>
                                            </div>
                                            <div>
                                                <span>Time taken</span>
                                            </div>
                                        </div>
                                        <Button buttonType={BUTTON_TYPE_CLASSES.feature}>Select Load</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div></div> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PileOfRubbish;
