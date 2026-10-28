import React from "react";
import "./portfolio.css";
const projects = [
{
title: "Restaurant Website",
description:
"A responsive restaurant website for exploring menus, booking tables, and ordering food.",
technologies: "React, CSS, JavaScript"
},

{
title: "Personal Portfolio",
description:
"A personal website to showcase my skills, projects, experience, and contact information.",
technologies: "React, HTML, CSS"
},

{
title: "Student Management System",
description:
"A web application concept for organizing student details and academic information.",
technologies: "React, JavaScript, CSS"
}
];

function Portfolio() {
return ( <section id="portfolio" className="portfolioSection"> <div className="sectionHeading"> <span>MY WORK</span> <h2>My Portfolio</h2> <p>Here are some projects that represent my learning and creativity.</p> </div>


  <div className="projectGrid">
    {projects.map((project, index) => (
      <article className="projectCard" key={project.title}>
        <div className="projectNumber">
          {String(index + 1).padStart(2, "0")}
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <span className="projectTechnologies">
          {project.technologies}
        </span>
      </article>
    ))}
  </div>
</section>


);
}

export default Portfolio;
