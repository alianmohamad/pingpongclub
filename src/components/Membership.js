import React, { useState } from "react";
import "../styles/membership.css";

const Membership = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (formData.name && formData.email && formData.phone && formData.membershipType) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      
      // Reset the form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          membershipType: ""
        });
      }, 5000);
    }
  };

  return (
    <section id="membership" className="container bento-section">
      <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}>
        <i className="fas fa-user-plus"></i> Join Our Club
      </h2>
      <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
        Become a part of Rapid PingPong Club and enjoy exclusive access to training sessions, 
        tournaments, and special events. Fill out the form below to sign up.
      </p>
      
      {submitted ? (
        <div className="alert alert-success">
          <h4>Thank you for your application, {formData.name}!</h4>
          <p>We've received your membership request for the {formData.membershipType} plan.</p>
          <p>We'll contact you at {formData.email} or {formData.phone} shortly with next steps.</p>
          <div className="text-center mt-3">
            <i className="fas fa-check-circle fa-3x text-success"></i>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="membershipType" className="form-label">
              Membership Type
            </label>
            <select 
              className="form-select" 
              id="membershipType" 
              required
              value={formData.membershipType}
              onChange={handleChange}
            >
              <option value="">Select a membership type</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              <option value="Student">Student</option>
            </select>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ backgroundColor: "#FF9E1B", borderColor: "#FF9E1B" }}
          >
            Join Now
          </button>
        </form>
      )}
    </section>
  );
};

export default Membership;