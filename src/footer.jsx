import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="about">
      <div className="container">
        <h1 style={{ textDecoration: "underline" }}>About Me</h1>
        <p>
          Hello! I'm <b><i>Rohit Sonar</i></b>, a <b><i>MERN Stack</i></b> developer.<br />
          In this project, I have created a <b>Weather App</b> using
          technologies Vite + React for client side and use <b>weatherApi</b>{" "}
          for getting data of weather for a particular city.<br /> I'm sure
          you're definitely going to like this project. For the source code of
          this project, you can check my GitHub repo or you can drop me a
          message on LinkedIn. Thank you!
        </p>
        <div className="links ">
          <h6 className="my-1 mr-2">
            <b>Connect with Me: </b>
          </h6>
          <a
            className="link2"
            href="https://github.com/rohit0402"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            className="link2"
            href="https://www.linkedin.com/in/rohit-sonar-3b3291273/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="linkedin icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
