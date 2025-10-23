import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// 🖼️ Sports images for slider
import sports1 from "../assets/sports1.png";
import sports2 from "../assets/sports2.png";
import sports3 from "../assets/sports3.png";
import sports4 from "../assets/sports4.png";
import sports5 from "../assets/sports5.png";

export default function SportsVision() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [sports1, sports2, sports3, sports4, sports5];

  // Auto rotate images every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  // Smoothly navigate back to Vision Therapy section
  const goBackToSection = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.querySelector('[name="sports-vision"]');
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#081229] via-[#132f56] to-[#1e3a8a] text-white flex flex-col items-center">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20">
        <Motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#4d9feb]">
            Sports Vision Training
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
            Sharpen Your Game — Train the Eyes Like You Train the Body.  
            Whether you play cricket, badminton, football, tennis, or any other sport, your visual system is key to success.  
            At <b>Finevision Eye Care & Vision Therapy Centre</b>, we help athletes of all levels boost visual accuracy, focus, and reaction time.
          </p>
        </Motion.div>
      </section>

      {/* ===== IMAGE & INTRODUCTION ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Image slider */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          {images.map((img, index) => (
            <Motion.img
              key={index}
              src={img}
              alt={`Sports Vision ${index}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: index === currentImage ? 1 : 0,
                scale: index === currentImage ? 1 : 1.05,
              }}
              transition={{ duration: 0.8 }}
              className="absolute w-full md:w-[90%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/30 object-cover"
            />
          ))}
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 space-y-5 text-gray-200 leading-relaxed">
          <h2 className="text-3xl font-bold text-[#F2C94C]">
            Train Your Vision for Peak Performance
          </h2>
          <p className="text-xl">
            Sports Vision is not just about having 6/6 vision.  
            It’s about how quickly, accurately, and efficiently your eyes and brain work together under dynamic play conditions.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-xl">
            <li>React faster to a moving ball</li>
            <li>Judge distances & speed accurately</li>
            <li>Maintain focus under pressure or glare</li>
            <li>Make quicker split-second decisions</li>
          </ul>
          <p className="text-xl">
            Through structured, optometrist-led training, we develop eye–brain coordination, reaction time, and focus flexibility—skills that define winning performance.
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-10 text-gray-200">
        
        {/* Who Can Benefit */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#F2C94C]">
            Who Can Benefit from Sports Vision?
          </h3>
          <ul className="list-disc list-inside space-y-2 text-xl">
            <li>Cricket players improving timing & reaction</li>
            <li>Footballers sharpening visual awareness</li>
            <li>Tennis or badminton players increasing focus</li>
            <li>Volleyball or hockey players improving coordination</li>
            <li>Archers, swimmers, gymnasts & more</li>
          </ul>
        </Motion.div>

        {/* Skills Trained */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#F2C94C]">Key Visual Skills We Train</h3>
          <ul className="list-disc list-inside space-y-2 text-xl">
            <li>Dynamic Visual Acuity</li>
            <li>Eye–Hand Coordination</li>
            <li>Reaction Time & Visual Processing Speed</li>
            <li>Depth Perception & Focus Flexibility</li>
            <li>Visual Tracking & Peripheral Awareness</li>
            <li>Contrast Sensitivity under glare or low light</li>
          </ul>
        </Motion.div>

        {/* Program Outline */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#F2C94C]">
            What to Expect in a Sports Vision Program
          </h3>
          <ul className="list-disc list-inside space-y-2 text-xl">
            <li>Initial assessment (60–90 min)</li>
            <li>Customised in-clinic & home drills</li>
            <li>Sport-specific visual exercises</li>
            <li>Performance tracking & feedback reports</li>
            <li>Typical duration: 6–12 weeks</li>
          </ul>
        </Motion.div>

        {/* Back Button */}
        <div className="text-center pt-10">
          <Motion.button
            onClick={goBackToSection}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white font-semibold shadow-xl hover:shadow-[#4d9feb]/40 transition"
          >
            ← Go Back to Sports Vision Section
          </Motion.button>
        </div>
      </section>
    </div>
  );
}
