import React from "react";
import "./getstarted.css";
const Getstarted = () => {
  return (
    <section className="G-wrapper">
      <div className="paddings innerWidth G-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.<br></br>{" "}
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:monitishkumar15@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Getstarted;
