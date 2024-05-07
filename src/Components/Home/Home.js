import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="background">
          <img
            className="backgroundImage"
            src="topBackground.jpg"
            alt="logo192.png"
          />
          <div className="nameDetails">
            <h1>I'm Shobhit Sharma</h1>
            <h3>A Software Engineer</h3>
          </div>
        </div>
      </div>
    </>
  );
}
