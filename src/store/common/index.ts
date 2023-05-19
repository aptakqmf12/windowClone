import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export enum ModeType {
  DARK = "dark",
  LIGHT = "light",
}

export enum LanguageType {
  KO = "ko",
  EN = "en",
}

interface CommonStore {
  mode: ModeType;
  changeMode: (mode: ModeType) => void;
  language: LanguageType;
  changeLanguage: (lang: LanguageType) => void;
}

export const useCommonStore = create<CommonStore>()(
  devtools(
    persist(
      (set) => ({
        mode: ModeType.LIGHT,
        changeMode: (mode: ModeType) => {
          set(
            (state) => ({
              mode: mode,
            }),
            undefined,
            "[Common] setMode"
          );
        },
        language: LanguageType.KO,
        changeLanguage: (lang: LanguageType) => {
          set((state) => ({
            language: lang,
          }));
        },
      }),
      {
        name: "common persist",
      }
    )
  )
);
