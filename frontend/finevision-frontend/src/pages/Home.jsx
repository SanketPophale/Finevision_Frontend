import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";
import logo from "../assets/log11.png";
import doctorImg from "../assets/about456.png";
import therapyImg from "../assets/therapy.png";
import EyeCare from "../components/EyeCare";
import sports2 from "../assets/sports2.png";
import blogImage from "../assets/blog2.png";
import emailjs from "@emailjs/browser";
import FAQSection from "../components/FAQSection";

export default function Home() {
  // -------------------- THEME SETUP -------------------- //
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // -------------------- CONTACT FORM -------------------- //
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState("");

  // Replace these with your actual EmailJS IDs
  const SERVICE_ID = "service_8ykot9l"; // ✅ same service used for patient form
  const TEMPLATE_ID = "template_contact";  // ✅ your contact form template
  const PUBLIC_KEY = "hjZTXcOwsKQj4pxvb";    // ✅ your EmailJS public key

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert("");

    if (!form.name || !form.email || !form.message) {
      setAlert("⚠️ Please fill in all fields before sending.");
      setLoading(false);
      return;
    }

    try {
      const formData = {
        name: form.name,
        email: form.email,
        message: form.message,
        date: new Date().toLocaleString(),
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setAlert("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ EmailJS error:", error);
      setAlert("❌ Failed to send message. Please try again later.");
    }

    setLoading(false);
  };
    return (
    <div
      className={`min-h-screen scroll-smooth transition-colors duration-700 ${
        theme === "light"
          ? "bg-[#F7F7F5] text-[#1F2E40]"
          : "bg-gradient-to-br from-[#0a0f2c] via-[#1c2b50] to-[#2d3a6a] text-white"
      }`}
    >
      {/* ======== HEADER ======== */}
      <header className="w-full text-center py-8 flex flex-col items-center gap-6 pt-12">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Fine Vision Logo"
            className={`h-20 w-20 object-contain rounded-full ${
              theme === "light"
                ? "border-[#F2C94C] shadow-md"
                 : "border-[#4d9feb] shadow-[0_0_15px_rgba(77,159,235,0.4)] bg-amber-100"
             }`}
           />

          <div>
            <h1
              className={`text-3xl font-extrabold tracking-widest ${
                theme === "light" ? "text-[#1F2E40]" : "text-[#4d9feb]"
              }`}
            >
              FINE
              <span
                className={theme === "light" ? "text-blue-400" : "text-white"}
              >
                VISION
              </span>
            </h1>
            <p className="text-base italic opacity-80">
              Eye Care & Vision Therapy Center
            </p>
          </div>
        </div>

        {/* ======== MENU LINKS ======== */}
        <div className="flex flex-wrap justify-center gap-8 mt-4 text-lg font-semibold">
          {[
            { name: "Home", path: "home" },
            { name: "About Me", path: "about" },
            { name: "Vision Therapy", path: "vision-therapy" },
            { name: "Sports Vision", path: "sports-vision" },
            { name: "Eye Care", path: "eyecare" },
            { name: "Blogs", path: "blogs" },
            { name: "FAQs", path: "faq"},
            { name: "Contact Us", path: "contact" },
          ].map((link, i) => (
            <ScrollLink
              key={i}
              to={link.path}
              smooth={true}
              duration={700}
              offset={-50}
              className={`cursor-pointer hover:scale-110 transition-all duration-300 ${
                theme === "light"
                  ? "text-[#1F2E40] hover:text-[#F2C94C]"
                  : "text-gray-300 hover:text-[#4d9feb]"
              }`}
            >
              {link.name}
            </ScrollLink>
          ))}

          <Link
            to="/patient-form"
            className={`hover:scale-110 transition-all duration-300 ${
              theme === "light"
                ? "text-[#1F2E40] hover:text-[#F2C94C]"
                : "text-gray-300 hover:text-[#4d9feb]"
            }`}
          >
            Patient Form
          </Link>




          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`ml-4 px-5 py-3 rounded-full font-bold shadow-md transition-all text-base ${
              theme === "light"
                ? "bg-[#1F2E40] text-white hover:bg-[#F2C94C] hover:text-[#1F2E40]"
                : "bg-white text-[#1F2E40] hover:bg-[#F2C94C]"
            }`}
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </header>

      {/* ======== HERO SECTION ======== */}
      <Element name="home">
        <section
          className={`relative flex flex-col md:flex-row items-center justify-center min-h-screen px-10 py-16 overflow-hidden ${
            theme === "light"
              ? "bg-[#fff] text-[#1F2E40]"
              : "bg-gradient-to-br from-[#0a0f2c] via-[#1c2b50] to-[#2d3a6a] text-white"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/src/assets/eye1.png')",
            }}
          ></div>

          <div
            className={`absolute inset-0 ${
              theme === "light" ? "bg-white/70" : "bg-black/60"
            }`}
          ></div>

          <Motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-start text-left space-y-8"
          >
            <p
              className={`text-xl italic font-semibold ${
                theme === "light" ? "text-[#3d614b]" : "text-[#a4b8ff]"
              }`}
            >
              Empowering the True Vision of Life
            </p>
            <h1
              className={`text-5xl md:text-6xl font-extrabold leading-tight ${
                theme === "light"
                  ? "text-[#1F2E40]"
                  : "text-white drop-shadow-[0_0_12px_rgba(120,180,255,0.4)]"
              }`}
            >
               <span className="text-[#4d9feb]">F I N E</span>{" "}
                 <span className="text-white">V I S I O N</span>

            </h1>
            <p
              className={`text-xl font-medium max-w-lg ${
                theme === "light" ? "text-[#30523B]" : "text-gray-200"
              }`}
            >
              Personalized eye care and advanced vision therapy designed to
              strengthen how your eyes and brain work together.
            </p>

            <div className="flex gap-6 mt-6">
              <Link
                to="/patient-form"
                className={`px-8 py-4 rounded-xl font-bold shadow-lg transition-all text-lg ${
                  theme === "light"
                    ? "bg-[#F2C94C] text-[#1F2E40] hover:bg-[#1F2E40] hover:text-white"
                    : "bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white hover:opacity-90"
                }`}
              >
                Book Appointment
              </Link>
              <ScrollLink
                to="vision-therapy"
                smooth={true}
                duration={700}
                offset={-50}
                className={`px-8 py-4 rounded-xl border text-lg font-semibold transition-all cursor-pointer ${
                  theme === "light"
                    ? "border-[#1F2E40] text-[#1F2E40] hover:bg-[#1F2E40] hover:text-white"
                    : "border-[#4d9feb] text-white hover:bg-[#4d9feb]/20"
                }`}
              >
                Learn More
              </ScrollLink>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
          >
            <Motion.img
              src="/src/assets/eye.png"
              alt="Vision Hero"
              className="w-[85%] max-w-[600px] rounded-3xl shadow-2xl object-contain"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </Motion.div>
        </section>
      </Element>

{/* ======== ABOUT ======== */}
<Element name="about">
  <section
    className={`min-h-screen py-20 ${
      theme === "light"
        ? "bg-[#FFFFFF] text-[#1F2E40]"
        : "bg-gradient-to-br from-[#0c1433] via-[#1b2e59] to-[#27488c] text-white"
    }`}
  >
    <div className="max-w-6xl mx-auto px-8">
      {/* === Section Title === */}
      <Motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1
          className={`text-5xl font-extrabold mb-5 ${
            theme === "light" ? "text-[#1F2E40]" : "text-[#4d9feb]"
          }`}
        >
          About Me
        </h1>
        <p className="max-w-2xl mx-auto text-2xl opacity-80 leading-relaxed">
          Dedicated to improving your visual comfort and clarity through
          personalized vision care and therapy.
        </p>
      </Motion.div>

      {/* === Profile Card === */}
      <div
        className={`rounded-3xl shadow-2xl overflow-hidden md:flex items-center justify-center gap-10 px-10 py-14 ${
          theme === "light"
            ? "bg-[#F7F7F5] border border-[#E0E0E0]"
            : "bg-white/10 border border-white/20 backdrop-blur-lg"
        }`}
      >
        {/* === Doctor Image === */}
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end w-full md:w-1/2"
        >
          <img
            src={doctorImg}
            alt="Mrs. Nivedita Dabir"
            className="w-[300px] h-[380px] md:w-[360px] md:h-[420px] object-cover rounded-3xl shadow-[0_0_45px_rgba(77,159,235,0.5)] border-2 border-white/30 transform hover:scale-105 transition-transform duration-500"
          />
        </Motion.div>

        {/* === Doctor Info === */}
        <div className="mt-10 md:mt-0 md:w-1/2 text-left">
          <h2
            className={`text-4xl font-bold ${
              theme === "light" ? "text-[#1F2E40]" : "text-[#4d9feb]"
            }`}
          >
            Mrs. Nivedita Dabir
          </h2>
          <p className="mt-3 font-semibold opacity-80 text-2xl">
            Developmental Optometrist & Vision Therapist
          </p>
          <p className="mt-6 leading-relaxed opacity-90 text-xl">
            Specializing in binocular vision, pediatric eye care, and sports
            vision enhancement. With over a decade of experience, Mrs. Dabir has
            helped hundreds of patients overcome visual discomfort, eye strain,
            and coordination challenges through personalized vision therapy and
            holistic care.
          </p>
        </div>
      </div>

      {/* === Full Biography Section === */}
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`mt-14 rounded-3xl p-10 shadow-2xl leading-relaxed text-xl space-y-6 ${
          theme === "light"
            ? "bg-[#F9FAFB] text-[#1F2E40] border border-[#E0E0E0]"
            : "bg-white/10 border border-white/20 backdrop-blur-lg"
        }`}
      >
        <p>
          <b>Finevision Optometry and Contact Lens Clinic</b> is one of its kind
          Optometry clinics in the centrally located prime area of Senapati
          Bapat Road, Pune.
        </p>

        <p>
          Its Founder, <b>Optometrist Nivedita Dabir</b>, takes pride in
          providing best-in-class Vision Therapy, Contact Lens, and
          Optometry-related services. Nivedita comes with an extensive
          experience in the eye care industry.
        </p>

        <p>
          She found her calling while studying optometry at Bharati Vidyapeeth
          Medical College, School of Optometry, where she graduated as a top
          rank holder in her post-graduation, earning stellar recommendations
          from her faculty.
        </p>

        <p>
          Having been trained under leading ophthalmologists, she has headed the
          Optometry Department at a renowned Ophthalmic Clinic. She is also an
          International Associate Member of the{" "}
          <b>College of Optometrists in Vision Development (USA)</b> and an
          active member of <b>Team Aarohi</b>, which works for underprivileged
          special children.
        </p>

        <p>
          Nivedita conducts seminars on early intervention strategies for
          visually impaired children and has presented her research work at
          various national conferences.
        </p>

        <p>
          She is a certified <b>‘Rose K’ practitioner</b>, trained under{" "}
          <b>Dr. Paul Rose</b> (inventor of Rose K lenses) for fitting RGP
          lenses. She continues to stay updated by attending global conferences
          to adopt the latest advances in Optometry.
        </p>

        <p>
          At <b>Finevision</b>, the quality of care is second to none. The
          clinic is equipped with state-of-the-art diagnostic and therapeutic
          tools to ensure every patient receives the best possible outcome.
        </p>

        <p>
          With extensive experience and passion, Nivedita Dabir leads a team on
          a mission to give every patient a new <b>“Vision on Life.”</b>
          <br />
          <b>We look forward to ‘Seeing’ you soon!</b>
        </p>
      </Motion.div>
    </div>
  </section>
</Element>

{/* ======== VISION THERAPY SECTION (Updated with Learn More button) ======== */}
<Element name="vision-therapy">
  <section
    className={`min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 ${
      theme === "light"
        ? "bg-[#FFFFFF] text-[#1F2E40]"
        : "bg-gradient-to-br from-[#0a0f2c] via-[#172a53] to-[#27488c] text-white"
    }`}
  >
    {/* LEFT SIDE CONTENT */}
    <div className="w-full md:w-1/2 space-y-10">
      <Motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className={`text-4xl font-extrabold mb-3 ${
            theme === "light" ? "text-[#1F2E40]" : "text-[#4d9feb]"
          }`}
        >
          Vision Therapy — Strengthen Your Visual Skills
        </h2>
        <p className="text-lg leading-relaxed opacity-90 max-w-2xl">
          Vision Therapy enhances how your eyes and brain work together.
          It improves focusing, eye coordination, and visual processing —
          vital for reading, learning, and sports performance.
        </p>
      </Motion.div>

      {/* 3D CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
        {[
          { title: "Binocular Vision Training", path: "/vision-therapy/binocular" },
          { title: "Lazy Eye", path: "/vision-therapy/amblyopia" },
          { title: "Squint", path: "/vision-therapy/squint" },
          { title: "Autism & ADHD", path: "/vision-therapy/austim" },
          { title: "Digital Eyestrain", path: "/vision-therapy/digitaleyestrain" },
          { title: "Learning-Related Vision Issues", path: "/vision-therapy/learning" },
          { title: "Cortical Visual Impairment (CVI)", path: "/vision-therapy/visual"}
        ].map((card, i) => (
          <Motion.div
            key={i}
            whileHover={{ rotateY: 15, rotateX: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150, damping: 10 }}
            className="relative group perspective cursor-pointer"
          >
            <div className="relative preserve-3d transform-style-3d">
              <Motion.div
                className={`rounded-2xl p-6 shadow-2xl border transition-all duration-500 ${
                  theme === "light"
                    ? "bg-white border-[#E0E0E0]"
                    : "bg-[#101b3c]/80 border-[#4d9feb]/30"
                }`}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* FRONT SIDE */}
                <div className="absolute inset-0 flex flex-col justify-center items-center backface-hidden">
                  <h3 className="text-xl font-bold">{card.title}</h3>
                </div>

                {/* BACK SIDE */}
                <div
                  className={`absolute inset-0 flex flex-col justify-center items-center rounded-2xl backface-hidden rotate-y-180 ${
                    theme === "light"
                      ? "bg-[#F2C94C] text-[#1F2E40]"
                      : "bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white"
                  }`}
                >
                  <p className="text-center text-sm mb-2">Click to Learn More</p>
                  <Link
                    to={card.path}
                    className="px-4 py-2 rounded-lg bg-white/20 border border-white/30 hover:bg-white/30 transition text-sm"
                  >
                    View Details →
                  </Link>
                </div>
              </Motion.div>
            </div>
          </Motion.div>
        ))}
      </div>

      {/* ✅ LEARN MORE BUTTON (links to VisionTherapy.jsx) */}
      <div className="pt-6 text-center sm:text-left">
        <Link
          to="/vision-therapy"
          className={`inline-block px-8 py-3 rounded-full text-lg font-semibold shadow-xl transition ${
            theme === "light"
              ? "bg-[#F2C94C] text-[#1F2E40] hover:bg-[#f1d25f]"
              : "bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white hover:opacity-90"
          }`}
        >
          Learn More About Vision Therapy →
        </Link>
      </div>
    </div>

    {/* RIGHT SIDE IMAGE */}
    <Motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
    >
      <img
        src={therapyImg}
        alt="Vision Therapy"
        className="w-[80%] max-w-[500px] rounded-2xl shadow-2xl object-cover"
      />
    </Motion.div>
  </section>
</Element>

{/* ======== SPORTS VISION SECTION (Updated with Learn More button) ======== */}
<Element name="sports-vision">
  <section
    className={`min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 ${
      theme === "light"
        ? "bg-[#FFFFFF] text-[#1F2E40]"
        : "bg-gradient-to-br from-[#0b1332] via-[#1a2a5a] to-[#2a4a8b] text-white"
    }`}
  >
    {/* LEFT SIDE CONTENT */}
    <div className="w-full md:w-1/2 space-y-10">
      <Motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className={`text-4xl font-extrabold mb-3 ${
            theme === "light" ? "text-[#1F2E40]" : "text-[#4d9feb]"
          }`}
        >
          Sports Vision — Train the Eyes Like You Train the Body
        </h2>
        <p className="text-lg leading-relaxed opacity-90 max-w-2xl">
          Whether you play cricket, badminton, football, tennis, or any other competitive sport, 
          your eyes play a key role in how fast, accurately, and confidently you perform. 
          Sports Vision Training enhances visual speed, reaction time, and eye-hand coordination 
          — giving you the edge that wins games.
        </p>
      </Motion.div>

      {/* ✅ LEARN MORE BUTTON (links to SportsVision.jsx) */}
      <div className="pt-6 text-center sm:text-left">
        <Link
          to="/sports-vision/sportsvision"
          className={`inline-block px-8 py-3 rounded-full text-lg font-semibold shadow-xl transition ${
            theme === "light"
              ? "bg-[#F2C94C] text-[#1F2E40] hover:bg-[#f1d25f]"
              : "bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white hover:opacity-90"
          }`}
        >
          Know More About Sports Vision Therapy →
        </Link>
      </div>
    </div>

    {/* RIGHT SIDE IMAGE */}
    <Motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
    >
      <img
        src={sports2}
        alt="Sports Vision Training"
        className="w-[80%] max-w-[500px] rounded-2xl shadow-2xl object-cover border border-[#4d9feb]/40"
      />
    </Motion.div>
  </section>
</Element>




{/* ======== EYE CARE ======== */}
<Element name="eyecare">
  <section
    className={`relative min-h-screen flex flex-col items-center justify-center py-20 px-8 overflow-hidden ${
      theme === "light"
        ? "bg-[#FFFFFF] text-[#1F2E40]"
        : "bg-gradient-to-br from-[#0b1332] via-[#1a2a5a] to-[#2a4a8b] text-white"
    }`}
  >
    {/* ===== Title and Subtitle ===== */}
    <div className="text-center mb-14">
      <h2
        className={`text-5xl font-extrabold mb-6 ${
          theme === "light" ? "text-[#1F2E40]" : "text-[#4d9feb]"
        }`}
      >
        Eye Care
      </h2>
      <p className="max-w-3xl mx-auto text-xl leading-relaxed opacity-90">
        Our comprehensive eye care services include detailed eye examinations,
        contact lens fitting, and digital eye strain management — ensuring your
        eyes stay healthy and comfortable.
      </p>
    </div>

    {/* ===== Modern 3D Card Layout ===== */}
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full max-w-7xl overflow-visible flex justify-center">
        <div className="flex items-stretch justify-center gap-8 md:gap-12 perspective">
          {[
            {
              icon: "👁️",
              title: "Comprehensive Eye Examination",
              preview:
                "A complete evaluation of your eye health, beyond just checking vision.",
              details: [
                "A comprehensive eye exam at Finevision goes far beyond a simple vision check. It involves a series of tests to thoroughly evaluate the health and functionality of your eyes and visual system.",
                "Unlike a basic vision screening, our examination includes assessments for clarity (refraction), eye health (anterior & posterior segments), binocular vision (coordination and depth), color vision, and neurological response.",
                "At the completion of your exam, the optometrist interprets all test results to create a personalized diagnosis and treatment plan, explaining any findings and available treatment options.",
                "In some cases, referral to another specialist may be advised for further care.",
                "Tests include: detailed case history, visual acuity measurement for each eye, binocular vision and depth analysis, refractive power assessment, and ocular motility evaluation.",
                "All test results are analyzed using the optometrist’s professional knowledge, experience, and judgment — ensuring an accurate prescription and holistic visual health guidance.",
              ],
            },
            {
              icon: "🔍",
              title: "Low Vision Aids & Rehabilitation",
              preview:
                "Enhancing remaining vision through optical devices and personalized training for daily independence.",
              details: [
                "Low Vision is a condition referring to partial loss of vision that cannot be adequately corrected with eyeglasses, contact lenses, medication, or surgery.",
                "Common causes of low vision include macular degeneration, diabetic retinopathy, inherited retinal degenerative diseases, glaucoma, and optic nerve atrophy.",
                "Low vision therapy involves a comprehensive evaluation of the patient’s visual abilities, prescription of suitable low vision devices, and personalized training in their use.",
                "The goal of therapy is to maximize the patient’s functional vision for activities such as reading, writing, hobbies, and work-related tasks like using a computer.",
                "Our assessment covers tear film quality, blink rate, and workstation ergonomics to address visual comfort during prolonged activities.",
                "Treatment may include lubricants, lid hygiene, hydration habits, and visual-break protocols such as the 20-20-20 rule to minimize eye strain.",
                "By combining optical aids and behavioral adjustments, patients regain confidence and independence in their everyday visual tasks.",
              ],
            },
            {
              icon: "🩺",
              title: "Speciality Contact Lenses",
              preview:
                "Whether you are new to contact lenses or have worn them for years, our expert fitting ensures clarity, comfort, and long-term eye health.",
              details: [
                "Whether you are new to contact lenses or have been wearing them for years, they are an exciting and convenient option for vision correction. They enhance both your vision and your appearance.",
                "Contact lenses are generally easy to wear and care for, which is why many overlook the importance of ongoing professional supervision. However, proper follow-up by your optometrist is essential to ensure safe and long-term contact lens use.",
                "At Finevision, we are a 'Rose-K' (RGP) certified practitioner specializing in fitting contact lenses for specific eye conditions such as keratoconus, post-LASIK ectasia, and pellucid marginal degeneration.",
                "Over time, your eyes and lenses can change — often without symptoms or warning signs — putting you at risk for potentially serious complications. Regular checkups help identify and prevent these issues early.",
                "We at Finevision offer the following types of contact lenses:",
                "1. Rigid Gas-Permeable (RGP) Contact Lens",
                "2. Scleral Contact Lens",
                "3. Daily-Wear Soft Contact Lens",
                "4. Silicon Hydrogel Contact Lens",
                "5. Extended-Wear Contact Lens",
                "6. Extended-Wear Disposable Contact Lens",
                "7. Color Contact Lens",
                "Our optometrist discusses these options with you to determine which type best fits your vision, comfort, and lifestyle needs.",
                "Whether you’re an athlete seeking performance vision or simply want lenses that enhance your appearance, Finevision has your needs covered — ensuring safe, personalized, and stylish vision correction.",
              ],
            },
          ].map((card, i) => (
            <EyeCare key={i} card={card} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  </section>
</Element>


{/* ======== BLOGS SECTION (Updated Layout with Blog Cards) ======== */}
<Element name="blogs">
  <section
    className={`min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 ${
      theme === "light"
        ? "bg-[#FFFFFF] text-[#1F2E40]"
        : "bg-gradient-to-br from-[#0b1332] via-[#1a2a5a] to-[#2a4a8b] text-white"
    }`}
  >
    {/* LEFT SIDE CONTENT */}
    <div className="w-full md:w-1/2 space-y-10">
      <Motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className={`text-4xl font-extrabold mb-3 ${
            theme === "light" ? "text-[#1F2E40]" : "text-[#4d9feb]"
          }`}
        >
          Blogs — Insights, Care Tips & Eye Health Awareness
        </h2>

        <p className="text-lg leading-relaxed opacity-90 max-w-2xl">
          Stay informed with expert articles and practical advice from{" "}
          <b>Optometrist Nivedita Dabir</b> and the FineVision team.  
          Our blogs cover topics like <b>Vision Therapy</b>, <b>Myopia Management</b>,
          <b>Sports Vision Training</b>, and <b>Healthy Eye Habits</b> — designed to help 
          you protect and enhance your vision every day.
        </p>
      </Motion.div>

      {/* ✅ VIEW ALL BLOGS BUTTON */}
      <div className="pt-6 text-center sm:text-left">
        <Link
          to="/blog"
          className={`inline-block px-8 py-3 rounded-full text-lg font-semibold shadow-xl transition ${
            theme === "light"
              ? "bg-[#F2C94C] text-[#1F2E40] hover:bg-[#f1d25f]"
              : "bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white hover:opacity-90"
          }`}
        >
          View All Blogs →
        </Link>
      </div>
    </div>

    {/* RIGHT SIDE IMAGE */}
    <Motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
    >
      <img
        src={blogImage}
        alt="FineVision Blog"
        className="w-[80%] max-w-[500px] rounded-2xl shadow-2xl object-cover border border-[#4d9feb]/40"
      />
    </Motion.div>
  </section>

</Element>

{/* ========== FAQ's SECTION ========== */}

    <FAQSection theme={theme} />

{/* ================= CONTACT SECTION ================= */}
      <Element name="contact">
        <section
          className={`min-h-screen flex flex-col items-center justify-center px-6 py-16 ${
            theme === "light"
              ? "bg-[#FFFFFF] text-[#1F2E40]"
              : "bg-gradient-to-br from-[#0c1433] via-[#1b2e59] to-[#27488c] text-white"
          }`}
        >
          <Motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1
              className={`text-4xl font-extrabold mb-3 ${
                theme === "light" ? "text-[#1F2E40]" : "text-[#4d9feb]"
              }`}
            >
              Contact Us
            </h1>
            <p className="max-w-2xl mx-auto text-lg opacity-80">
              We’d love to hear from you! Book an appointment or send a message below.
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`max-w-6xl w-full rounded-2xl shadow-2xl overflow-hidden md:flex items-stretch ${
              theme === "light"
                ? "bg-[#F7F7F5] border border-[#E0E0E0]"
                : "bg-[#101b3c]/70 border border-[#4d9feb]/30"
            }`}
          >
            {/* LEFT FORM */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h3
                className={`text-2xl font-bold mb-4 ${
                  theme === "light" ? "text-[#1F2E40]" : "text-[#4d9feb]"
                }`}
              >
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4d9feb]"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4d9feb]"
                  required
                />
                <textarea
                  rows="4"
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4d9feb]"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-lg font-semibold shadow-md transition-all ${
                    theme === "light"
                      ? "bg-[#F2C94C] text-[#1F2E40] hover:bg-[#1F2E40] hover:text-white"
                      : "bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white hover:opacity-90"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>

              {alert && (
                <p className="mt-4 text-center text-sm font-medium text-[#4d9feb]">
                  {alert}
                </p>
              )}

              <div className="mt-6 text-sm opacity-80 leading-relaxed">
                📞 Phone: +91-7820869736 <br />
                📧 Email: finevision18@gmail.com
              </div>
            </div>

            {/* RIGHT MAP */}
            <div className="w-full md:w-1/2">
              <iframe
              title="Finevision Eyecare and Vision Therapy Centre"
              className="w-full h-full min-h-[350px] rounded-r-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.416611195589!2d73.82672907518715!3d18.512932382583054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf6e2e00bcdb%3A0x6f7bec6017acf942!2sFinevision%20Eyecare%20and%20Vision%20Therapy%20Centre!5e0!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              ></iframe>
            </div>
          </Motion.div>
        </section>
      </Element>
    </div>
  );
 }