import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import digitalImg from "../assets/digital2.jpg"; // 👁️ Add image in /src/assets/

export default function DigitalEyeStrain() {
  const navigate = useNavigate();

  // ✅ Back to Vision Therapy section
  const goToVisionTherapy = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.querySelector('[name="vision-therapy"]');
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#081229] via-[#132f56] to-[#1e3a8a] text-white flex flex-col items-center">
      {/* ===== HERO IMAGE ===== */}
      <div className="w-full relative overflow-hidden flex justify-center py-12">
        <Motion.img
          src={digitalImg}
          alt="Digital Eye Strain Therapy"
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="w-[80%] md:w-[65%] lg:w-[50%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/40 object-cover"
        />
        
        {/* Floating glow animation */}
        <Motion.div
          className="absolute inset-0 -z-10 blur-[100px] bg-gradient-to-r from-blue-500/20 to-purple-600/20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="max-w-5xl px-6 md:px-10 pb-16 space-y-8">
        <Motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-[#4d9feb]"
        >
          Digital Eye Strain & Vision Therapy
        </Motion.h1>

        <p className="text-lg text-center text-gray-300 italic">
          When Screens Tire the Eyes — Relief Through Therapy & Better Habits
        </p>

        <div className="text-gray-200 text-xl leading-relaxed space-y-6">
          <p>
            In today’s digital age — online classes, work from home, and hours in front of
            screens — <b>Digital Eye Strain</b> (also known as <b>Computer Vision Syndrome</b>)
            is increasingly common. At <b>Finevision Eye Care & Vision Therapy Centre</b>, we
            help reduce symptoms through tailored <b>vision therapy</b>, lifestyle changes,
            and ergonomic solutions to restore long-term comfort.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C]">
            What Is Digital Eye Strain?
          </h2>
          <p>
            It’s a collection of visual and physical symptoms caused by prolonged near work
            or screen use. These may include:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>Dry, burning, or red eyes</li>
            <li>Blurred or fluctuating vision</li>
            <li>Headache, especially around brow or temples</li>
            <li>Difficulty refocusing between near and far</li>
            <li>Neck or shoulder pain from posture strain</li>
            <li>Eye fatigue and light sensitivity</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            Who Experiences It?
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>Students attending online classes</li>
            <li>Professionals working long hours on computers and laptops</li>
            <li>Gamers, content creators, and digital artists</li>
            <li>Anyone frequently using screens in poor lighting or posture</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            How We Assess Digital Eye Strain
          </h2>
          <p>
            During a 30-minute session, we evaluate all aspects of your visual comfort:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>Screen time habits: duration, posture, lighting, and device usage</li>
            <li>Comprehensive vision testing for focusing and eye coordination</li>
            <li>Dry eye or eyelid surface screening (if necessary)</li>
            <li>Assessment of ergonomics: screen distance, angle, lighting, glare</li>
          </ul>
          <p>
            <b>Bring along:</b> your glasses, primary device (laptop/phone), and setup
            photos/screenshots for best recommendations.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            Treatment / Management Plan
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>Vision therapy drills targeting eye coordination and focus flexibility</li>
            <li>Ergonomic corrections: posture, viewing distance, and lighting</li>
            <li>Special computer lenses or coatings (if needed)</li>
            <li>Home-based visual exercises</li>
            <li>Dry-eye relief and hydration practices</li>
          </ul>
          <p>
            <b>Duration:</b> Typically 6–12 weeks for noticeable relief; full program 3–4
            months depending on severity.
          </p>
              
          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            What Improvement Looks Like
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>Less burning, dryness, and redness</li>
            <li>Clearer vision and smoother focus shifts between distances</li>
            <li>Fewer headaches and neck/shoulder pain</li>
            <li>Improved visual comfort during screen time — for study, work, and leisure</li>
          </ul>
        </div>

        {/* ===== BACK BUTTON ===== */}
        <div className="text-center pt-10">
          <Motion.button
            onClick={goToVisionTherapy}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white font-semibold shadow-xl hover:shadow-[#4d9feb]/40 transition"
          >
            ← Go Back to Vision Therapy
          </Motion.button>
        </div>
      </div>
    </div>
  );
}
