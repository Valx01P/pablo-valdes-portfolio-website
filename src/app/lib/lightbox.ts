import { create } from "zustand";

type LightboxState = {
  src: string | null;
  alt: string;
  open: (src: string, alt?: string) => void;
  close: () => void;
};

// Global image lightbox: click any card image to view it larger.
export const useLightbox = create<LightboxState>((set) => ({
  src: null,
  alt: "",
  open: (src, alt = "") => set({ src, alt }),
  close: () => set({ src: null, alt: "" }),
}));
