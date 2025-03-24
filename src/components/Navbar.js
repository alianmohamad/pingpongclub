/* 
  This component creates the navigation bar for the PingPong Club website.
  It includes the club logo, search functionality, and navigation links.
  The search feature allows users to find content throughout the site.
  The navbar is responsive and collapses into a hamburger menu on mobile.
*/
import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  
  // Data for search functionality
  const siteContent = [
    { 
      title: "About Our Club", 
      section: "about", 
      keywords: ["about", "club", "information", "history"],
      content: "Rapid PingPong Club is the ultimate destination for table tennis enthusiasts of all skill levels. Whether you're a seasoned pro or just starting, our club fosters a competitive yet friendly environment where passion for the game meets excellence. Join us to train, compete, and experience the thrill of fast-paced matches in a community dedicated to the love of ping pong."
    },
    { 
      title: "Membership Options", 
      section: "membership", 
      keywords: ["join", "membership", "sign up", "register", "application"],
      content: "Become a part of Rapid PingPong Club and enjoy exclusive access to training sessions, tournaments, and special events. Fill out the form below to sign up. We offer Basic, Premium, and Student membership plans to suit your needs."
    },
    { 
      title: "Upcoming Matches", 
      section: "matches", 
      keywords: ["match", "game", "tournament", "schedule", "competition"],
      content: "Check out our upcoming matches featuring players like Alice, Bob, Charlie, David, Emma, Frank, Grace, Harry, Ivy, and Jack. Matches are held in locations across Australia including Sydney, Melbourne, Brisbane, Perth, and Canberra."
    },
    { 
      title: "Watch Club Videos", 
      section: "video", 
      keywords: ["video", "watch", "clips", "footage", "youtube"],
      content: "Experience the energy and excitement of Rapid PingPong Club in action. Watch our latest matches, training sessions, and club highlights through our video gallery."
    },
    { 
      title: "Club Location", 
      section: "external-widget", 
      keywords: ["location", "address", "find us", "map", "directions"],
      content: "Find us at the heart of the city. Our club's location is easily accessible by public transport, and there's ample parking for those driving in. We're located in Melbourne with convenient access from all major routes."
    }
  ];

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    if (searchTerm.trim() === "") {
      setShowResults(false);
      return;
    }
    
    // Search through site content
    const results = siteContent.filter(item => {
      const lowerSearchTerm = searchTerm.toLowerCase();
      return (
        item.title.toLowerCase().includes(lowerSearchTerm) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(lowerSearchTerm)) ||
        item.content.toLowerCase().includes(lowerSearchTerm)
      );
    });
    
    setSearchResults(results);
    setShowResults(true);
  };

  // Handle clicking a search result
  const handleResultClick = (section) => {
    setShowResults(false);
    setSearchTerm("");
    
    // Scroll to the section
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  // Close search results when clicking elsewhere
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.search-container') && !e.target.closest('.search-results')) {
        setShowResults(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Handle menu collapse
  useEffect(() => {
    // Close the navbar when a nav-link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    
    if (navbarCollapse && window.bootstrap) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: false });
      
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (navbarCollapse.classList.contains('show')) {
            bsCollapse.hide();
          }
        });
      });
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <img src={logo} alt="Club Logo" className="navbar-logo" />
        <div className="search-container position-relative">
          <form className="d-flex me-3" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-light rounded-pill search-btn" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
          
          {showResults && (
            <div className="search-results">
              {searchResults.length > 0 ? (
                <>
                  <h6 className="search-results-title">Search Results:</h6>
                  <ul className="list-unstyled">
                    {searchResults.map((result, index) => (
                      <li key={index}>
                        <button 
                          className="btn btn-link search-result-item" 
                          onClick={() => handleResultClick(result.section)}
                        >
                          <div className="result-title">{result.title}</div>
                          <div className="result-preview">
                            {result.content.length > 80 ? 
                              `${result.content.substring(0, 80)}...` : 
                              result.content
                            }
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-center py-2">No results found for "{searchTerm}"</p>
              )}
            </div>
          )}
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#membership">
                Membership
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#matches">
                Matches
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#membership">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;