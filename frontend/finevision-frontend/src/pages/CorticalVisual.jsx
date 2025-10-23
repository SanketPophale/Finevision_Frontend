import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import cviImg from "../assets/visual11.png"; // 📸 Add an appropriate image (rename if needed)

export default function CorticalVisual() {
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
          src={cviImg}
          alt="Cortical Visual Impairment"
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="w-[80%] md:w-[65%] lg:w-[50%] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-[#4d9feb]/40 object-cover"
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
          Understanding Cortical Visual Impairment (CVI)
        </Motion.h1>

        <p className="text-lg text-center text-gray-300 italic">
          When the Eyes See, but the Brain Struggles to Interpret
        </p>

        <div className="text-gray-200 text-xl leading-relaxed space-y-6">
          <p>
            Cortical Visual Impairment (CVI), also known as Cerebral Visual Impairment, is
            a leading cause of visual impairment in children. Unlike traditional eye
            conditions, CVI originates in the brain rather than the eyes. The eyes
            themselves function normally, capturing light and sending signals through the
            optic nerves, but damage to the brain’s visual processing areas disrupts how
            this information is interpreted. This results in a range of visual challenges
            that can affect daily activities, learning, and development.
          </p>

          <p>
            CVI is not a disease but a neurological condition. With early intervention and
            targeted support, visual skills can improve significantly over time. It’s
            estimated that CVI accounts for up to <b>30% of visual impairments in children
            under 3 years old</b>, making awareness crucial for parents, educators, and
            healthcare providers.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">Causes of CVI</h2>
          <p>
            CVI typically stems from brain injuries or disruptions that affect the
            posterior visual pathways, including the occipital lobe and higher-order
            processing centres.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>
              <b>Perinatal complications:</b> Hypoxic-ischemic encephalopathy (oxygen
              deprivation at birth), prematurity, or low birth weight.
            </li>
            <li>
              <b>Infections and illnesses:</b> Meningitis, encephalitis, or cytomegalovirus
              (CMV) infections in infancy.
            </li>
            <li>
              <b>Neurological disorders:</b> Cerebral palsy, epilepsy, hydrocephalus, or
              traumatic brain injury.
            </li>
            <li>
              <b>Genetic or developmental factors:</b> Rarely, it may be linked to Down
              syndrome or metabolic disorders.
            </li>
          </ul>

          <p>
            These events damage the brain’s ability to integrate visual input with other
            senses, leading to impaired perception rather than outright blindness.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">Symptoms and Signs</h2>
          <p>
            Symptoms of CVI vary widely and can fluctuate based on fatigue, environment, or
            health. Children may have “good days” and “bad days” visually, which
            distinguishes CVI from ocular impairments.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>
              <b>Reduced visual acuity:</b> Difficulty seeing details, such as faces or
              text, even with glasses.
            </li>
            <li>
              <b>Visual attention challenges:</b> Staring at lights or edges instead of the
              main focus; trouble tracking moving items.
            </li>
            <li>
              <b>Field and perception issues:</b> Narrow visual fields, poor depth
              perception, or sensitivity to clutter, light, or color contrasts.
            </li>
            <li>
              <b>Higher-order deficits:</b> Struggles with recognizing familiar objects,
              faces, or spatial relationships.
            </li>
            <li>
              <b>Associated behaviors:</b> Preferring auditory or tactile input over visual
              cues, or arching the back when overstimulated.
            </li>
          </ul>

          <p>
            Early detection is vital, as untreated CVI can impact cognitive, social, and
            motor development.
          </p>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">Diagnosis of CVI</h2>
          <p>Diagnosing CVI requires a multidisciplinary approach:</p>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>
              <b>Comprehensive eye exam:</b> Ensures the eyes and optic nerves are healthy.
            </li>
            <li>
              <b>Medical history review:</b> Birth complications, infections, or
              neurological events.
            </li>
            <li>
              <b>Neuroimaging:</b> MRI or CT scans to visualize brain damage in visual
              pathways.
            </li>
            <li>
              <b>Functional vision assessment:</b> Observation of real-world responses
              using the <b>CVI Range Assessment</b>.
            </li>
            <li>
              <b>Developmental evaluation:</b> Input from occupational therapists and
              neurologists to gauge broader impact.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            Treatment and Management Strategies
          </h2>
          <p>
            While there is no “cure” for CVI, proactive management can unlock a child’s
            visual potential through neuroplasticity — the brain’s ability to rewire
            itself.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>
              <b>Vision Therapy:</b> Weekly sessions (1–2 hours) combined with home
              programs to improve focus, tracking, and interpretation.
            </li>
            <li>
              <b>Environmental Modifications:</b> Simplify surroundings, reduce clutter, use
              bold colors, and control lighting to minimize overload.
            </li>
            <li>
              <b>Multidisciplinary Support:</b> Occupational and physical therapy to improve
              hand-eye coordination; educational interventions using visual aids,
              audiobooks, and assistive tech.
            </li>
            <li>
              <b>Medical Management:</b> Treat underlying issues like seizures to stabilize
              visual performance.
            </li>
            <li>
              <b>Parental Involvement:</b> Narrate visuals (“I see the red ball rolling”) and
              encourage exploration at the child’s own pace.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#F2C94C] pt-6">
            Living with CVI: Hope and Resources
          </h2>
          <p>
            CVI presents challenges, but it doesn’t define a child’s future. With therapy
            and supportive strategies, many children thrive academically and socially,
            transforming visual hurdles into unique strengths such as heightened auditory
            memory and problem-solving.
          </p>

          <h3 className="text-xl font-semibold text-[#F2C94C] pt-4">Seek Help If:</h3>
          <ul className="list-disc list-inside space-y-2 pl-3 text-xl">
            <li>Your child avoids eye contact or seems “blind” inconsistently.</li>
            <li>Visual tasks take unusually long or cause frustration.</li>
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
