"use client"
import React, { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import Image from "next/image";
import SubscribeStyleThree from "../../components/Common/SubscribeStyleThree";
import Footer from "../../components/Layout/Footer";
import axios from 'axios';

export default function Page() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [accountDeleted, setAccountDeleted] = useState(false);

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleSendOTP = async (event) => {
    event.preventDefault();
    try {
      // Send a request to your backend to send OTP to the provided mobile number
      const response = await axios.post(`https://qualifier.co.in/chattiApi/allCommon/userAuth/sendOtp`, {
        mobileNo: mobileNumber,
      });
      // Handle the response, e.g., show a message to the user
      console.log(response.data);
      setShowOTPInput(true); // Show OTP input field after sending OTP
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error(error);
    }
  };

  const handleConfirmDelete = async (event) => {
    event.preventDefault();
    try {
      let url = `https://qualifier.co.in/chattiApi/allCommon/deleteProfile/withOtp`;
      // Send a request to your backend to confirm deletion and delete account
      const response = await axios.post(
        url,
        { mobileNumber, otp },
        
      );
      let myRes = response.data;
      if (myRes.variant === 'success') {
        // Handle success response
        setAccountDeleted(true); // Set flag indicating account deletion
      }
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />     
      <div className="free-trial-area ptb-100 bg-f4f7fe">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="ft-img">
                <Image
                  src="/images/machine-learning/free-trial-img.png"
                  alt="Image"
                  width={700}
                  height={400}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="subscribe-content">
                <span className="sub-title">Delete Account Permanently</span>
                <h2>This action is very dangerous and will permanently delete your account. Are you sure you want to proceed?</h2>

                {!showOTPInput && (
                  <form className="newsletter-form" onSubmit={handleSendOTP}>
                    <input
                      type="number"
                      className="input-newsletter"
                      placeholder="Enter your Mobile Number"
                      name="mobileNumber"
                      value={mobileNumber}
                      onChange={handleMobileNumberChange}
                      required
                    />
                    <button type="submit">Send OTP</button>
                  </form>
                )}

                {showOTPInput && (
                  <form className="newsletter-form" onSubmit={handleConfirmDelete}>
                    <input
                      type="text"
                      className="input-newsletter"
                      placeholder="Enter OTP"
                      name="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                    <button type="submit">Confirm Delete</button>
                  </form>
                )}

                {accountDeleted && (
                  <p>Account deleted Initiated successfully!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
