import React, { useContext } from "react";
import { UserContext } from "../../context/Context";
import { Outlet, Navigate } from "react-router-dom";

const AuthRoute = ({ ...rest }) => {
  const [state, setState] = useContext(UserContext);

  if (!state) {
    return <Navigate to="/login" />;
  }

  return state && state.token ? <Outlet {...rest} /> : "";
};

export default AuthRoute;
