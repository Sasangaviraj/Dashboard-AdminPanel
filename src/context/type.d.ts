import type { Dispatch, SetStateAction } from "react";

export interface IAuthInfor {
  token: string;
  username: string;
  email: string;
}

export interface IAuthContext {
  authInfor: IAuthInfor;
  setAuthInfor: Dispatch<SetStateAction<IAuthInfor>>;
}

export interface IThemeContext {
  theme: ThemeType;
  toggleTheme: () => void;
  T: boolean;
}

export type ThemeType = "light" | "dark";
