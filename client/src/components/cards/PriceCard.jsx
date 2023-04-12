import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/Context";

const PriceCard = ({ price, handleSubscription, userSubscriptions }) => {
  const [state, setState] = useContext(UserContext);
  const dynamicDescription = () => {
    if (price.nickname === "Basic") {
      return "5 Exclusive Stocks";
    } else if (price.nickname === "Standard") {
      return "25 Exclusive Stocks";
    } else if (price.nickname === "Premium") {
      return "50 Exclusive Stocks";
    }
  };

  const buttonText = () => {
    return state && state.token ? "Buy Plan " : "Sign Up";
  };

  return (
    <>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">{price.nickname} </h4>
          </div>

          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              {(price.unit_amount / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
              <small className="text-muted fw-light">/mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-3">
              <li className="fw-bold">{dynamicDescription()}</li>
              <li>5GB Cloud Database</li>
              <li>Free Premium Emails</li>
              <li>Free Premium Support</li>
              <li>Cloud AI Analytics</li>
            </ul>
            <Link to="/register">
              <button
                onClick={(e) => handleSubscription(e, price)}
                className="w-100 btn btn-lg btn-outline-danger"
              >
                {userSubscriptions && userSubscriptions.includes(price.id)
                  ? "Access Plan"
                  : buttonText()}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
