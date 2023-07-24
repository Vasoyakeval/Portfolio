import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>kevalvasoya744@gmail.com</span>
        <div className="f-icons">
        <a href="https://instagram.com/_jaydip_22_8_?igshid=NTc4MTIwNjQ2YQ==">
          <div className="insta">    
          <Insta className="insta" color="white" size={"3rem"} />
          </div>
          </a>
          < a href="https://www.linkedin.com/in/jaydip-patel-96822923b">
          <div className="fb">
          <Facebook color="white" size={"3rem"} />
          </div>
          </a>
          <a href="https://github.com/Jaydip090">
          <div className="gt">
          <Gitub color="white" size={"3rem"} />
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
