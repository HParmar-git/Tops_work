import React, { useState } from 'react';

export default function ZomatoRatingSelector() {
  // 1. Core State Hooks
  const [rating, setRating] = useState(0);       // Stores the locked selected rating
  const [hoverRating, setHoverRating] = useState(0); // Stores transient hover position state

  // Zomato color theme configs based on rating depth score
  const getRatingLabel = (score) => {
    switch (score) {
      case 1: return { text: "Horrible 😞", color: "#e91e63" };
      case 2: return { text: "Bad 😐", color: "#ff9800" };
      case 3: return { text: "Average 🥗", color: "#ffc107" };
      case 4: return { text: "Good 😋", color: "#4caf50" };
      case 5: return { text: "Excellent! 👑", color: "#1b5e20" };
      default: return { text: "Tap a star to rate your dining experience", color: "#828282" };
    }
  };

  // Determine active rating level to render highlight colors (prioritizes hover)
  const activeDisplayRating = hoverRating || rating;
  const currentLabel = getRatingLabel(rating);

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      backgroundColor: '#fff',
      padding: '24px',
      borderRadius: '16px',
      maxWidth: '380px',
      boxShadow: '0 8px 24px rgba(28, 28, 28, 0.1)',
      border: '1px solid #f4f4f4',
      textAlign: 'center',
      margin: '40px auto'
    }}>
      {/* Brand Header */}
      <h3 style={{ margin: '0 0 6px 0', fontSize: '18px', fontWeight: '600', color: '#1c1c1c' }}>
        How was your food?
      </h3>
      <p style={{ margin: '0 0 20px 0', fontSize: '13px', color: '#696969' }}>
        The Pizza Artisan • Satellite, Ahmedabad
      </p>

      {/* 5-Star Row Layout Matrix Container */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '12px', 
          marginBottom: '20px' 
        }}
        onMouseLeave={() => setHoverRating(0)} // Reset hover index overlay on mouse out
      >
        {[1, 2, 3, 4, 5].map((starValue) => {
          // Highlight logic: condition evaluates true for all indices up to selection
          const isHighlighted = starValue <= activeDisplayRating;

          return (
            <button
              key={starValue}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHoverRating(starValue)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '36px',
                padding: '0',
                outline: 'none',
                // Smooth color transitions replicating Zomato's web ecosystem
                transition: 'transform 0.1s ease, color 0.1s ease',
                color: isHighlighted ? '#E23744' : '#E0E0E0', // Zomato signature red highlight color
                transform: starValue === hoverRating ? 'scale(1.2)' : 'scale(1)'
              }}
            >
              ★
            </button>
          );
        })}
      </div>

      {/* Dynamic Feedback Text Label Block */}
      <div style={{ 
        minHeight: '24px', 
        fontSize: '14px', 
        fontWeight: '500', 
        color: currentLabel.color,
        transition: 'color 0.2s ease'
      }}>
        {currentLabel.text}
      </div>

      {/* Optional Submit Module Trigger Row */}
      {rating > 0 && (
        <button style={{
          marginTop: '20px',
          width: '100%',
          backgroundColor: '#E23744', // Zomato brand primary palette color
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '12px',
          fontSize: '15px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(226, 55, 68, 0.2)',
          animation: 'fadeIn 0.3s ease'
        }}>
          Submit Review
        </button>
      )}
    </div>
  );
}
