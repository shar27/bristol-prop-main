import React from 'react';

import TopNavbar from "../../components/Nav/TopNavbar";
import Footer from "../../components/Sections/Footer";
import Contact from "../../components/Sections/Contact";

import Button, { BUTTON_TYPE_CLASSES } from '../../components/Buttons/buton.component';

import BannerPhoto from '../../assets/img/Clearance/clearance-banner.jpg'

import {
    Wrapper,
    BannerContainer,
    BannerImageContainer,
    BannerImage,
    BannerOverlay,
    BannerTitle,
    BannerSubTitle,
    BannerTitleContainer,
    BannerButtonsContainer
} from './Clearance.styles'

const Clearance = () => {
    return (
        <Wrapper>
            <TopNavbar />

            <BannerContainer>
                <BannerImageContainer>
                    <BannerImage src={BannerPhoto} alt="Home Banner Photo" />
                </BannerImageContainer>
                <BannerOverlay>
                    <BannerTitleContainer>
                        <BannerTitle>Clearance</BannerTitle>
                        <BannerSubTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate, ut vero labore cum repellat laboriosam earum voluptatem, impedit quasi id deserunt incidunt enim blanditiis nulla ab reiciendis quam similique.</BannerSubTitle>
                    </BannerTitleContainer>
                    <BannerButtonsContainer>
                        <Button buttonType={BUTTON_TYPE_CLASSES.feature}>Get a Quote</Button>
                        <Button>View Services</Button>
                    </BannerButtonsContainer>
                </BannerOverlay>
            </BannerContainer>
            <Footer />
        </Wrapper>
    )
};


export default Clearance;




