import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>

        <span className="introText">
          I'm <span className="introName">Bipika</span>
          <br />
          Website Developer
        </span>

        <p className="introPara">
          I am passionate about technology, web development, and creating
          beautiful, user-friendly digital experiences. I enjoy learning
          new technologies, solving problems, and turning ideas into
          meaningful projects.
        </p>

        <a href="#contact" className="introBtn">
          <strong>Hire Me</strong>
        </a>
      </div>
      <div className="introImageContainer">
        <img src="bipika-removebg-preview.png" alt="Bipika" className="introImage"/>
      </div>
    </section>
  );
};

export default Intro;