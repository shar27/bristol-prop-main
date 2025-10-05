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

import DynamicPage from "./components/DynamicPage";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
          <Route path="clearance" >
            <Route index element={<Clearance />}/>
            <Route path="pile-of-rubbish" element={<PileOfRubbish />}/>
          </Route>
          <Route path="joinery" element={<JoineryServices />} />
          <Route path="thankyou" element={<ThankYou />} />
          <Route path=":slug" element={<DynamicPage />} />
          <Route path="zero-percent-finance" element={<FinancePage />} />
          <Route path="thankyou" element={<ThankYou />} />
        </Routes>
      </>
    </Router>
  );
}