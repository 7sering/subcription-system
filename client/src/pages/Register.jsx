import axios from "axios";
import { useState, useContext } from "react";
import toast from "react-hot-toast";

import Input from "../components/Input";
import Button from "../components/Button";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/Context";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [state, setState] = useContext(UserContext);

  const handleClick = async (e) => {
    // console.log(name, email, password);
    try {
      e.preventDefault();
      const { data } = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
      });
      console.log(data);
      if (data.error) {
        toast.error(data.error);
      } else {
        setName("");
        setEmail("");
        setPassword("");
        toast.success(
          `Welcome ${data.user.name} You are Registered Please Login `
        );
        setState(data);
        localStorage.setItem("auth", JSON.stringify(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong please check again");
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="container align-items-center d-flex">
          <div className="row col-md-6 offset-md-3 text-center">
            <h1 className="pt-5 font-bold">Lets Get Started</h1>
            <p className="lead pb-5">Sign Up fo free no credit required</p>
            <div className="form-group">
              <Input label="Name" value={name} setValue={setName} />
              <Input
                label="Email"
                type="email"
                value={email}
                setValue={setEmail}
              />
              <Input
                label="Password"
                type="password"
                value={password}
                setValue={setPassword}
              />
              <div className="d-grid">
                <Button
                  handleClick={handleClick}
                  text="Register"
                  // type="danger"
                  size="sm"
                />
              </div>
            </div>
          </div>
          {/* <div className="row">
            <pre>{JSON.stringify({ name, email, password }, null, 4)}</pre>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Register;
