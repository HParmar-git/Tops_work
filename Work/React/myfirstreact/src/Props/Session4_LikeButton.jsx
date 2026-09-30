import React, { useState } from 'react';

export default function LikeButton() {
  // 1. Initialize the count state at 0
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // 2. Click handler function to increment count
  const handleLikeClick = () => {
    setLikes(likes + 1);
    setIsLiked(true);
    
    // Smooth reset effect for the pop animation state
    setTimeout(() => setIsLiked(false), 200); 
    
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <button 
        onClick={handleLikeClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          border: '1px solid #dbdbdb',
          borderRadius: '20px',
          backgroundColor: '#fff',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          transition: 'all 0.2s ease',
          transform: isLiked ? 'scale(1.1)' : 'scale(1)',
          outline: 'none'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#htmlW'}
      >
        {/* Heart Icon (Changes color dynamically based on like state count) */}
        <span style={{ 
          color: likes > 0 ? '#ed4956' : '#262626',
          fontSize: '20px',
          transition: 'color 0.2s ease'
        }}>
          {likes > 0 ? '❤️' : '🤍'}
        </span>
        
        {/* Counter Display */}
        <span style={{ color: '#262626' }}>
          {likes} {likes === 1 ? 'Like' : 'Likes'}
        </span>
      </button>
    </div>
  );
}
