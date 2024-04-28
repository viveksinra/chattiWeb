"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const MandiFeedbacks: React.FC = () => {
  // Testimonials array
  const testimonials = [
    {
      name: "Indian Farmer from Bihar",
      occupation: "Agriculturalist",
      imageSrc: "/images/cryptocurrency-home/user1.jpg",
      rating: 5,
      feedback:
        "As an Indian farmer from Bihar, I've found Chatti Se Mandi Tak to be an invaluable resource. It's streamlined my selling process and provided crucial market insights, making it easier to navigate the mandi.",
    },
    {
      name: "Indian Farmer from Bihar",
      occupation: "Agriculturalist",
      imageSrc: "/images/cryptocurrency-home/user2.jpg",
      rating: 5,
      feedback:
        "Chatti Se Mandi Tak has truly revolutionized my approach to selling produce. It's user-friendly and provides vital information on market prices, making my trips to the mandi more efficient and profitable.",
    },
    {
      name: "Indian Farmer from Bihar",
      occupation: "Agriculturalist",
      imageSrc: "/images/cryptocurrency-home/user3.jpg",
      rating: 5,
      feedback:
        "Being a farmer in Bihar, Chatti Se Mandi Tak has become an essential tool in my farming journey. Its simplicity and informative features have significantly enhanced my mandi experiences.",
    },
    {
      name: "Indian Farmer from Bihar",
      occupation: "Agriculturalist",
      imageSrc: "/images/cryptocurrency-home/user2.jpg",
      rating: 5,
      feedback:
        "Chatti Se Mandi Tak has surpassed all my expectations. The platform caters perfectly to the needs of farmers like me, providing solutions that are practical and effective.",
    },
    {
      name: "Indian Farmer from Bihar",
      occupation: "Agriculturalist",
      imageSrc: "/images/cryptocurrency-home/user3.jpg",
      rating: 5,
      feedback:
        "For all fellow farmers in Bihar, I wholeheartedly endorse Chatti Se Mandi Tak. It's a game-changer in our sector, offering transparency, convenience, and invaluable market insights.",
    },
  ];
  

  return (
    <>
      <div className="unique-feedback-area pt-100">
        <div className="container">
          <div className="section-title with-linear-gradient-text">
            <span className="sub-title">Mandi Feedback</span>
            <h2>Testimonials from Fellow Farmers</h2>
          </div>

          <Swiper
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
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
              1200: {
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="unique-feedback-slides"
          >
            {/* Map through testimonials array */}
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="unique-single-feedback">
                  <ul className="rating">
                    {/* Display star ratings */}
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <li key={i}>
                        <i className="bx bxs-star"></i>
                      </li>
                    ))}
                  </ul>
                  <p>{testimonial.feedback}</p>
                  <div className="client-info">
                    {/* Display client image */}
                    <Image
                      src={testimonial.imageSrc}
                      alt="image"
                      width={150}
                      height={150}
                    />
                    {/* Display client name and occupation */}
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.occupation}</span>
                  </div>
                  {/* Display quote image */}
                  <div className="quote">
                    <Image
                      src="/images/cryptocurrency-home/quote.png"
                      alt="image"
                      width={118}
                      height={86}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MandiFeedbacks;
