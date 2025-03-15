import React from "react";
import "../styles/video.css";

const Video = () => {
  return (
    <section id="video" className="container bento-section text-center">
      <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: "#012142" }}>
        <i className="fas fa-play-circle" style={{ color: "#FF9E1B" }}></i> Watch Our Club in Action
      </h2>
      <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
        Experience the energy and excitement of Rapid PingPong Club in action. 
        Watch our latest matches, training sessions, and club highlights.
      </p>
      <div className="ratio ratio-16x9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0bUCTpI4caU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Video;