import { useState, useRef } from 'react';
import { Recycle, CheckCircle, Shield } from 'lucide-react';
import { Link as RouterLink } from "react-router-dom";

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

 
   

    return (
        <>
            {quoteModalOpen &&
                <QuoteModal
                    modalOpen={quoteModalOpen}
                    formRef={form}
                    emailDisplayMessage={message}
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
                         <RouterLink to='get-quote' >
                        
                        <Button
                            buttonType={BUTTON_TYPE_CLASSES.feature}
                          
                        >
                            Get a Quote
                        </Button>
                         </RouterLink>
                        <RouterLink to='/clearance/pile-of-rubbish' >
                        {/* <Button>Book No</Button> */}
                        </RouterLink>
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