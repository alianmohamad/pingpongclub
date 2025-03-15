import React from "react";
import "../styles/location.css";

const Location = () => {
  return (
    <section id="external-widget" className="container bento-section text-center">
      <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: "#012142" }}>
        <i className="fas fa-map-marker-alt" style={{ color: "#FF9E1B" }}></i> Our Location
      </h2>
      <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
        Find us at the heart of the city. Our club's location is easily accessible by public transport, 
        and there's ample parking for those driving in.
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.006765078519!2d144.9307956160204!3d-37.84093554468008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6688f399da813%3A0x64a7cf8b0e76aa0b!2sPort%20Melbourne!5e0!3m2!1sen!2sau!4v1618886235116!5m2!1sen!2sau!1m18!1m12!1m3!1d3153.488927555301!2d144.9557080160184!3d-37.8166364423219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce420!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1618886235116!5m2!1sen!2sau"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
        title="Club Location"
      ></iframe>
    </section>
  );
};

export default Location;