import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import visualImg from "../assets/visual.jpg";

export default function VisionTherapy() {
  const navigate = useNavigate();

  const goBackToSection = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.querySelector('[name="vision-therapy"]');
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 500);
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
            Enhancing Vision with Precision
          </h1>
          <p className="max-w-4xl mx-auto text-lg text-gray-200 leading-relaxed">
            At <b>Finevision Eye Care & Vision Therapy Centre</b>, we go beyond routine eye check-ups.
            We specialise in <b>functional and developmental vision care</b> — helping children,
            students, professionals, and seniors improve the way their eyes and brain work together.
            <br /><br />
            Our evidence-based programs include <b>neuro-vision rehabilitation</b> and therapy for
            learning-related visual issues, coordination problems, and post-stroke visual challenges.
            <br /><br />
            We proudly serve families across <b>Pune</b> and nearby regions, offering:
          </p>

          <ul className="list-disc list-inside text-left max-w-2xl mx-auto mt-6 space-y-2 text-gray-300 text-xl">
            <li>Personalised vision therapy programs with home support kits</li>
            <li>Child-friendly, sensory-aware sessions</li>
            <li>Progress tracking for parents, teachers, and coaches</li>
            <li>Multilingual environment — English | हिंदी | मराठी</li>
          </ul>

          <p className="mt-6 text-gray-300 text-xl">
            Our mission is not just to treat — but to <b>enhance your vision with precision</b>.  
            We collaborate with parents, educators, and healthcare professionals to improve
            awareness about the vital role of functional vision in learning and behaviour.
            <br /><br />
            <b>Let’s build better vision—together.</b>
          </p>
        </Motion.div>
      </section>

      {/* ===== IMAGE & INTRODUCTION ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <Motion.img
          src={visualImg}
          alt="Vision Therapy"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.03 }}
          className="w-full md:w-1/2 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/30 object-cover"
        />
        <div className="md:w-1/2 space-y-5 leading-relaxed text-gray-200">
          <h2 className="text-3xl font-bold text-[#F2C94C]">
            Vision Therapy
          </h2>
          <p className="text-xl">
            Vision Therapy is a <b>neuro-optometric training</b> program that enhances how the brain
            and eyes coordinate. It is a proven non-surgical method to treat lazy eye, crossed eyes,
            convergence insufficiency, and learning-related vision difficulties.
          </p>
          <p className="text-xl">
            It helps individuals of all ages gain clearer, faster, and more comfortable vision for
            reading, writing, learning, and everyday life.
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-10 text-gray-200">

        {/* What Is Vision Therapy */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#F2C94C]">
            What Is Vision Therapy — And How Can It Help?
          </h3>
<p className="text-xl leading-relaxed">
  Vision Therapy (VT) is a structured, optometrist-supervised program of exercises and activities that
  train the eyes and brain to work together more efficiently. It addresses a wide range of visual
  problems that cannot be corrected by glasses, contact lenses, or surgery alone.
  <br /><br />
  Most people think of good vision as simply “seeing clearly.” But true visual function goes far beyond that.
  Vision Therapy is a structured program of <b>eye-brain training</b> designed to improve the way the
  eyes move, focus, team, and process information.
  <br /><br />
  It helps children and adults who may technically “see well” on an eye chart — but still struggle with
  <b> reading, attention, screen time, sports,</b> or <b>recovering from brain injury.</b>
  <br /><br />
  In simple terms:
  <br />
  Vision Therapy trains the eyes and brain to work together more efficiently — just like physiotherapy
  trains your muscles and joints.
</p>

        </Motion.div>

        {/* Who Is Vision Therapy For */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#F2C94C]">Who Is Vision Therapy For?</h3>
          <h4 className="font-semibold text-[#4d9feb]">👶 Children with:</h4>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xl">
            <li>Amblyopia (Lazy Eye)</li>
            <li>Strabismus (Eye Turn)</li>
            <li>Reading or Learning Difficulties</li>
            <li>Tracking and Focus Issues</li>
            <li>Autism or ADHD-related visual problems</li>
          </ul>

          <h4 className="font-semibold mt-4 text-[#4d9feb]">🧑 Adults with:</h4>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xl">
            <li>Digital Eye Strain (Computer Vision Syndrome)</li>
            <li>Post-Stroke or Brain Injury Vision Challenges</li>
            <li>Stress-Related Visual Discomfort</li>
            <li>Poor Sports Performance</li>
          </ul>
        </Motion.div>

        {/* What It Improves */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#F2C94C]">What Can Vision Therapy Improve?</h3>
          <ul className="list-disc list-inside space-y-2 text-xl">
            <li>Eye teaming and depth perception</li>
            <li>Focusing ability and near-far clarity</li>
            <li>Eye tracking and reading fluency</li>
            <li>Visual processing and attention</li>
            <li>Hand-eye coordination for sports and daily tasks</li>
          </ul>
        </Motion.div>

        {/* How It Works */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#F2C94C]">How Does It Work?</h3>
          <ul className="list-disc list-inside space-y-2 text-xl">
            <li>In-clinic sessions (1–2/week)</li>
            <li>Home-based visual drills (10–15 min/day)</li>
            <li>Tools: prisms, balance boards, and tracking charts</li>
            <li>Progress reports and improvement tracking</li>
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
            ← Go Back to Vision Therapy Section
          </Motion.button>
        </div>
      </section>
    </div>
  );
}
