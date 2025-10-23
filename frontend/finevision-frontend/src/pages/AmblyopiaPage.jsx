import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import amblyopiaImg from "../assets/amblyopia.png"; // place your image here

export default function AmblyopiaPage() {
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
          src={amblyopiaImg}
          alt="Amblyopia therapy session"
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="w-[60%] md:w-[60%] lg:w-[40%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/40 object-cover"
        />

        {/* Floating subtle motion */}
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
          Understanding Amblyopia: <br />
          <span className="text-[#F2C94C]">Conquering the “Lazy Eye”</span>
        </Motion.h1>

        <div className="text-gray-200 text-2xl leading-relaxed space-y-6">
          <p>
            <b>Amblyopia</b> occurs when the brain and eyes fail to work in harmony
            during critical early development—typically before age 7 or 8. The brain
            suppresses input from the weaker eye, causing it to “lazily” underperform,
            even when the eye is structurally normal.
          </p>

          <p>
            Without intervention, amblyopia can persist into adulthood, leading to depth
            perception issues, eye strain, and even partial blindness in the weaker eye.
            But thanks to <b>neuroplasticity</b>, the brain’s ability to rewire itself,
            modern therapy can dramatically improve vision—especially in young patients.
          </p>

          <Motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-semibold text-[#F2C94C] pt-6"
          >
            Why Does One Eye Fall Behind?
          </Motion.h2>

          <p>
            Amblyopia usually arises from imbalances like{" "}
            <b>strabismus</b> (eye misalignment) or unequal refractive power between the
            eyes. The brain prioritizes one eye’s image to avoid double vision,
            effectively “turning off” the other. Over time, neural pathways for the
            weaker eye weaken further.
          </p>

          <p>
            Early detection is crucial—the brain’s visual cortex is most adaptable in
            early childhood. Yet, even adults can benefit from consistent, structured
            <b> vision therapy</b> that retrains the brain to coordinate both eyes.
          </p>

          <Motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl font-semibold text-[#F2C94C] pt-6"
          >
            Common Signs to Watch For
          </Motion.h2>

          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>Squinting or closing one eye frequently</li>
            <li>Tilting the head to use one eye more</li>
            <li>One eye drifting inward or outward</li>
            <li>Poor hand-eye coordination or depth perception</li>
            <li>Frequent headaches or eye fatigue</li>
          </ul>

          <p>
            Early therapy can make a lifetime of difference—enhancing visual comfort,
            focus, and confidence.
          </p>
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
