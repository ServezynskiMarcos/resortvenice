import React from "react";
import s from "./Footer.module.css";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.center}>
        <div className={s.left}>
          <h3>Contact</h3>
          <p>WhatsApp: <a href="https://wa.me/543644413681" target="BLANK">+543644413681</a></p>
          <p>
            Email:{" "}
            <a href="mailto:servezynskimarcos1@gmail.com" target="BLANK">
              servezynskimarcos1@gmail.com
            </a>{" "}
          </p>
        </div>
        <h1>Venice Resort</h1>
        <div className={s.right}>
          <h3>Social</h3>
          <p>
            Follow me on social media <br></br>and keep in touch with me.
          </p>
          <div className={s.icons}>
            <a href="https://github.com/ServezynskiMarcos" Target="BLANK">
              <AiFillGithub size="30px" />
            </a>
            <a href="https://www.instagram.com/m.servezynski/" Target="BLANK">
              <AiFillInstagram size="30px" />
            </a>
            <a
              href="https://www.linkedin.com/in/marcos-servezynski-442b7721b/"
              Target="BLANK"
            >
              <AiFillLinkedin size="30px" />
            </a>
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", fontSize: "0.6rem"}}>
        Copyright © by Marcos Servezynski - all rights reserved
      </p>
    </div>
  );
};

export default Footer;
