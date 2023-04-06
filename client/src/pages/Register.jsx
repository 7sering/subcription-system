import { useState } from "react";
import Input from "../components/Input";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
