import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

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
}

type AppendWindowProps = {
  uuid: string;
  component: React.ReactNode;
  icon: React.ReactNode;
  name: string;
  zIndex?: number;
  x?: number;
  y?: number;
  w?: number;
  h?: number;
};

interface WindowStore {
  currentWindows: WindowType[];
  appendWindow: (props: AppendWindowProps) => void;
  removeWindow: (uuid: string) => void;
  setWindowPosition: (uuid: string, position: { x: number; y: number }) => void;
  toggleScreenSize: (uuid: string) => void;
  toggleShowWindow: (uuid: string) => void;
  focusWindow: (uuid: string) => void;
  resizeWindow: (uuid: string, w: number, h: number) => void;
  setDirectory: (uuid: string, dir: string[]) => void;
}

export const useWindowStore = create<WindowStore>()(
  devtools(
    (set) => ({
      currentWindows: [],
      appendWindow: (props) => {
        const isExistingWindow = useWindowStore
          .getState()
          .currentWindows.some((window) => window.name === props.name);
        const isMaxSize = useWindowStore.getState().currentWindows.length === 5;

        // zIndex 초기화
        useWindowStore
          .getState()
          .currentWindows.map((window) => (window.zIndex = 1));

        if (isExistingWindow || isMaxSize) return;

        const [defaultWidth, defaultHeight] = [1000, 600];

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
                  isFullScreen: false,
                  isShow: true,
                  zIndex: 2,
                  directory: [],
                  x:
                    props.x ||
                    window.innerWidth / 2 -
                      (props.w ? props.w / 2 : defaultWidth / 2),
                  y:
                    props.y ||
                    window.innerHeight / 2 -
                      (props.h ? props.h / 2 : defaultHeight / 2),
                  w: props.w || defaultWidth,
                  h: props.h || defaultHeight,
                },
              ],
            };
          },
          undefined,
          "[window] add"
        );
      },
      removeWindow: (uuid: string) => {
        set(
          (state) => ({
            currentWindows: state.currentWindows.filter(
              (window) => window.uuid !== uuid
            ),
          }),
          undefined,
          "[window] remove"
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
          }),
          undefined,
          "[window] position"
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
          }),
          undefined,
          "[window] screenSize"
        );
      },
      focusWindow: (uuid: string) => {
        set(
          (state) => ({
            currentWindows: state.currentWindows.map((window) => {
              window.zIndex = window.uuid === uuid ? 2 : 1;

              return window;
            }),
          }),
          undefined,
          "[window] focusOn"
        );
      },
      toggleShowWindow: (uuid: string) => {
        set(
          (state) => ({
            currentWindows: state.currentWindows.map((window) => {
              if (window.uuid === uuid) {
                window.isShow = !window.isShow;
              }
              return window;
            }),
          }),
          undefined,
          "[window] show"
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
          }),
          undefined,
          "[window] resize"
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
          }),
          undefined,
          "[window] setDirectory"
        );
      },
    }),
    { name: "윈도우 스토어" }
  )
);
