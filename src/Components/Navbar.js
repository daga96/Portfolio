import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from 'react-scroll';
import "./Navbar.css";

export default function Navbar() {
  
  return (
    <div className="navbarMain">
      <div className="navbarLogo">
        <LinkScroll to="hero" smooth={true}> Dagmara</LinkScroll>
      </div>
      <div className="navbarLinks">
        <ul>
       
          <li className="link"> 
          <LinkScroll to="about" smooth={true} activeClass="active" > About Me </LinkScroll></li>
          <li className="link">
          <LinkScroll to="courses" smooth={true} >My courses </LinkScroll> </li>
          <li className="link"> Projects </li>
          <li className="link">Contact Me</li>
        </ul>
      </div>
    </div>
  );
}
