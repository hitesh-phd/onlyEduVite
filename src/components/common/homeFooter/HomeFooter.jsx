import React from "react";
import "./homeFooterStyles.css";

function HomeFooter() {
  const Card = (cardContent) => {
    return (
      <div>
        <p>{cardContent.heading}</p>
        <div>
          <p>{cardContent.highlight}</p>
          <p>{cardContent.text}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="hfCon primary-btn">
      <div className="hfNonCard heading">Why choose us</div>
      <img alt="arrow"></img>
      <div className="hfCardCon">
        <Card heading="heading" highlight="hl" text="text"></Card>
        <Card heading="heading" highlight="hl" text="text"></Card>
        <Card heading="heading" highlight="hl" text="text"></Card>
      </div>
    </div>
  );
}

export default HomeFooter;
