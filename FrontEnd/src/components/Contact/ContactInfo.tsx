"use client";

import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-email"></i>
                </div>
                <h3>Email Here</h3>
                <p>admin@chattisemanditak.com</p>
                <p>contactinfo@chattisemanditak.com</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-phone-call"></i>
                </div>
                <h3>Location Here</h3>
                <p>Araria, Bihar</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="flaticon-marker"></i>
                </div>
                <h3>Call Here</h3>
                <p>+91 9955431678</p>
                <p>+91 7004105208</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
