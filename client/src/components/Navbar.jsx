import { Link } from "react-router-dom";

const Navbar = () => {
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
