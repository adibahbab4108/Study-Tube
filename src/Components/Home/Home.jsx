import React from "react";
import "./Home.css";
import featureImage from "../../assets/featureImg1.jpg";
const Home = () => {
  return (
    <>
      <div className="container-xl mt-5">
        {/* ........top........ */}
        <div className="home-top shadow rounded">
          <div>
            {" "}
            <h1>
              An YouTube based platform of
              <br /> learning{" "}
            </h1>
          </div>
          <div className="home-top-floating p-3 rounded">
            <div className="home-top-floating-content">
              <h1 className="animated-text">
                Learn <br />
                <span></span>{" "}
              </h1>
              <p>Do not Get Distract From Your Study</p>
            </div>
          </div>
        </div>
        {/* .........mddile........... */}
        <div className="home-middle shadow rounded p-3 ">
          <h1>Features</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
            <div className="col">
              <div className="card h-100">
                <img src={featureImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Interactive Video Lectures</h5>
                  <p className="card-text">
                    Dive into engaging video lectures led by expert instructors.
                    Interact with the content, take notes, and mark important
                    sections for later reference.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={featureImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Mobile-Friendly Design</h5>
                  <p className="card-text">
                    Access your courses on the go with our mobile-responsive
                    platform. Learn at your convenience, whether you're at home
                    or on the move.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={featureImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Sorted And Organized</h5>
                  <p className="card-text">
                    Easily find your resources and learn as you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
