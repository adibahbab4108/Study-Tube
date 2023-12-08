import React from "react";
import "./Home.css";
import featureImage1 from "../../assets/featureImg1.jpg";
import featureImage2 from "../../assets/responsive.jpg";
import featureImage3 from "../../assets/home-cover.jpg";
const Home = () => {
  return (
    <>
      <div className="container-xl mt-5">
        {/* ........top........ */}
        <div className="home-top shadow-lg rounded">
          <h1>
            An YouTube based <br /> <span>learning platform</span>
          </h1>
          <div className="home-top-floating p-3 rounded shadow-lg">
            <div className="home-top-floating-content">
              <h1 className="animated-text">
                Learn <br />
                <span></span>
              </h1>
              <p>Do not Get Distract From Your Study</p>
            </div>
          </div>
        </div>
        {/* .........mddile........... */}
        <div className="home-middle shadow-lg rounded p-4 ">
          <h1>Features</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
            <div className="col">
              <div className="card h-100">
                <img src={featureImage1} className="card-img-top" alt="..." />
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
                <img src={featureImage2} className="card-img-top" alt="..." />
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
                <img src={featureImage3} className="card-img-top" alt="..." />
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
