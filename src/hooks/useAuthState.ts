import { useContext } from "react";
import { AuthStateContext } from "../contexts/AuthContext";

export const useAuthState = () => {
  const authState = useContext(AuthStateContext);
  if (!authState) throw new Error("AuthContextProvider not found");
  return authState;
};
