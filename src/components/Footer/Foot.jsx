import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        className="text-center text-lg-start"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.005)" }}
      >
        <div className="container">
          <div className="row text-center border-bottom">
            <div className="col-sm m-4 font-weight-bold">
              Get connected with us on social networks
            </div>
            <div className="col-md-6 m-4">
              <a
                href="https://www.facebook.com/profile.php?id=100061253912933"
                target="_blank"
                rel="noreferrer"
                className="m-4 link-secondary h4"
              >
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </a>
              <a
                href="https://www.instagram.com/m_ahmed.anwer/"
                className="m-4 link-secondary h4"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </a>
              <a
                href="https://twitter.com/M_Ahmed_Anwer"
                target="_blank"
                rel="noreferrer"
                className="m-4 link-secondary h4"
              >
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </a>
              <a
                href="https://github.com/m-ahmed-anwer/"
                target="_blank"
                rel="noreferrer"
                className="m-4 link-secondary h4"
              >
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-6 mx-auto md-5">
                <h6 className="text-uppercase fw-bold mb-4">Whistle</h6>
                <p className="col-xl-10">
                  Whistle.com is a trading name of Booking.com Transport Limited
                  which is a limited company registered in UAE
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                <p>
                  <Link to="/" className="text-reset">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Privacy Policy
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Careers
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Dubai - UAE
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
                  info@whistle.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{" "}
                  +971501234567
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4 ">© 2022 Copyright Whistle</div>
      </div>
    </>
  );
}
export default Footer;
