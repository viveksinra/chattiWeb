"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Tradevalue: React.FC = () => {
  // Define an array containing data for each slide
  const slidesData = [
    {
      imageSrc: "/images/cryptocurrency-home/value-trade/icon1.png",
      name: "Maize (G1 Quality)",
      price: "₹2100",
      change: "+0.017%",
    },
    {
      imageSrc: "/images/cryptocurrency-home/value-trade/icon2.png",
      name: "Maize (G2 Quality)",
      price: "₹1950",
      change: "+0.017%",
    },
    {
      imageSrc: "/images/cryptocurrency-home/value-trade/icon1.png",
      name: "Maize (G3 Quality)",
      price: "₹1800",
      change: "-0.017%",
    },
    {
      imageSrc: "/images/cryptocurrency-home/value-trade/icon2.png",
      name: "Maize (G4 Quality)",
      price: "₹1650",
      change: "+0.017%",
    },
    
  ];

  return (
    <>
      <div className="value-trade-area">
        <div className="container-fluid">
          <Swiper
            spaceBetween={25}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1400: {
                slidesPerView: 3,
              },
              1600: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay]}
            className="value-trade-slides"
          >
            {/* Map over the array to render each slide dynamically */}
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="value-trade-card">
                  <Image
                    src={slide.imageSrc}
                    alt="image"
                    width={22}
                    height={22}
                  />
                  <p>
                    <b>{slide.name}</b> {slide.price}{" "}
                    <span>
                      <i className="bx bx-up-arrow-alt"></i> {slide.change}
                    </span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Tradevalue;

