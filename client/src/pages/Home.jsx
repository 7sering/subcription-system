import { useEffect, useState } from "react";
import axios from "axios";
import PriceCard from "../components/cards/PriceCard";

const Home = () => {
  const [prices, setPrices] = useState([]);

  const fetchPrice = async () => {
    const { data } = await axios.get("http://localhost:8000/api/prices");
    console.log("Prices request data", data);
    setPrices(data);
  };

  const handleClick = (e) => {
    e.preventDefault()
    console.log("Package Plan Clicked for Buy");
  }

  useEffect(() => {
    fetchPrice();
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            height: "100vh",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="position-relative w-100"
        >
          <div
            className="position-absolute text-white d-flex flex-column align-items-start justify-content-center"
            style={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.7)",
            }}
          >
            <div className="container">
              <div className="col-md-6">
                <span style={{ color: "#bbb" }} className="text-uppercase">
                  SubHeadline
                </span>
                {/* on small screens remove display-4 */}
                <h1 className="mb-4 mt-2 display-4 font-weight-bold">
                  Enter Your{" "}
                  <span style={{ color: "#9B5DE5" }}>Headline Here</span>
                </h1>
                <p style={{ color: "#bbb" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatem eos ea, cum quae facilis optio impedit tempora
                  aliquam at eveniet?
                </p>
                <div className="mt-5">
                  {/* hover background-color: white; color: black; */}
                  <a
                    href="#"
                    className="btn px-5 py-3 text-white mt-3 mt-sm-0"
                    style={{ borderRadius: "30px", backgroundColor: "#9B5DE5" }}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="text-center pt-5 pb-3 fw-bold">
          Explore The Right Plan For Your Business
        </h2>
        <div className="row row-col-1 pt-5 mb-3 text-center">
          {prices &&
            prices.map((price) => <PriceCard key={price.id} price={price} handleClick={handleClick} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
