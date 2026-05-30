import { create } from "zustand";

type ResumeState = {
  open: boolean;
  openResume: () => void;
  closeResume: () => void;
};

// Global resume preview modal.
export const useResume = create<ResumeState>((set) => ({
  open: false,
  openResume: () => set({ open: true }),
  closeResume: () => set({ open: false }),
}));
