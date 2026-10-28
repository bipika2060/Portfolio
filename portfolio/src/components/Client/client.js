import React from "react";
import "./client.css";
const testimonials = [
{
name: "Web Design Project",
role: "Sample Client",
message:
"A well-designed website helps businesses present their services clearly and create a better experience for visitors."
},

{
name: "Responsive Development",
role: "Sample Client",
message:
"Responsive design makes websites easier to use on mobile phones, tablets, and desktop computers."
},

{
name: "Creative Collaboration",
role: "Sample Client",
message:
"Good communication and thoughtful design help turn ideas into useful digital experiences."
}

];

function Clients() {
return ( <section id="clients" className="clientsSection"> <div className="sectionHeading"> <span>COLLABORATION</span> <h2>Clients & Testimonials</h2> <p>Building positive experiences through thoughtful web development.</p> </div>


  <div className="testimonialGrid">
    {testimonials.map((item) => (
      <article className="testimonialCard" key={item.name}>
        <div className="testimonialQuote">“</div>
        <p>{item.message}</p>
        <h3>{item.name}</h3>
        <span>{item.role}</span>
      </article>
    ))}
  </div>
</section>


);
}

export default Clients;
