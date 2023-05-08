import { create } from "zustand";
import { devtools } from "zustand/middleware";

export enum ModeType {
  DARK = "dark",
  LIGHT = "light",
}

interface CommonStore {
  mode: ModeType;
  changeMode: (mode: ModeType) => void;
}

export const useCommonStore = create<CommonStore>()(
  devtools((set) => ({
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
  }))
);
