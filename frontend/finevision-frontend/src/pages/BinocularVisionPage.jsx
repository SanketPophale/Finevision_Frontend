import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import binocularImg from "../assets/doctor.png"; // ✅ replace with your own image path

export default function BinocularVisionPage() {
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
      {/* ===== HERO IMAGE WITH ANIMATION ===== */}
      <div className="w-full relative overflow-hidden flex justify-center py-12">
    <Motion.img
  src={binocularImg}
  alt="Binocular Vision Training"
  initial={{ opacity: 0, scale: 0.85, y: 40 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  whileHover={{ scale: 1.03 }}
  className="w-[60%] md:w-[60%] lg:w-[35%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/40 object-cover"
/>


        <Motion.div
          className="absolute inset-0 -z-10 blur-[100px] bg-gradient-to-r from-blue-500/20 to-purple-600/20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ===== TEXT CONTENT ===== */}
      <div className="max-w-5xl px-6 md:px-10 pb-16 space-y-8">
        <Motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-[#4d9feb]"
        >
          Binocular Vision Training
        </Motion.h1>

        <div className="text-gray-200 text-2xl leading-relaxed space-y-6">
          <p>
            <b>Binocular Vision Training</b>, also known as <b>Vision Therapy</b>, is a
            personalized, non-surgical program designed to improve how both eyes work
            together as a team. The therapy strengthens coordination between the eyes and
            the brain to achieve clear, comfortable, and efficient vision. It is
            especially beneficial for individuals who experience eye strain, blurred
            vision, difficulty focusing, or issues with depth perception.
          </p>

          <Motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-semibold text-[#F2C94C] pt-6"
          >
            🩺 Key Facts About Binocular Vision Training
          </Motion.h2>

          <ol className="list-decimal list-inside space-y-4 pl-3 text-xl">
            <li>
              <b>What It Is:</b> Binocular Vision Training is a structured program of
              visual exercises that enhance eye coordination, focusing ability, tracking,
              and depth perception. Unlike eyeglasses or contact lenses that correct
              eyesight clarity, this therapy improves how efficiently your eyes and brain
              work together.
            </li>

            <li>
              <b>Who Needs It:</b> This therapy benefits people of all ages who struggle
              with eye strain, headaches, blurred vision during reading or computer work,
              double vision, poor depth perception, or visual fatigue. It is also
              effective for post-concussion vision issues and children with eye teaming or
              tracking difficulties.
            </li>

            <li>
              <b>How It Works:</b> After a comprehensive vision assessment, a customized
              therapy plan is created. Sessions include hands-on and digital activities
              like eye-tracking exercises, focus flexibility drills, prism or lens-based
              stimulation, stereopsis (3D perception) enhancement, and hand-eye
              coordination tasks. These retrain the eyes and brain to communicate
              effectively.
            </li>

            <li>
              <b>Duration of Therapy:</b> Most training programs run for 8–24 weeks,
              depending on the individual’s condition and consistency. Noticeable
              improvement often occurs within the first few sessions, especially when home
              reinforcement exercises are practiced regularly.
            </li>

            <li>
              <b>Benefits and Outcomes:</b> Patients frequently report reduced eye strain,
              improved reading fluency, sharper focus, enhanced visual comfort, better
              sports performance, and overall clearer, more stable vision.
            </li>

            <li>
              <b>Why Choose FineVision:</b> At FineVision Optometry and Vision Therapy
              Centre, the program is conducted by <b>Optometrist Mrs. Nivedita Dabir</b>,
              a trained Vision Therapist. Using advanced visual-motor tools and
              computer-based systems, each program delivers measurable, long-lasting
              results in a professional, patient-friendly environment.
            </li>
          </ol>
        </div>

        {/* ===== BUTTON ===== */}
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
