import React, { useState } from "react";
import "./contact.css";

function Contact() {
const [formData, setFormData] = useState({
name: "",
email: "",
message: ""
});

function handleChange(e) {
const { name, value } = e.target;

setFormData((previousData) => ({
  ...previousData,
  [name]: value
}));


}

function handleSubmit(e) {
e.preventDefault();


alert("Thank you, " + formData.name + "! Your form is ready to submit.");

setFormData({
  name: "",
  email: "",
  message: ""
});


}

return ( <section id="contact" className="contactSection"> <div className="sectionHeading"> <span>GET IN TOUCH</span> <h2>Contact Me</h2> <p>Have a project idea? Let's talk about it.</p> </div>


  <form className="contactForm" onSubmit={handleSubmit}>
    <label htmlFor="contactName">Your Name</label>
    <input
      id="contactName"
      type="text"
      name="name"
      placeholder="Enter your name"
      value={formData.name}
      onChange={handleChange}
      required
    />

    <label htmlFor="contactEmail">Your Email</label>
    <input
      id="contactEmail"
      type="email"
      name="email"
      placeholder="Enter your email"
      value={formData.email}
      onChange={handleChange}
      required
    />

    <label htmlFor="contactMessage">Your Message</label>
    <textarea
      id="contactMessage"
      name="message"
      placeholder="Write your message..."
      rows="5"
      value={formData.message}
      onChange={handleChange}
      required
    />

    <button type="submit">Send Message</button>
  </form>
</section>


);
}

export default Contact;
