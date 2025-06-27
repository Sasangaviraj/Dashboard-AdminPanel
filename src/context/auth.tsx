import { createContext, useState } from "react";
import type { IAuthContext, IAuthInfor } from "./type";
import type { ReactNode } from "react";

export const defaultAuth: IAuthInfor = {
  token: "",
  username: "",
  email: "",
};

export const AuthContext = createContext<IAuthContext>({
  authInfor: defaultAuth,
  setAuthInfor: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authInfor, setAuthInfor] = useState<IAuthInfor>(defaultAuth);

  return (
    <AuthContext.Provider
      value={{
        authInfor,
        setAuthInfor,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
