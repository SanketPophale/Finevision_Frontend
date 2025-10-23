import { motion as Motion } from "framer-motion";
import doctorImg from "../assets/doctor.png"; // 👈 replace with your doctor photo (place inside src/assets)

export default function DoctorInfo() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ---------- Top Header ---------- */}
        <Motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-blue-950 dark:text-yellow-300 mb-3">
            Meet Our Specialist
          </h1>
          <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Dedicated to improving your visual comfort and clarity through personalized vision care and therapy.
          </p>
        </Motion.div>

        {/* ---------- Doctor Card ---------- */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-blue-100 dark:border-slate-700 overflow-hidden md:flex items-center">
          
          {/* Doctor Photo */}
          <Motion.img
            src={doctorImg}
            alt="Dr. Nivedita Dabir"
            className="w-full md:w-1/2 object-cover h-[400px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Doctor Details */}
          <div className="p-8 md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-950 dark:text-yellow-300">
              Dr. Nivedita Dabir
            </h2>
            <p className="mt-1 text-sky-700 dark:text-yellow-400 font-medium">
              Developmental Optometrist & Vision Therapist
            </p>

            <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
              Dr. Dabir specializes in binocular vision, pediatric eye care, and sports vision enhancement.  
              With over a decade of clinical experience, she has helped hundreds of patients overcome visual discomfort, learning-related vision problems, and eye coordination difficulties through structured vision therapy programs.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-950 dark:text-yellow-300 mb-2">Qualifications</h3>
                <ul className="list-disc list-inside text-sky-700 dark:text-yellow-400 italic space-y-1">
                  <li>M.Optom (Master of Optometry)</li>
                  <li>Member of OVDR (USA)</li>
                  <li>Clinical Vision Therapist – Pediatric & Sports Vision</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-950 dark:text-yellow-300 mb-2">Clinic Info</h3>
                <p className="text-sky-700 dark:text-yellow-400 leading-relaxed">
                  <strong>FineVision Optometry & Therapy Center</strong><br />
                  1, Raghukul Apartments, S.B. Road, Pune 411016<br />
                  📞 +91-90000 00000<br />
                  ✉️ finevisionclinic@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Experience & Mission ---------- */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid md:grid-cols-2 gap-10"
        >
          <div className="bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-950 dark:text-yellow-300 mb-3">
              🩺 10+ Years of Experience
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed">
              Dr. Dabir has worked extensively in the field of optometry, conducting vision screenings, managing binocular vision dysfunctions, and designing patient-specific rehabilitation programs for reading and focus improvement.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-950 dark:text-yellow-300 mb-3">
              🌟 Our Mission
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed">
              To provide the highest quality of personalized eye care and vision therapy that enhances patients’ academic, occupational, and sports performance — helping them see and live better every day.
            </p>
          </div>
        </Motion.div>

        {/* ---------- Achievements ---------- */}
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-blue-950 dark:text-yellow-300 mb-6">
            Recognized For Excellence
          </h3>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-blue-100 dark:border-slate-700 shadow-sm">
              🏆 <p className="mt-3 font-semibold">National Vision Care Award 2022</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-blue-100 dark:border-slate-700 shadow-sm">
              👁️ <p className="mt-3 font-semibold">1000+ Patients Successfully Treated</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-blue-100 dark:border-slate-700 shadow-sm">
              🎓 <p className="mt-3 font-semibold">Certified Behavioral Optometrist</p>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
