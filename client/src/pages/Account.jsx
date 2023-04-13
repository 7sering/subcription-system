import { useState, useEffect, useContext } from "react";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";

import moment from "moment"
import {useNavigate} from "react-router-dom"

import { UserContext } from "../context/Context";
const Account = () => {
  const [state, setState] = useContext(UserContext);
  const [subscriptions, setSubscriptions] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const getSubscriptions = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/api/subscriptions"
      );
      console.log("subscription >", data);
      setSubscriptions(data.data);
    };
    if(state && state.token) getSubscriptions();
  }, [state && state.token]);

  const mangeSubscriptions = async() => {
    const {data} = await axios.get("http://localhost:8000/api/customer-portal")
    window.open(data)
  }
  return (
    <div className="container">
      <div className="row">
        <UserOutlined className="display-4" />
        <h1>Account</h1>
        <p className="lead pb-4">Subscription Stauts</p>
        {/* <pre>{JSON.stringify(subscriptions, null, 4)}</pre> */}
      </div>

      <div className="row">
        {subscriptions && subscriptions.map((subs) => (
          <div key={subs.id}>
            <section>
              <hr />
              <h4 className="fw-bold">{subs.plan.nickname}</h4>
              <h5> {(subs.plan.amount / 100).toLocaleString("en-US", {
                style: "currency",
                currency: subs.plan.currency,
              })}</h5>
              <p>Status: {subs.status}</p>
              <p>Card:...{subs.default_payment_method.card.last4}</p>
              <p>Subscription End: {moment(subs.current_period_end * 1000).format("dddd, MMMM Do YYYY h:mm:ss a").toString()} </p>

              <button onClick={()=>  navigate(`/${subs.plan.nickname.toLowerCase()}`)} className="btn btn-outline-primary">Access</button> {" "}
              <button onClick={mangeSubscriptions} className="btn btn-outline-success">Manage Subscription</button>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
