import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SectionTitle from './SectionTitle';

describe('SectionTitle Component', () => {
  test('renders the title text correctly', () => {
    render(<SectionTitle title="Test Title" />);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders with an icon when provided', () => {
    render(<SectionTitle title="Title with Icon" icon="fas fa-star" />);
    
    const titleElement = screen.getByText('Title with Icon');
    expect(titleElement).toBeInTheDocument();
    
    // Check if the icon is present
    const iconElement = document.querySelector('.fas.fa-star');
    expect(iconElement).toBeInTheDocument();
  });

  test('applies custom color when provided', () => {
    const customColor = '#FF0000';
    render(<SectionTitle title="Colored Title" color={customColor} />);
    
    const titleElement = screen.getByText('Colored Title');
    expect(titleElement).toHaveStyle(`color: ${customColor}`);
  });
});