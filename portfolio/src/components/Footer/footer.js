import React from "react";
import "./footer.css";

const Footer= () => {
    return(
        <footer className="portfolioFooter">
            <div className="footerContainer">
                <div className="footerLeft">
                    <p>&copy; {new Date() .getFullYear()} Bipika.All rights</p>
                </div>

   <div className="footerCenter">
        <a href="#home" className="footerLink" ><strong>  Home  </strong></a> |
        <a href="#about" className="footerLink"><strong> About </strong></a> |
        <a href="#skills" className="footerLink"><strong>  Portfolio  </strong></a> |
        <a href="#projects" className="footerLink"><strong>  Clients  </strong></a>
      </div>

      <div className="footerRight">
          <a href="bipika@60" target="_blank" className="socialLink">GitHub </a>
          <a href="bipika" target="_blank"  className="socialLink">  LinkedIn</a>
          <a href="mailto:bipikaupadhaya@gmail.com" className="socialLink">  Email</a>
        </div>
            </div>
        </footer>
    )
}

export default Footer;