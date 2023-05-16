import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface LoginStore {
  isLogin: boolean;
  setLogin: (bool: boolean) => void;

  accessToken: string;
  setAccessToken: (token: string) => void;
  refreshToken: string;
  setRefreshToken: (token: string) => void;
}

export const useLoginStore = create<LoginStore>()(
  devtools((set) => ({
    isLogin: false,
    setLogin: (bool: boolean) => {
      set(
        (state) => ({
          isLogin: bool,
        }),
        undefined,
        "[Login] setLogin"
      );
    },
    accessToken: "",
    setAccessToken: (token: string) => {
      set(
        (state) => ({
          accessToken: token,
        }),
        undefined,
        "[Common] setAccessToken"
      );
    },
    refreshToken: "",
    setRefreshToken: (token: string) => {
      set(
        (state) => ({
          refreshToken: token,
        }),
        undefined,
        "[Common] setRefreshToken"
      );
    },
  }))
);
