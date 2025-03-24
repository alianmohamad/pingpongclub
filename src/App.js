/* 
  This is the main App component that brings together all other components.
  It's the root component of our React application.
  We wrap key sections in ErrorBoundary components to prevent the entire app
  from crashing if one section encounters an error.
*/
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css"; // FontAwesome import
import "./styles/main.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Video from "./components/Video";
import Location from "./components/Location";
import Weather from "./components/Weather";
import Membership from "./components/Membership";
import Matches from "./components/Matches";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";




function App() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Video />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Location />
      </ErrorBoundary>

      <ErrorBoundary>
        <Weather />
      </ErrorBoundary>

      <ErrorBoundary>
        <Membership />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Matches />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;