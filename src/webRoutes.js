import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Index from "./components/Index";
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import DetailBlog from "./components/DetailBlog";
import Donate from "./components/Donate";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HowItWork from "./components/HowItWork";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

function WebRoutes() {
  return (
    <>
      <Header /> {/* Now inside Router */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<DetailBlog />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/how-it-works" element={<HowItWork />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-conditions" element={<TermsAndConditions/>} />
        <Route path="/*" element={<Navigate to="/"/>} />




      </Routes>
      <Footer /> {/* Now inside Router */}
    </>
  );
}

export default WebRoutes;
