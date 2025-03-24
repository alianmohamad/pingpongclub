/* 
  This component displays a video section on the website.
  It embeds a YouTube video showing the club in action.
  Visitors can watch matches and training sessions to get a feel for the club.
  The responsive design ensures the video looks good on all screen sizes.
*/
import React from "react";
import "../styles/video.css";
import SectionTitle from "./SectionTitle";

const Video = () => {
  return (
    <section id="video" className="container bento-section text-center">
      <SectionTitle 
        title="Watch Our Club in Action" 
        icon="fas fa-play-circle" 
      />
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