"use client";
import { useEffect } from "react";
import { useResume } from "@/app/lib/resume";

const PDF = "/pdf/Pablo_Valdes_Resume.pdf";

const ResumeModal = () => {
  const { open, closeResume } = useResume();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeResume();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeResume]);

  if (!open) return null;

  return (
    <div
      onClick={closeResume}
      role="dialog"
      aria-modal="true"
      aria-label="Résumé"
      className="dark fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[900px] h-[92vh] flex flex-col rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0c0c10]"
      >
        {/* toolbar */}
        <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2.5 bg-[#0c0c10] border-b border-white/10">
          <h2 className="text-white roboto-bold text-sm shrink-0">Résumé</h2>
          <div className="flex items-center gap-2">
            <a
              href={PDF}
              download
              className="text-xs roboto-medium px-2.5 sm:px-3 py-1.5 rounded-md text-[var(--accent-bright)] border border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-colors whitespace-nowrap"
            >
              Download
            </a>
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs roboto-medium px-2.5 sm:px-3 py-1.5 rounded-md text-white/80 border border-white/20 hover:border-white/55 hover:text-white transition-colors whitespace-nowrap"
            >
              Open ↗
            </a>
            <button
              onClick={closeResume}
              aria-label="Close résumé"
              className="text-white/70 hover:text-white text-2xl leading-none px-1"
            >
              &times;
            </button>
          </div>
        </div>
        {/* pdf preview */}
        <iframe src={`${PDF}#view=FitH`} title="Résumé — Pablo Valdes" className="flex-1 w-full bg-white" />
      </div>
    </div>
  );
};

export default ResumeModal;
