"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const MandiFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-wrap-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-card">
                <Link href="/" className="logo">
                  <Image
                    src="/images/logo-white.png"
                    alt="logo"
                    width={124}
                    height={38}
                  />
                </Link>
                <p>
                  Chatti Se Mandi Tak is dedicated to providing convenient solutions for farmers in Bihar, enabling easy access to mandi prices and booking home pickups for their produce.
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-card ps-5">
                <h3>Maize</h3>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="#">
                      <i className="fa-solid fa-angles-right"></i>Sell G1 Quality
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-solid fa-angles-right"></i> Sell G2 Quality
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-solid fa-angles-right"></i> Sell G3 Quality
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-solid fa-angles-right"></i> Sell G4 Quality
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-solid fa-angles-right"></i> Sell G5 Quality
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-card ps-5">
                <h3>Resources</h3>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="#">
                      <i className="fa-solid fa-angles-right"></i> Trade
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-solid fa-angles-right"></i> Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-solid fa-angles-right"></i> Wallets
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <i className="fa-solid fa-angles-right"></i> FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fa-solid fa-angles-right"></i> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-card">
                <h3>Contact Info</h3>

                <ul className="contact-links">
                  <li>
                    <span>Address:</span> Araria, Bihar
                  </li>
                  <li>
                    <span>Website:</span>{" "}
                    <a href="https://chattisemanditak.com/" target="_blank">
                      Chatti Se Mandi Tak
                    </a>
                  </li>
                  <li>
                    <span>Email:</span>{" "}
                    <a href="mailto:admin@chattisemanditak.com">admin@chattisemanditak.com</a>
                  </li>
                  <li>
                    <span>Phone:</span>{" "}
                    <a href="tel:1234567890">+123 456 7890</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-wrap-line">
          <Image
            src="/images/cryptocurrency-home/footer/wrap-line.png"
            alt="image"
            width={1920}
            height={310}
          />
        </div>
        <div className="footer-wrap-shape">
          <Image
            src="/images/cryptocurrency-home/footer/icon1.png"
            alt="image"
            width={63}
            height={58}
          />
        </div>
        <div className="footer-wrap-shape-2">
          <Image
            src="/images/cryptocurrency-home/footer/icon2.png"
            alt="image"
            width={33}
            height={53}
          />
        </div>
      </div>

      <div className="copyright-wrap-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-md-6">
              <p>
                Copyright &copy;{currentYear} Chatti Se Mandi Tak. All rights reserved{" "}
                <a href="https://chattisemanditak.com/" target="_blank">
                  Chatti Se Mandi Tak
                </a>
              </p>
            </div>

            <div className="col-lg-6 col-sm-6 col-md-6">
              <ul className="list">
                <li>
                  <Link href="/terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MandiFooter;
