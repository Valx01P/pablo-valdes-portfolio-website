"use client";
import { useEffect } from "react";
import { useLightbox } from "@/app/lib/lightbox";

const Lightbox = () => {
  const { src, alt, close } = useLightbox();

  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, close]);

  if (!src) return null;

  return (
    <div
      onClick={close}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-sm cursor-zoom-out"
    >
      <button
        onClick={close}
        aria-label="Close image"
        className="absolute top-4 right-5 text-white/70 hover:text-white text-4xl leading-none"
      >
        &times;
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[96vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg border border-white/15 shadow-2xl cursor-default"
      />
    </div>
  );
};

export default Lightbox;
