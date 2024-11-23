import React, { useState } from "react";
import Helper from "./aordian_helper";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };



  console.log(activeIndex);
  const accordionData = [
    {
      title: "What is your refund policy?",
      content: "We offer a full refund within 30 days of purchase. Please contact our support team to process your refund.",
    },
    {
      title: "How long does shipping take?",
      content: "Shipping typically takes 5-7 business days within the United States. International shipping may vary.",
    },
    {
      title: "Do you offer customer support?",
      content: "Yes! Our support team is available 24/7. You can reach us through email or live chat.",
    },
  ];


  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
       <Helper item={item} index={index} setActiveIndex={setActiveIndex}  open={index==activeIndex?true:false}/>
      ))}
    </div>
  );
};

export default Accordion;
