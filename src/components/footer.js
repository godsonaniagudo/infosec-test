import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <div className="footerContent">
        <h1>The News</h1>

        <div>
          {props.categories.map((item, index) => (
            <span key={index}>
              <a href="/">{item}</a>
            </span>
          ))}
        </div>

        <div>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
