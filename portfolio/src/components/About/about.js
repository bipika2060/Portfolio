
import React from "react";
import "./about.css";

function About() {
  const skills = [
    {
      name: "HTML",
      description: "Building structured and accessible web pages",
      icon: "</>",
      category: "Frontend"
    },

    {
      name: "CSS",
      description: "Creating beautiful and responsive website designs",
      icon: "✧",
      category: "Frontend"
    },

    {
      name: "JavaScript",
      description: "Making websites interactive and dynamic",
      icon: "JS",
      category: "Programming"
    },

    {
      name: "React.js",
      description: "Building reusable and dynamic user interfaces",
      icon: "⚛",
      category: "Frontend"
    },

    {
      name: "SQL",
      description: "Managing databases and writing SQL queries",
      icon: "DB",
      category: "Database"
    },
    
    {
      name: "Artificial Intelligence",
      description: "Exploring AI tools and generative AI technologies",
      icon: "AI",
      category: "AI & Technology"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="aboutContainer">

        <div className="skillsHeading">
          <h2>
            My <span>Skills</span>
          </h2>
          <div className="headingLine"></div>
        </div>

        <div className="skillsGrid">
          {skills.map((skill) => (
            <div className="skillCard" key={skill.name}>
              <div className="skillCardTop">
                <div className="skillIcon">{skill.icon}</div>

                <span className="skillCategory">
                  {skill.category}
                </span>
              </div>

              <h3>{skill.name}</h3>

              <p>{skill.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;

