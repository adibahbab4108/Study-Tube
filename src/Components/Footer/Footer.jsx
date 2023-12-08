import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";
export const Footer = () => {
  return (
    <>
      <div className="container-fluid mx-auto row mt-5 pt-5">
        <div className="contact-us col-md-6">
          <h1>Contact Us</h1>
          <hr />
          <div>
            <li>
              <i className="bi bi-house-door"></i> Kumira, Chattogram-4318{" "}
              <br />
              International Islamic University Chittagong
            </li>
            <li>
              <a href="#">
                <i className="bi bi-messenger"></i> Messanger
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-whatsapp"></i> Whatsapp
              </a>
            </li>
          </div>
        </div>
        <div className="follow-us col-md-6 text-center">
          <h1>Follow us</h1>
          <hr />
          <div>
            <a href="">
              <i className="bi bi-facebook"> </i>
            </a>
            <a href="">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
        <p className="text-center p-3">
          All right reserved by &#128526; Adib Ahbab,&#128524; Masud
          Sakil,&#128512; Imam Hasan @2023
        </p>
      </div>
    </>
  );
};
