/* 
  This component shows information about the PingPong Club.
  It has text describing the club and a carousel of images.
  The carousel uses Bootstrap and shows photos of the club and its activities.
  This component helps potential members understand what the club is about.
*/

import React, { useEffect } from "react";
import "../styles/about.css";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { Carousel } from "bootstrap";
import SectionTitle from "./SectionTitle";

const About = () => {
  useEffect(() => {
    // Initialize all carousels when component mounts
    const carouselElement = document.getElementById("carouselExample");
    if (carouselElement) {
      new Carousel(carouselElement, {
        interval: 3000, // Auto-sliding every 3 seconds
        wrap: true // Allows the carousel to cycle continuously
      });
    }
  }, []);

  return (
    <section id="about" className="container bento-section d-flex flex-column flex-md-row align-items-center">
      <div className="about-text w-100 w-md-50 pe-md-3">
        <SectionTitle 
          title="About Our Club" 
          icon="fas fa-table-tennis-paddle-ball" 
        />
        <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
          Rapid PingPong Club is the ultimate destination for table tennis 
          enthusiasts of all skill levels. Whether you're a seasoned pro or 
          just starting, our club fosters a competitive yet friendly environment 
          where passion for the game meets excellence. Join us to train, compete, 
          and experience the thrill of fast-paced matches in a community dedicated 
          to the love of ping pong.
        </p>
      </div>
      <div id="carouselExample" className="carousel slide w-100 w-md-50" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img2} className="d-block w-100" alt="Club members playing table tennis" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Ping pong tournament in progress" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default About;