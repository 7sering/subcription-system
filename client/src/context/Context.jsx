import { useState, useEffect, createContext, Children } from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: "",
  });

  //User Effect
  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("auth")));
  }, []);

  // Axios Config
  const token = state && state.token ? state.token : "";
  axios.defaults.baseURL = import.meta.env.REACT_APP_API;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
