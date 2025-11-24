import React from 'react';

//Components
import TopNavbar from "../../components/Nav/TopNavbar";
import Footer from "../../components/Sections/Footer";

//Sections
import ClearanceBanner from "../../components/Sections/Clearance/Banner/ClearanceBanner.component";
import ClearanceServices from "../../components/Sections/Clearance/Services/ClearanceServices.component";
import ClearanceReviews from "../../components/Sections/Clearance/Reviews/ClearanceReviews.component";
import ClearanceFAQs from "../../components/Sections/Clearance/FAQs/ClearanceFAQs.component";


const Clearance = () => {
    return (
        <>
            <TopNavbar />
            <ClearanceBanner />
            <ClearanceServices />
            <ClearanceReviews />
            <ClearanceFAQs />
            <Footer />
        </>
    );
};


export default Clearance;

