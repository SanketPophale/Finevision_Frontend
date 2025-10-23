import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import squintImg from "../assets/squint.png"; // 👁️ Add your image file in /src/assets/

export default function SquintPage() {
  const navigate = useNavigate();

  // ✅ Back button → go to Vision Therapy section
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
          src={squintImg}
          alt="Squint vision therapy"
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="w-[60%] md:w-[60%] lg:w-[35%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/40 object-cover"
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
          What is Squint and Why Does It Matter?
        </Motion.h1>

        <div className="text-gray-200 text-xl leading-relaxed space-y-6">
          <p>
            <b>Squint</b>, also known as <b>strabismus</b>, is a condition where the eyes do
            not align properly. Normally, both eyes work together to focus on the same
            point, providing clear single vision and depth perception. With squint, one
            eye may turn inward (<b>esotropia</b>), outward (<b>exotropia</b>), upward
            (<b>hypertropia</b>), or downward (<b>hypotropia</b>).
          </p>

          <p>
            This misalignment can be constant or intermittent and affects all ages,
            though it’s most common in children. Squint can result from a combination of
            genetic and environmental factors such as:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li><b>Hereditary:</b> Runs in families; risk increases if a parent or sibling has it.</li>
            <li><b>Refractive Errors:</b> Uncorrected farsightedness (hyperopia) strains eye muscles.</li>
            <li><b>Neurological Issues:</b> Conditions like cerebral palsy, Down syndrome, or brain injuries.</li>
            <li><b>Eye Muscle Problems:</b> Weakness or paralysis in eye movement muscles.</li>
            <li><b>Other Triggers:</b> Premature birth, infections, or prolonged screen time in children.</li>
          </ul>

          <p>
            Early detection is crucial — untreated squint can cause <b>amblyopia</b> (“lazy
            eye”), where the brain ignores input from the misaligned eye, risking
            permanent vision loss.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-4">
            Common Indicators of Squint
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>Visible eye misalignment when focusing on near/far objects</li>
            <li>Frequent head tilting or turning to avoid double vision</li>
            <li>Closing or covering one eye to see better</li>
            <li>Poor depth perception and clumsiness</li>
            <li>In children: excessive eye rubbing, squinting in bright light, or avoiding reading</li>
          </ul>

          <p>
            If these signs are noticed, consult an optometrist or ophthalmologist for a
            detailed eye exam.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            Vision Therapy – A Non-Surgical Path to Better Alignment
          </h2>

          <p>
            Vision therapy is an <b>Optometrist-supervised</b> program of customized eye
            exercises that improve coordination, focus, and tracking. Unlike glasses or
            surgery, it retrains the brain-eye connection to enhance natural alignment.
            It’s backed by the <b>American Optometric Association</b> for managing mild to
            moderate squint cases.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li><b>Duration:</b> 30–45 min per session, 1–2× weekly for 3–12 months + home practice.</li>
            <li><b>Setting:</b> In-office exercises with prisms, filters, software; plus home activities.</li>
            <li><b>Who Benefits:</b> Kids (6–18 yrs) have top success, but adults with acquired squint can improve too.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            How Vision Therapy Works
          </h2>
          <p>Therapy strengthens visual skills through progressive, engaging exercises:</p>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li><b>Eye Teaming:</b> Convergence/divergence drills like Brock-string exercises.</li>
            <li><b>Tracking & Saccades:</b> Following moving targets or quick gaze shifts.</li>
            <li><b>Accommodation Focus:</b> Switching focus between near/far targets.</li>
            <li><b>Stereopsis:</b> Game-based 3D depth-perception training.</li>
            <li><b>Anti-Suppression:</b> Patching/filters to balance both eyes’ input.</li>
          </ul>

          <p>
            Sessions are designed to be fun and game-like — think video games, trampoline
            jumps with visual cues, or marble mazes — to keep children engaged.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            Success Rates
          </h2>
          <p>
            Vision therapy delivers holistic improvements without surgery:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>70–90% of patients show improved alignment and reduced symptoms.</li>
            <li>Eliminates need for surgery in 50–75% of intermittent outward squints.</li>
            <li>Boosts reading speed, attention, coordination, and reduces fatigue.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            Who Can Benefit from Strabismus Vision Therapy?
          </h2>
          <p>
            Vision therapy helps if you or your child:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>Have an eye turn that comes and goes</li>
            <li>Struggle with judging distances or catching objects</li>
            <li>Had squint surgery but still feel strain or misalignment</li>
            <li>Experience double vision or suppression</li>
            <li>Lose place while reading or avoid reading tasks</li>
            <li>Have reduced comfort or focus during visual tasks</li>
          </ul>

          <p>
            We support patients from early childhood to adulthood, tailoring therapy by
            age, lifestyle, and type of strabismus.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            What Improvement Looks Like
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>More stable, aligned eyes (especially for reading or screen work)</li>
            <li>Reduced fatigue and eye strain</li>
            <li>Better 3D depth perception and coordination</li>
            <li>Improved concentration and visual comfort</li>
            <li>In surgical cases, prevents regression and retrains the brain</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            Tips for Parents and Teachers
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>Watch for head tilting, eye rubbing, or skipping lines while reading</li>
            <li>Use reading windows or pointers for tracking</li>
            <li>Encourage outdoor play to build coordination</li>
            <li>Schedule full vision exams early—early therapy yields better outcomes</li>
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
