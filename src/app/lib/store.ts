// useTheme.ts
import { create } from "zustand";

export type State = {
  darkMode: boolean;
  swagMode: boolean;
};

export type Actions = {
  toggleDarkMode: () => void;
  toggleSwagMode: () => void;
};

export const useTheme = create<State & Actions>((set) => ({
  darkMode: true,
  swagMode: false, // Initialize swag mode as false
  toggleDarkMode: () =>
    set((state) => ({
      darkMode: !state.darkMode,
      swagMode: false,
    })),
  toggleSwagMode: () =>
    set((state) => ({
      darkMode: state.darkMode || !state.swagMode, // Set dark mode to true if it was initially false or swagMode is off
      swagMode: !state.swagMode,
    })),
}));
