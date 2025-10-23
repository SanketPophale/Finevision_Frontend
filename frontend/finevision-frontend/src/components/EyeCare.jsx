import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function EyeCare({ card, theme }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== Closed Card ===== */}
      <Motion.div
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05, rotateY: 10 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className={`relative cursor-pointer w-[280px] sm:w-[320px] md:w-[360px] h-[420px] rounded-3xl shadow-2xl border overflow-hidden ${
          theme === "light"
            ? "bg-white border-[#E0E0E0]"
            : "bg-white/10 border-white/20 backdrop-blur-md"
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
        <div className="h-2/3 flex flex-col justify-center items-center">
          <div className="h-16 w-16 rounded-2xl bg-white/10 border border-white/20 shadow-inner flex items-center justify-center text-3xl">
            {card.icon}
          </div>
          <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
          <p className="mt-3 text-sm opacity-80 px-6 text-center line-clamp-3">
            {card.preview}
          </p>
        </div>
        <div
          className={`absolute bottom-0 w-full h-24 bg-gradient-to-t ${
            theme === "light"
              ? "from-[#F2C94C]/40 to-transparent"
              : "from-indigo-500/30 to-transparent"
          }`}
        ></div>
      </Motion.div>

      {/* ===== Modal (Opened Full Card) ===== */}
      <AnimatePresence>
        {open && (
          <Motion.div
            className={`fixed inset-0 z-50 flex justify-center items-center ${
              theme === "light" ? "bg-black/30" : "bg-black/50"
            } backdrop-blur-sm`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <Motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-[90%] md:w-[60%] max-h-[85vh] rounded-3xl shadow-2xl border flex flex-col ${
                theme === "light"
                  ? "bg-white text-[#1F2E40] border-[#E0E0E0]"
                  : "bg-[#0f1638] text-white border-white/20"
              }`}
            >
              {/* ===== Header (Sticky) ===== */}
              <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-white/10 bg-inherit backdrop-blur-md">
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <button
                  className="text-lg px-3 py-1 rounded-full hover:bg-white/10 transition"
                  onClick={() => setOpen(false)}
                >
                  ✕
                </button>
              </div>

              {/* ===== Scrollable Content ===== */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3 text-[15px] leading-relaxed scrollbar-thin scrollbar-thumb-[#6f42c1]/50 scrollbar-track-transparent">
                {card.details.map((p, idx) => (
                  <p key={idx} className="opacity-90">
                    {p}
                  </p>
                ))}
              </div>

              {/* ===== Footer (Sticky) ===== */}
              <div className="sticky bottom-0 z-10 bg-inherit border-t border-white/10 p-6 text-center backdrop-blur-md">
                <button
                  onClick={() => setOpen(false)}
                  className={`px-6 py-3 rounded-full font-semibold ${
                    theme === "light"
                      ? "bg-[#F2C94C] text-[#1F2E40]"
                      : "bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white"
                  } hover:opacity-90 shadow-lg transition`}
                >
                  ← Go Back
                </button>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
