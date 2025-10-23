import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientForm from "./pages/PatientForm";
import VisionTherapy from "./pages/VisionTherapy";
import SportsVision from "./pages/SportsVision";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import DoctorInfo from "./pages/DoctorInfo";
import SplashScreen from "./components/SplashScreen"; 
import AmblyopiaPage from "./pages/AmblyopiaPage";
import SquintPage from "./pages/SquintPage";
import DigitalEyeStrain from "./pages/DigitalEyeStrain";
import EyeCare from "./components/EyeCare";
import LearningVisionIssues from "./pages/LearningVisionIssues";
import BlogDetail from "./pages/BlogDetails";
import CorticalVisual from "./pages/CorticalVisual";
import Autism from "./pages/Austim";
import FAQSection from "./components/FAQSection";
import BinocularVisionPage from "./pages/BinocularVisionPage";


export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Automatically hide splash after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    // Show splash screen first
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  // After splash, load main app
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 transition-opacity duration-700 ease-in-out">
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision-therapy/amblyopia" element={<AmblyopiaPage />} />
           <Route path="/vision-therapy/squint" element={<SquintPage />} />
          <Route path="/vision-therapy/digitaleyestrain" element={<DigitalEyeStrain />} />
          <Route path="/vision-therapy/learning" element={<LearningVisionIssues />} />
          <Route path="/vision-therapy/visual" element={<CorticalVisual />} />
          <Route path="/vision-therapy/austim" element={<Autism/>} />
          <Route path="/vision-therapy/binocular" element={<BinocularVisionPage/>} />
          <Route path="/about" element={<DoctorInfo />} />
          <Route path="/eye-care" element={<EyeCare />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/patient-form" element={<PatientForm />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/vision-therapy" element={<VisionTherapy />} />
          <Route path="/sports-vision/sportsvision" element={<SportsVision />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

        </Routes>
      </main>
    </div>
  );
}
