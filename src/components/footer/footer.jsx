import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <section className="F-wrapper">
      <div className="paddings innerWidth flexCenter F-container">
        <div className="flexColStart left-F">
          <img src="./logo2.png" alt="footer" width={120} />
          <div className="text">
            <span className="secondaryText ">
              Our vision is to make all people <br></br>the best place to live
              for them.
            </span>
          </div>
        </div>
        <div className="flexColStart right-F">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter lower">
            <span>Property </span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
