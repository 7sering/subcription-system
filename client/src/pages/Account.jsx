import { useState, useEffect, useContext } from "react";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";

import { UserContext } from "../context/Context";
const Account = () => {
  const [state, setState] = useContext(UserContext);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const getSubscriptions = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/api/subscriptions"
      );
      console.log("subscription >", data);
      setSubscriptions(data.data);
    };
    if (state && state.token) getSubscriptions();
  }, [state && state.token]);
  return (
    <div className="container">
      <div className="row">
        <UserOutlined className="display-4" />
        <h1>Account</h1>
        <p className="lead pb-4">Subscription Stauts</p>
        <pre>{JSON.stringify(subscriptions, null, 4)}</pre>
      </div>
    </div>
  );
};

export default Account;
