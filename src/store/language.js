import { create } from "zustand";

export const useLanguage = create((set) => ({
  language: "ru",
  setLanguage: (lang) => {
    set({ language: lang });
  },
}));
