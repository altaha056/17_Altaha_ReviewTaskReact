import { Link } from "react-router-dom";

import Clock from "react-live-clock";
const Home = () => {
  return (
    <>
      <main className="main main--hero ">
        <h5 className="text-end p-3">
          <Clock format={"HH:mm:ss"} ticking={true} timezone={"ID/Pacific"} />
        </h5>
        <div className="container">
          <div className="row"></div>
          <div className="row d-flex align-items-center mt-3">
            <div className="col-lg-4">
              <img
                src="./img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
                alt=""
                width="355"
                height="355"
                className="img--profile"
              />
            </div>
            <div className="col-lg-8 px-5">
              <h4 className="fw-bolder">Hi, my name is</h4>
              <h1 className="display-1 fw-bold lh-1">Anne Sullivan</h1>
              <h2 className="fw-bolder">I build things for the web</h2>
              <Link to="/contact_us" className="btn btn-warning mt-4 px-4 py-2">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
