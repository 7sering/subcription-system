import { useEffect, useContext } from "react";
import { UserContext } from "../context/Context";
import { useMatch, useNavigate } from "react-router-dom";

const Basic = () => {
  const [state, setState] = useContext(UserContext);
  const match = useMatch("/basic"); // Specify the path you want to match here
  const navigate = useNavigate();
  useEffect(() => {
    let result = [];
    const check = () =>
      state &&
      state.user &&
      state.user.subscriptions &&
      state.user.subscriptions.map((sub) => {
        result.push(sub.plan.nickname);
      });

    check();
    console.log("MATCH => ", match);

    const plan = match.pathname.split("/")[1];
    const capitalizedPlan = plan.charAt(0).toUpperCase() + plan.slice(1);
    console.log(capitalizedPlan);

    if (!result.includes(capitalizedPlan)) {
      navigate("/");
    }
  }, [state && state.user]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center pt-5">Basic Plan</h2>
            <p className="text-center">
              Please use your basic plan wisely if not purchase premium{" "}
            </p>
            <center>
              {" "}
              <img
                src="https://www.slideteam.net/media/catalog/product/cache/1280x720/m/u/multiple_project_plan_timeline_weekly_basis_slide01.jpg"
                alt=""
                srcSet=""
              />
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basic;
