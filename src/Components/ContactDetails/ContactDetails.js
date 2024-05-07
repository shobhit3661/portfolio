import React from "react";
import "./ContactDetails.css";

export default function ContactDetails() {
  const openGmailTab = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=shobhitsharma.3661@gmail.com",
      "_blank"
    );
  };
  return (
    <>
      <div className="container">
        <h1>Contact Details</h1>
        <div className="contact-info">
          <p>(+91)9549883661</p>
          <p>
            <a href="#" onClick={openGmailTab}>
              shobhitsharma.3661@gmail.com
            </a>
          </p>
          <p className="profiles">
            <i className="fab fa-github" style={{ fontSize: "24px" }}></i>
            <a
              href="https://github.com/shobhit3661/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <i className="fab fa-linkedin" style={{ fontSize: "24px" }}></i>
            <a
              href="https://www.linkedin.com/in/shobhit-sharma-703393188/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
