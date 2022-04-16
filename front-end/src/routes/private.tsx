import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthProvider/userAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.user) {
      navigate("/login");
    }
  }, [auth.user, navigate]);

  return children;
};
