import React from "react";
import "./aboutme.css";

export default function AboutMe() {
  return (
    <div className="fullDesc" id="aboutme">
      <h1 className="aboutMe">ABOUT ME</h1>
      <p className="description">
        {" "}
        Hello, my name is Michael Ben-Tov. I am a full stack software developer.
        I enjoy the process of building and maintaining mobile and web
        applications, from the conception of a new idea, to maintaining an
        application in production. Check out my projects to see my skills!
      </p>
    </div>
  );
}
