import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import learningImg from "../assets/learning.jpg"; // 📸 Add a suitable image in /src/assets/

export default function LearningVisionIssues() {
  const navigate = useNavigate();

  // ✅ Navigate back to Vision Therapy section
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
          src={learningImg}
          alt="Learning Related Vision Issues"
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="w-[60%] md:w-[60%] lg:w-[35%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/40 object-cover"
        />

        {/* Floating Glow Effect */}
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
          Understanding Learning-Related Vision Issues
        </Motion.h1>

        <p className="text-lg text-center text-gray-300 italic">
          When Seeing Clearly Isn’t Enough — How Vision Affects Learning
        </p>

        <div className="text-gray-200 leading-relaxed space-y-6 text-xl">
          <p>
            Learning-related vision problems, also known as <b>visual efficiency</b> or{" "}
            <b>binocular vision disorders</b>, occur when the eyes and brain struggle to
            work together effectively for tasks like reading, writing, and focusing. These
            issues affect up to <b>20% of school-aged children</b> and can mimic or
            worsen learning disabilities such as dyslexia or ADHD — but they are not the
            same as having 6/6 eyesight.
          </p>

          <p>
            Unlike simple refractive errors, these disorders involve how the eyes{" "}
            <b>team, track, and process</b> visual information, often leading to fatigue,
            frustration, and poor academic performance.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C]">Common Types Include</h2>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>
              <b>Convergence Insufficiency:</b> Eyes drift outward when focusing on near
              objects, causing double vision or strain.
            </li>
            <li>
              <b>Poor Eye Tracking (Saccades):</b> Difficulty moving eyes smoothly across
              text or from board to notebook.
            </li>
            <li>
              <b>Accommodation Problems:</b> Trouble shifting focus between near and far
              distances.
            </li>
            <li>
              <b>Visual Processing Deficits:</b> Difficulty interpreting what the eyes
              see — reversing letters or confusing similar words.
            </li>
          </ul>

          <p>
            These challenges make learning feel overwhelming as the brain expends extra
            energy on seeing clearly rather than understanding. Early identification is
            crucial — left untreated, they can lead to avoidance of reading, low
            self-esteem, or behavioral issues.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            Signs, Symptoms & Impact on Learning
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>
              <b>Physical Signs:</b> Eye rubbing, headaches, tilting head, closing one
              eye, or losing place while reading.
            </li>
            <li>
              <b>Behavioral Clues:</b> Short attention span, avoiding homework, poor
              handwriting, or restlessness during desk work.
            </li>
            <li>
              <b>Performance Indicators:</b> Skipping lines, reversing letters, copying
              errors, or slow reading with low comprehension.
            </li>
          </ul>

          <p>
            A child may read fluently aloud but struggle to understand due to visual
            fatigue. Teachers often notice inconsistent performance, while parents see
            frustration and avoidance.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            Diagnosis: A Comprehensive Approach
          </h2>
          <p>
            Diagnosis goes beyond standard eye chart tests. A developmental optometrist
            evaluates:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>Eye alignment and teamwork (binocular vision)</li>
            <li>Focusing flexibility and endurance</li>
            <li>Tracking accuracy and visual-motor integration</li>
          </ul>
          <p>
            Tools include <b>cover tests</b>, <b>near-point convergence</b> checks, and
            standardized assessments like the <b>Developmental Eye Movement Test</b>.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            Treatment Options
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>
              <b>Vision Therapy:</b> Customized exercises to train coordination and focus;
              sessions last 30–45 minutes, 1–2× weekly for 3–6 months.
            </li>
            <li>
              <b>Corrective Lenses:</b> Prisms or specialized glasses to ease strain.
            </li>
            <li>
              <b>Supportive Aids:</b> Colored overlays or ergonomic setups for comfort.
            </li>
          </ul>
          <p>
            Severe cases like <b>strabismus</b> (eye misalignment) may need surgery, but
            therapy remains the cornerstone with <b>80–90% success rates</b>.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            Tips for Parents & Educators
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>Schedule developmental eye exams by age 6 or sooner if signs appear.</li>
            <li>
              Encourage breaks — the <b>20-20-20 rule</b>: every 20 minutes, look 20 feet
              away for 20 seconds.
            </li>
            <li>Use large fonts, good lighting, and glare-free screens.</li>
            <li>
              Maintain communication between parents, teachers, and eye care
              professionals.
            </li>
          </ul>

          <p>
            By addressing these hidden vision barriers, children can unlock their full
            learning potential and approach academics with renewed confidence.
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
