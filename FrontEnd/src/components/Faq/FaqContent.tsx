"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FaqContent: React.FC = () => {
  // Array of FAQ items
  const faqItems = [
    {
      question: "How do I check the current mandi price?",
      answer:
        "To check the current mandi price, simply open the Chatti Se Mandi Tak app and navigate to the 'Price Check' section. From there, you can search for your desired crop or commodity to view its current price.",
    },
    {
      question: "Can I book a home pickup for my produce?",
      answer:
        "Yes, you can book a home pickup for your produce through the Chatti Se Mandi Tak app. Simply go to the 'Home Pickup' section, enter the details of your produce and location, and schedule a pickup at your convenience.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "For any inquiries or assistance, you can contact our customer support team through the Chatti Se Mandi Tak app. Simply navigate to the 'Support' or 'Contact Us' section, where you'll find options to reach out via phone, email, or live chat.",
    },
    // Add more FAQ items as needed
  ];
  

  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">About Our Services</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              We believe brand interaction is key in communication. Real
              innovations and a positive customer experience are the heart of
              successful communication.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} uuid={`faq-${index}`}>
                      <AccordionItemHeading>
                        <AccordionItemButton>{item.question}</AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="accordion-content">{item.answer}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
