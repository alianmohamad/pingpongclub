import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // FontAwesome import
import "./styles/main.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Video from "./components/Video";
import Location from "./components/Location";
import Membership from "./components/Membership";
import Matches from "./components/Matches";
import Footer from "./components/Footer";

// Import Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Video />
      <Location />
      <Membership />
      <Matches />
      <Footer />
    </>
  );
}

export default App;