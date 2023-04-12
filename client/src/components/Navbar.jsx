import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../utils/functions";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/Context";

const Navbar = () => {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();

  console.log("State =>", state);

  const logout = () => {
    setState({ user: {}, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between ">
          <h3 className="pt-2 font-weight-bold">OPTHA</h3>
          <ul className="nav ">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            {state && state.token ? (
              <Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/account">
                    Account
                  </Link>
                </li>
                <li className="nav-item">
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={logout}
                    className="nav-link"
                  >
                    Logout
                  </span>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
