import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";

export default function FAQSection({ theme }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    {
      title: "Vision Therapy at Finevision",
      items: [
        {
          q: "Is vision therapy only for children?",
          a: "No. While many children benefit from it, adults with visual stress, screen fatigue, or post-stroke vision issues also see significant improvements."
        },
        {
          q: "How long does vision therapy take?",
          a: "Most programs range from 8 to 24 weeks, depending on the condition and consistency of practice."
        },
        {
          q: "Will my child need glasses after vision therapy?",
          a: "If your child has a refractive error (power), they may still need glasses. Vision therapy helps with visual skills, not eyesight correction."
        },
        {
          q: "Is therapy painful or difficult?",
          a: "Not at all. Sessions are interactive, tailored to the patient’s age and interest level, and designed to be engaging."
        },
        {
          q: "Can therapy be done online?",
          a: "We offer hybrid programs with guided home activities and video follow-ups, especially for families outside Pune or during travel."
        }
      ]
    },
    {
      title: "Sports Vision Training",
      items: [
        {
          q: "Is this only for professional athletes?",
          a: "No. We train children, teenagers, and adults — from beginners to elite competitors — who want to improve their game visually."
        },
        {
          q: "Will it help with reaction time in fast-paced games?",
          a: "Yes. Sports vision therapy targets reflexes, tracking, and processing — all essential for quick reactions."
        },
        {
          q: "Can I continue regular coaching while doing this?",
          a: "Absolutely. Vision training complements physical training and helps make you more coachable and aware during play."
        },
        {
          q: "Do you offer programs for sports academies?",
          a: "Yes. We offer partnership models and bulk screenings for sports schools, clubs, and academies. Ask us for a proposal."
        },
        {
          q: "Is this covered by insurance or sponsorships?",
          a: "Currently, sports vision therapy is not covered by most insurance plans, but we provide invoices for CSR or sponsorship reimbursements."
        }
      ]
    },
    {
      title: "Post-Stroke Vision Rehab",
      items: [
        {
          q: "Can vision improve even months after a stroke?",
          a: "Yes. The brain continues to adapt. With the right stimulation, vision therapy can still help—even long after the stroke occurred."
        },
        {
          q: "Is this therapy the same as physiotherapy?",
          a: "No. We focus on visual recovery—eye movements, spatial awareness, reading. It often complements physiotherapy or speech therapy."
        },
        {
          q: "Do you provide therapy at home?",
          a: "We offer guided home programs and can support remote sessions via tele-rehab for select cases."
        },
        {
          q: "What’s the difference between this and 'vision correction'?",
          a: "Standard glasses correct clarity. Our rehab helps retrain how the brain uses vision—especially when glasses alone don’t help."
        },
        {
          q: "Will therapy remove double vision completely?",
          a: "It can significantly reduce or manage double vision, especially with binocular therapy and/or prism lenses. Results vary case by case."
        }
      ]
    }
  ];

  return (
    <Element name="faq">
      <section
        className={`min-h-screen px-6 py-16 flex flex-col items-center ${
          theme === "light"
            ? "bg-[#FFFFFF] text-[#1F2E40]"
            : "bg-gradient-to-br from-[#0b1332] via-[#1a2a5a] to-[#2a4a8b] text-white"
        }`}
      >
        <Motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`text-4xl font-extrabold mb-10 ${
            theme === "light" ? "text-[#1F2E40]" : "text-[#4d9feb]"
          }`}
        >
          Frequently Asked Questions
        </Motion.h2>

        {/* FAQ Categories */}
        <div className="w-full max-w-5xl space-y-10">
          {faqs.map((category, idx) => (
            <div key={idx}>
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  theme === "light" ? "text-[#1F2E40]" : "text-[#8ec5ff]"
                }`}
              >
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.items.map((faq, i) => (
                  <div
                    key={i}
                    className={`rounded-lg border ${
                      theme === "light"
                        ? "border-gray-300 bg-white"
                        : "border-[#4d9feb]/40 bg-[#0f1d46]/60"
                    }`}
                  >
                    <button
                      onClick={() => toggle(`${idx}-${i}`)}
                      className="w-full flex justify-between items-center px-5 py-4 font-medium focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`transition-transform ${
                          openIndex === `${idx}-${i}` ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {openIndex === `${idx}-${i}` && (
                      <Motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-4 text-sm opacity-90 leading-relaxed"
                      >
                        {faq.a}
                      </Motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={700}
          className="mt-12 cursor-pointer px-6 py-3 rounded-full bg-[#4d9feb] text-white font-semibold hover:bg-[#1a3d7e] transition"
        >
          ← Go Back to Home
        </ScrollLink>
      </section>
    </Element>
  );
}
