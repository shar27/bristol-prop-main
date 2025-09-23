import { useState } from 'react';
import { Recycle, CheckCircle, Shield } from 'lucide-react'

import Button, { BUTTON_TYPE_CLASSES } from '../../../Buttons/buton.component';
import QuoteModal from '../../../Elements/Modal/QuoteModal.component';

import BannerPhoto from '../../../../assets/img/Clearance/moving-van.jpg'

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
    const [quoteModalOpen, setQuoteModalOpen] = useState(true);

    const handleQuoteClick = () => {
        document.body.style.overflow = "hidden"
        //const newSelectedproduct = products.filter((product) => product.id === productId)
        setQuoteModalOpen(true);
    };

    const handleModalClose = () => {
        document.body.style.overflow = "unset"
        setQuoteModalOpen(false);
    };

    return (
        <>
            {quoteModalOpen &&
                <QuoteModal
                    modalOpen={quoteModalOpen}
                    handleModalClose={handleModalClose}
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