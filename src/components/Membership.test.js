import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Membership from './Membership';

// Mock the SectionTitle component to simplify testing
jest.mock('./SectionTitle', () => {
  return function DummySectionTitle(props) {
    return <h2>{props.title}</h2>;
  };
});

describe('Membership Component', () => {
  test('renders the membership form', () => {
    render(<Membership />);
    
    // Check for form elements
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Membership Type/i)).toBeInTheDocument();
    
    // Check for submit button
    expect(screen.getByRole('button', { name: /Join Now/i })).toBeInTheDocument();
  });

  test('allows entering form data', () => {
    render(<Membership />);
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: 'John Doe' }
    });
    
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'john@example.com' }
    });
    
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: '1234567890' }
    });
    
    fireEvent.change(screen.getByLabelText(/Membership Type/i), {
      target: { value: 'Basic' }
    });
    
    // Verify input values
    expect(screen.getByLabelText(/Full Name/i).value).toBe('John Doe');
    expect(screen.getByLabelText(/Email Address/i).value).toBe('john@example.com');
    expect(screen.getByLabelText(/Phone Number/i).value).toBe('1234567890');
    expect(screen.getByLabelText(/Membership Type/i).value).toBe('Basic');
  });

  test('displays success message after submitting the form', () => {
    render(<Membership />);
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: 'John Doe' }
    });
    
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'john@example.com' }
    });
    
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: '1234567890' }
    });
    
    fireEvent.change(screen.getByLabelText(/Membership Type/i), {
      target: { value: 'Basic' }
    });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Join Now/i }));
    
    // Check for success message
    expect(screen.getByText(/Thank you for your application/i)).toBeInTheDocument();
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Basic/i)).toBeInTheDocument();
  });
});