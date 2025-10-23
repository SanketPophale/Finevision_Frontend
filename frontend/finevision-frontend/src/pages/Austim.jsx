import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import autismImg from "../assets/austim.png"; // 🔹 Place your autism-related image in /src/assets/

export default function Autism() {
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
          src={autismImg}
          alt="Vision Therapy for Autism"
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="w-[60%] md:w-[60%] lg:w-[40%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/40 object-cover"
        />

        <Motion.div
          className="absolute inset-0 -z-10 blur-[100px] bg-gradient-to-r from-blue-500/20 to-purple-600/20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-5xl px-6 md:px-10 pb-16 space-y-8">
        <Motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-[#4d9feb]"
        >
          Vision Therapy for Children with Autism
        </Motion.h1>

        <p className="text-center italic text-lg text-gray-300">
          Helping the Eyes and Brain Work Together for Calmer, Clearer Visual Experiences
        </p>

        <div className="text-gray-200 text-lg leading-relaxed space-y-6">
          <p>
            For many children on the autism spectrum, the world can feel visually
            overwhelming. Bright lights, fast movements, crowded classrooms, and even
            everyday tasks like reading or catching a ball can be challenging—not just due
            to behavior or attention, but because of how the brain processes visual
            information.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-4">
            1. Why Vision Matters in Autism
          </h2>
          <p>
            Many children with Autism Spectrum Disorder (ASD) have healthy-looking eyes,
            but vision is more than just 6/6 clarity. It’s about how the brain interprets
            what the eyes see, including:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-3">
            <li>Eye teaming — are both eyes working together?</li>
            <li>Eye tracking — can the child follow moving objects or read across a page?</li>
            <li>Visual attention — can they stay focused on what they see?</li>
            <li>Depth perception — can they judge distance accurately?</li>
          </ul>
          <p>
            These visual skills affect daily tasks such as reading, writing, eye contact,
            and navigating the environment safely.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-4">
            2. Common Visual Signs in Autism
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-3">
            <li>Looks sideways at objects instead of directly</li>
            <li>Covers or rubs eyes often</li>
            <li>Avoids bright lights or direct eye contact</li>
            <li>Appears clumsy or bumps into objects</li>
            <li>Enjoys spinning or moving objects repeatedly</li>
            <li>Gets tired or frustrated with close-up tasks</li>
          </ul>
          <p>
            These are not “bad behaviors” — they are signs of visual stress or sensory
            overload.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-4">
            3. How Vision Therapy Can Help
          </h2>
          <p>
            Vision therapy is a structured program that helps the brain and eyes work
            better together. At Finevision, we design individualized, sensory-sensitive
            programs for each child.
          </p>

          <h3 className="text-xl font-semibold text-[#4d9feb]">Step 1: Functional Vision Assessment</h3>
          <ul className="list-disc list-inside space-y-2 pl-3">
            <li>Gentle, play-based tests for eye teaming, focusing, tracking, and depth</li>
            <li>Observes sensory preferences like light, sound, and motion</li>
            <li>Includes parent concerns and teacher input</li>
            <li>Duration: typically 60–75 minutes</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#4d9feb]">Step 2: Personalised Therapy Plan</h3>
          <ul className="list-disc list-inside space-y-2 pl-3">
            <li>Short, structured sessions (20–30 minutes)</li>
            <li>Uses toys, lights, puzzles, and gentle motion activities</li>
            <li>Adapts to each child’s sensory comfort and tolerance</li>
            <li>Incorporates calming tools — weighted lap pads, soft lighting, breaks</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#4d9feb]">Step 3: Home & School Support</h3>
          <ul className="list-disc list-inside space-y-2 pl-3">
            <li>Simple 5–10 minute home exercises guided by parents</li>
            <li>Classroom recommendations — proper seating, reading windows, timers</li>
            <li>Visual schedules and charts for consistency</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-4">
            4. What Improvements Can Look Like
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-3">
            <li>Better eye contact and longer focus on faces</li>
            <li>Improved tracking while reading or copying</li>
            <li>Enhanced coordination and balance</li>
            <li>Reduced visual avoidance or distress in bright spaces</li>
            <li>Improved posture and attention during schoolwork</li>
          </ul>
          <p>
            These visual improvements often enhance progress in speech, occupational, and
            behavioral therapies too.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-4">
            5. Our Promise: Gentle, Family-Centered Care
          </h2>
          <p>
            We understand that children with autism need a flexible and respectful
            approach. Our clinic is designed to be child-friendly and sensory-safe — soft
            lights, minimal noise, and space for free movement.
          </p>
          <p>
            Every session is paced to your child’s comfort, ensuring positive engagement
            and steady progress.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-4">
            6. Vision Therapy Works Best When:
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-3">
            <li>Started early — though older children can benefit too</li>
            <li>Paired with regular eye check-ups and professional collaboration</li>
            <li>Reinforced consistently at home and school</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-4">
            7. Ready to Explore If Vision Therapy Can Help?
          </h2>
          <p>
            We offer a dedicated <b>Autism & Vision Screening</b> at Finevision to assess
            and support children who may benefit from structured visual care.
          </p>
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
