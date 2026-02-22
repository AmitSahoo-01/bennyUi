import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import BadgeHoverPage from "./pages/BadgeHover";
import ExpandHoverAnimationPage from "./pages/ExpandHoverAnimation";
import RadialBackgroundPage from "./pages/RadialBackground";
import CardHoverPage from "./pages/CardHover";
import RadialTextPage from "./pages/RadialText";
import TextAnimationPage from "./pages/TextAnimation";
import CustomCardCursorPage from "./pages/CustomCardCursorP";
import AnimatedArrowPage from "./pages/AnimatedArrow";
import HomeIconPage from "./pages/HomeIcon";
import HoverArrowPage from "./pages/HoverArrow";
import HoverMenuBarPage from "./pages/HoverMenuBar";
import AnimatedSendArrowPage from "./pages/AnimatedSendArrow";
import AnimatedCardPage from "./pages/AnimatedCard";
import AnimatedPagePage from "./pages/AnimatedPage";

import Home from "./pages/Home";
import Navbar from "./components/Layout/Navbar";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/badgehover" element={<BadgeHoverPage />} />
        <Route path="/components/expandhoveranimation" element={<ExpandHoverAnimationPage />} />
        <Route path="/components/radialbackground" element={<RadialBackgroundPage />} />
        <Route path="/components/cardhover" element={<CardHoverPage />} />  
        <Route path="/components/radialtext" element={<RadialTextPage />} />    
        <Route path="/components/textanimation" element={<TextAnimationPage />} />    
        <Route path="/components/customcardcursor" element={<CustomCardCursorPage />} />   
        <Route path="/components/animatedarrow" element={<AnimatedArrowPage />} />   
        <Route path="/components/homeicon" element={<HomeIconPage />} />   
        <Route path="/components/hoverarrow" element={<HoverArrowPage />} />   
        <Route path="/components/hovermenubar" element={<HoverMenuBarPage />} />   
        <Route path="/components/animatedsendarrow" element={<AnimatedSendArrowPage />} />   
        <Route path="/components/animatedcard" element={<AnimatedCardPage />} />   
        <Route path="/components/animatedpage" element={<AnimatedPagePage />} />   
      </Routes>
    </Router>
  );
}
