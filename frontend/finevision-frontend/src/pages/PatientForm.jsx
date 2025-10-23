import { useState } from "react";
import { motion as Motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function PatientForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    symptoms: "",
    history: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Update form field
  function update(k, v) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  // ✅ Handle submit using EmailJS
  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const serviceId = "service_8ykot9l"; // e.g., service_xxxxxx
      const templateId = "template_patient"; // e.g., template_yyyyyy
      const publicKey = "hjZTXcOwsKQj4pxvb"; // e.g., UeH_abc123xyz

      const templateParams = {
        firstName: form.firstName,
        lastName: form.lastName,
        age: form.age,
        gender: form.gender,
        phone: form.phone,
        email: form.email,
        address: form.address,
        service: form.service,
        symptoms: form.symptoms,
        history: form.history,
        to_email: "finevision18@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setMessage("✅ Your form has been submitted successfully!");
      setForm({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        phone: "",
        email: "",
        address: "",
        service: "",
        symptoms: "",
        history: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setMessage("❌ Failed to send form. Please try again later.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black flex items-center justify-center py-16 px-4">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl p-8"
      >
        <h2 className="text-3xl font-extrabold text-center text-white mb-8 tracking-wide">
          🩺 FineVision - Patient Registration Form
        </h2>

        <form onSubmit={submit} className="grid md:grid-cols-2 gap-5">
          {[
            { key: "firstName", placeholder: "First Name", type: "text" },
            { key: "lastName", placeholder: "Last Name", type: "text" },
            { key: "age", placeholder: "Age", type: "number" },
            {
              key: "gender",
              placeholder: "Gender",
              type: "select",
              options: ["Male", "Female", "Other"],
            },
            { key: "phone", placeholder: "Phone Number", type: "tel" },
            { key: "email", placeholder: "Email Address", type: "email" },
            {
              key: "service",
              placeholder: "Which service would you like to avail?",
              type: "select",
              options: [
                "Vision Therapy",
                "Contact Lens",
                "Low Vision Aid",
                "Comprehensive Vision Assessment",
                "Digital Eyestrain Assessment",
              ],
            },
          ].map((field) =>
            field.type === "select" ? (
              <select
                key={field.key}
                className="bg-slate-800/70 border border-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none transition"
                value={form[field.key]}
                onChange={(e) => update(field.key, e.target.value)}
                required
              >
                <option value="">{field.placeholder}</option>
                {field.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                key={field.key}
                type={field.type}
                className="bg-slate-800/70 border border-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none transition"
                placeholder={field.placeholder}
                value={form[field.key]}
                onChange={(e) => update(field.key, e.target.value)}
                required
              />
            )
          )}

          <textarea
            className="md:col-span-2 bg-slate-800/70 border border-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none transition"
            rows="2"
            placeholder="Address"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
          />

          <textarea
            className="md:col-span-2 bg-slate-800/70 border border-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none transition"
            rows="3"
            placeholder="Primary symptoms / reason for visit"
            value={form.symptoms}
            onChange={(e) => update("symptoms", e.target.value)}
          />

          <textarea
            className="md:col-span-2 bg-slate-800/70 border border-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none transition"
            rows="3"
            placeholder="Relevant history / previous prescriptions"
            value={form.history}
            onChange={(e) => update("history", e.target.value)}
          />

          <div className="md:col-span-2 flex justify-center mt-6">
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className={`px-8 py-3 rounded-full font-semibold shadow-lg transition ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:shadow-sky-500/40"
              }`}
            >
              {loading ? "Submitting..." : "Submit Form"}
            </Motion.button>
          </div>
        </form>

        {message && (
          <p className="text-center text-sky-300 mt-6 font-medium">{message}</p>
        )}
      </Motion.div>
    </div>
  );
}
