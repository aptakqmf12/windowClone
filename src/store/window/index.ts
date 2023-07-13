import { AlertCustomProps } from "@components/common/alert";
import { ConfirmCustomProps } from "@components/common/confirm";
import { WindowPopupProps } from "@components/layout/window/popup";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { message as toast } from "mui-message";

export interface WindowType {
  name: string;
  uuid: string;
  component: React.ReactNode;
  icon: React.ReactNode;
  isFullScreen: boolean;
  isShow: boolean;
  zIndex: number;
  directory: string[];
  x: number;
  y: number;
  w: number;
  h: number;
  readAuthYn?: string;
  writeAuthYn?: string;
  alert?: AlertCustomProps;
  confirm?: ConfirmCustomProps;
  popup?: WindowPopupProps;
}

type AppendWindowProps = {
  uuid: string;
  component: React.ReactNode;
  icon: React.ReactNode;
  name: string;

  isFullScreen?: boolean;
  zIndex?: number;
  x?: number;
  y?: number;
  w?: number;
  h?: number;
  readAuthYn?: string;
  writeAuthYn?: string;
};

interface WindowStore {
  currentWindows: WindowType[];
  addX: number;
  addY: number;
  appendWindow: (props: AppendWindowProps) => void;
  removeWindow: (uuid: string) => void;
  clearWindows: () => void;
  setWindowPosition: (uuid: string, position: { x: number; y: number }) => void;
  toggleScreenSize: (uuid: string) => void;
  toggleShowWindow: (uuid: string) => void;
  focusWindow: (uuid: string) => void;
  resizeWindow: (uuid: string, w: number, h: number) => void;
  setDirectory: (uuid: string, dir: string[]) => void;
  openAlert: (uuid: string, alert: AlertCustomProps) => void;
  closeAlert: (uuid: string) => void;
  openConfirm: (uuid: string, confirm: ConfirmCustomProps) => void;
  closeConfirm: (uuid: string) => void;
  openPopup: (uuid: string, popup: WindowPopupProps) => void;
  closePopup: (uuid: string) => void;
}

