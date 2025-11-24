import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

// Screens
import Landing from "./screens/Landing";
import Landlords from './screens/Landlords';
import Commercial from '../src/screens/Commercial'
import JoineryServices from "./screens/JoineryPage";
import FinancePage from "./screens/FinancePage";
import ThankYou from "./screens/ThankYou";
import Clearance from './screens/Clearance/Clearance.component'
import PileOfRubbish from "./screens/Clearance/PileOfRubbish.component";
import DynamicPage from "./components/DynamicPage.jsx";
import GetQuotePage from "./screens/GetQuotePage.jsx";  // NEW
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function App() {
  return (
    <Router>
      <>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
        </Helmet>

        <Routes>
          <Route index element={<Landing />} />
          <Route path="landlords" element={<Landlords />} />
          <Route path="commercial" element={<Commercial />} />
          <Route path="clearance" element={<Clearance />} />
          <Route path="clearance/get-quote" element={<GetQuotePage />} />
          <Route path="joinery" element={<JoineryServices />} />
          <Route path="thankyou" element={<ThankYou />} />
          <Route path=":slug" element={<DynamicPage />} />
          <Route path="zero-percent-finance" element={<FinancePage />} />
          <Route path="thankyou" element={<ThankYou />} />
          <Route path="/" element={<Landing />} />
          <Route path="/landlords" element={<Landlords />} />
          <Route path="/commercial" element={<Commercial/>}/>
          <Route path="/joinery" element={<JoineryServices/>}/>
          <Route path="/thankyou" element={<ThankYou/>}/>
          <Route path="/zero-percent-finance" element={<FinancePage/>}/>
          <Route path="/:slug" element={<DynamicPage/>}/>
        </Routes>
      </>
    </Router>
  );
}