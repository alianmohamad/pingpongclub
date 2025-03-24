/* 
  This is an error boundary component that catches JavaScript errors.
  It prevents the whole app from crashing when a component fails.
  It displays a user-friendly error message instead of a blank screen.
  This improves user experience when unexpected errors occur.
*/

import React, { Component } from 'react';
import '../styles/errorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  // This lifecycle method is called when a child component throws an error
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  // This lifecycle method is called after an error has been thrown by a child component
  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        <div className="error-boundary">
          <h2>Oops, something went wrong!</h2>
          <p>We're sorry, but there was an error loading this part of the page.</p>
          <button 
            className="error-retry-btn"
            onClick={() => this.setState({ hasError: false })}
          >
            Try Again
          </button>
        </div>
      );
    }

    // If there's no error, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;