import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CheckOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/Context";
const StripeSuccess = () => {
  const navigate = useNavigate();
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    const getSubscriptionStatus = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/api/subscription-status"
      );
      console.log("Subscription Status", data);
      if (data && data.length === 0) {
        navigate("/");
      } else {
        //Update user in local Storage
        const auth = JSON.parse(localStorage.getItem("auth"));
        auth.user = data;
        localStorage.setItem("auth", JSON.stringify(data));
        // Update user in context
        setState(auth);
        setTimeout(() => {
          navigate("/account");
        }, 1000);
      }
    };

    getSubscriptionStatus();
  }, []);

  return (
    <div
      className="d-flex justify-content-center fw-bold"
      style={{ height: "90vh" }}
    >
      <div className="d-flex align-items-center">
        <CheckOutlined
          style={{ fontSize: "35px", marginRight: "10px", color: "green" }}
        />
        <h2 className="text-success fw-bold"> Payment Success</h2>
      </div>
    </div>
  );
};
export default StripeSuccess;
