import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface WidgetStore {
  showWidget: boolean;
  setShowWidget: (bool: boolean) => void;
}

export const useWidgetStore = create<WidgetStore>()(
  devtools(
    (set) => ({
      showWidget: false,
      setShowWidget: (bool: boolean) => {
        set(
          (state) => ({
            showWidget: bool,
          }),
          undefined,
          "[Widget] setShow"
        );
      },
    }),
    { name: "위젯스토어" }
  )
);