export const useWindowStore = create<WindowStore>()(
  // devtools(
  (set) => ({
    currentWindows: [],
    addX: 0,
    addY: 0,
    appendWindow: (props) => {
      const isExistingWindow = useWindowStore
        .getState()
        .currentWindows.some((window) => window.name === props.name);

      const isMaxSize = useWindowStore.getState().currentWindows.length === 5;

      if (isExistingWindow) alert("이미 띄워져있음");
      if (isMaxSize) alert("최대 5개");
      if (isExistingWindow || isMaxSize) return;

      clearZindex();

      const positionAcc = useWindowStore.getState().currentWindows.length * 25;

      const [defaultWidth, defaultHeight] = [1400, 700];

      set(
        (state) => {
          return {
            currentWindows: [
              ...state.currentWindows,
              {
                name: props.name,
                uuid: props.uuid,
                component: props.component,
                icon: props.icon,
                isFullScreen: props.isFullScreen || true,
                isShow: true,
                zIndex: 12,
                directory: [],
                x:
                  props.x ||
                  window.innerWidth / 2 -
                    (props.w ? props.w / 2 : defaultWidth / 2) +
                    positionAcc,
                y:
                  props.y ||
                  window.innerHeight / 2 -
                    (props.h ? props.h / 2 : defaultHeight / 2) +
                    positionAcc,
                w: props.w || defaultWidth,
                h: props.h || defaultHeight,
                readAuthYn: props.readAuthYn,
                writeAuthYn: props.writeAuthYn,
              },
            ],
          };
        }
        // undefined,
        // "[window] add"
      );
    },
    removeWindow: (uuid: string) => {
      set(
        (state) => ({
          currentWindows: state.currentWindows.filter(
            (window) => window.uuid !== uuid
          ),
        })
        // undefined,
        // "[window] remove"
      );
    },
    clearWindows: () => {
      set(
        (state) => ({
          currentWindows: [],
        })
        // undefined,
        // "[window] remove"
      );
    },
    setWindowPosition: (uuid: string, position: { x: number; y: number }) => {
      set(
        (state) => ({
          currentWindows: state.currentWindows.map((window) => {
            if (window.uuid === uuid) {
              window.x = position.x;
              window.y = position.y;
            }
            return window;
          }),
        })
        // undefined,
        // "[window] position"
      );
    },
    toggleScreenSize: (uuid: string) => {
      set(
        (state) => ({
          currentWindows: state.currentWindows.map((window) => {
            if (window.uuid === uuid) {
              window.isFullScreen = !window.isFullScreen;
            }
            return window;
          }),
        })
        // undefined,
        // "[window] screenSize"
      );
    },
    focusWindow: (uuid: string) => {
      set(
        (state) => ({
          currentWindows: state.currentWindows.map((window) => {
            window.zIndex = window.uuid === uuid ? 12 : 11;

            return window;
          }),
        })
        // undefined,
        // "[window] focusOn"
      );
    },
    toggleShowWindow: (uuid: string) => {
      set(
        (state) => ({
          currentWindows: state.currentWindows.map((window) => {
            if (window.uuid === uuid) {
              if (window.zIndex === 11) {
                clearZindex();
                window.zIndex = 12;
              } else {
                window.isShow = !window.isShow;
              }
            }
            return window;
          }),
        })
        // undefined,
        // "[window] show"
      );
    },
    resizeWindow: (uuid: string, w: number, h: number) => {
      set(
        (state) => ({
          currentWindows: state.currentWindows.map((window) => {
            if (window.uuid === uuid) {
              window.w = w;
              window.h = h;
            }
            return window;
          }),
        })
        // undefined,
        // "[window] resize"
      );
    },
    setDirectory: (uuid: string, dir: string[]) => {
      set(
        (state) => ({
          currentWindows: state.currentWindows.map((window) => {
            if (window.uuid === uuid) {
              window.directory = dir;
            }
            return window;
          }),
        })
        // undefined,
        // "[window] setDirectory"
      );
    },

    openAlert: (uuid: string, alert: AlertCustomProps) => {
      set(
        (state) => ({
          currentWindows: state.currentWindows.map((window) => {
            if (window.uuid === uuid) {
              window.alert = alert;
            }
            return window;
          }),
        })
        // undefined,
        // "[window] openAlert"
      );
    },

    closeAlert: (uuid: string) => {
      set(
        (state) => ({
          currentWindows: state.currentWindows.map((window) => {
            if (window.uuid === uuid) {
              window.alert = undefined;
            }
            return window;
          }),
        })
        // undefined,
        // "[window] closeAlert"
      );
    },

    openConfirm: (uuid: string, confirm: ConfirmCustomProps) => {
      set(
        (state) => ({
          currentWindows: state.currentWindows.map((window) => {
            if (window.uuid === uuid) {
              window.confirm = confirm;
            }
            return window;
          }),
        })
        // undefined,
        // "[window] openConfirm"
      );
    },

    closeConfirm: (uuid: string) => {
      set(
        (state) => ({
          currentWindows: state.currentWindows.map((window) => {
            if (window.uuid === uuid) {
              window.confirm = undefined;
            }
            return window;
          }),
        })
        // undefined,
        // "[window] closeConfirm"
      );
    },

    openPopup: (uuid: string, popup: WindowPopupProps) => {
      set(
        (state) => ({
          currentWindows: state.currentWindows.map((window) => {
            if (window.uuid === uuid) {
              window.popup = popup;
            }
            return window;
          }),
        })
        // undefined,
        // "[window] openPopup"
      );
    },

    closePopup: (uuid: string) => {
      set(
        (state) => ({
          currentWindows: state.currentWindows.map((window) => {
            if (window.uuid === uuid) {
              window.popup = undefined;
            }
            return window;
          }),
        })
        // undefined,
        // "[window] openPopup"
      );
    },
  })
  //{ name: "윈도우 스토어" }
  // )
);

const clearZindex = () =>
  useWindowStore
    .getState()
    .currentWindows.map((window) => (window.zIndex = 11));
