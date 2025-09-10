import React from 'react';

import TopNavbar from "../../components/Nav/TopNavbar";
import Footer from "../../components/Sections/Footer";
// import Contact from "../../components/Sections/Contact";
import ClearanceBanner from "../../components/Sections/Clearance/Banner/ClearanceBanner.component" 
import ClearanceServices from "../../components/Sections/Clearance/Services/ClearanceServices.component" 



const Clearance = () => {
    return (
        <>
            <TopNavbar />
            <ClearanceBanner />
            <ClearanceServices />
            <Footer />
        </>
    )
};


export default Clearance;




