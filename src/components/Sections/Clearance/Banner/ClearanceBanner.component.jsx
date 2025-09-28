import { useState, useRef } from 'react';
import { Recycle, CheckCircle, Shield } from 'lucide-react';

import emailjs from "@emailjs/browser";

import Button, { BUTTON_TYPE_CLASSES } from '../../../Buttons/buton.component';
import QuoteModal from '../../../Elements/Modal/QuoteModal.component';

import BannerPhoto from '../../../../assets/img/Clearance/moving-van.jpg';

import {
    BannerContainer,
    BannerImageContainer,
    BannerImage,
    BannerOverlay,
    BannerTitle,
    BannerSubTitle,
    BannerTitleContainer,
    BannerButtonsContainer,
    TagContainer,
    TagItem
} from './ClearanceBanner.styles'

const ClearanceBanner = () => {
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
            .sendForm("service_go85cgq", "template_zjh82na", formEl, "n3cGJxtvclpiQjFrD")
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
        <>
            {quoteModalOpen &&
                <QuoteModal
                    modalOpen={quoteModalOpen}
                    handleModalClose={handleModalClose}
                    formRef={form}
                    emailDisplayMessage={message}
                    sendEmail={sendEmail}
                />
            }
            <BannerContainer id='banner'>
                <BannerImageContainer>
                    <BannerImage src={BannerPhoto} alt="Home Banner Photo" />
                </BannerImageContainer>
                <BannerOverlay>
                    <BannerTitleContainer>
                        <BannerTitle>Clearance Services</BannerTitle>
                        <BannerSubTitle>Fast, reliable, and eco-friendly house clearance services. From single items to complete property clearances, we handle it all with care and professionalism.</BannerSubTitle>
                    </BannerTitleContainer>
                    <BannerButtonsContainer>
                        <Button
                            buttonType={BUTTON_TYPE_CLASSES.feature}
                            onClick={() => handleQuoteClick()}
                        >
                            Get a Quote
                        </Button>
                        <Button>View Services</Button>
                    </BannerButtonsContainer>
                    <TagContainer>
                        <TagItem>
                            <CheckCircle />
                            <span>Licensed & Insured</span>
                        </TagItem>
                        <TagItem>
                            <Recycle />
                            <span>Eco-Friendly</span>
                        </TagItem>
                        <TagItem>
                            <Shield />
                            <span>Fully Guaranteed</span>
                        </TagItem>
                    </TagContainer>
                </BannerOverlay>
            </BannerContainer>
        </>
    )
};

export default ClearanceBanner;