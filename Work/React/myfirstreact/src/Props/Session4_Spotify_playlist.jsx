import React, { useState } from 'react';

export default function SongVote() {
  // 1. Core state tracking the numeric score value
  const [votes, setVotes] = useState(0);
  
  // Track visual active button states for color highlights
  const [activeVote, setActiveVote] = useState(null); // 'up' or 'down'

  const songDetails = {
    title: "Starboy",
    artist: "The Weeknd, Daft Punk",
    album: "Starboy",
    duration: "3:50",
    coverUrl: "https://unsplash.com"
  };

  // 2. Click Handler Logic
  const handleUpvote = () => {
    if (activeVote === 'up') {
      // Undo upvote if clicked again
      setVotes(prev => prev - 1);
      setActiveVote(null);
    } else {
      // Add upvote (and account for removing a downvote if it was active)
      setVotes(prev => prev + (activeVote === 'down' ? 2 : 1));
      setActiveVote('up');
    }
  };

  const handleDownvote = () => {
    if (activeVote === 'down') {
      // Undo downvote if clicked again
      setVotes(prev => prev + 1);
      setActiveVote(null);
    } else {
      // Calculate next value safely
      const potentialVotes = votes - (activeVote === 'up' ? 2 : 1);
      
      // Hint Validation Rule: Enforce minimum floor threshold bound at 0
      if (potentialVotes >= 0) {
        setVotes(potentialVotes);
        setActiveVote('down');
      } else {
        setVotes(0);
        setActiveVote(null);
      }
    }
  };

  return (
    <div style={{
      fontFamily: '"Montserrat", "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#181818', // Spotify dark surface color
      color: '#fff',
      padding: '12px 24px',
      maxWidth: '600px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      margin: '20px auto'
    }}>
      
      {/* Left Pane: Song Info Metadata Layout */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img 
          src={songDetails.coverUrl} 
          alt="Album Cover" 
          style={{ width: '50px', height: '50px', borderRadius: '4px', objectFit: 'cover' }}
        />
        <div>
          <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '500', color: '#fff' }}>
            {songDetails.title}
          </h4>
          <p style={{ margin: '0', fontSize: '13px', color: '#b3b3b3' }}>
            {songDetails.artist}
          </p>
        </div>
      </div>

      {/* Right Pane: Voting Matrix Controller Grid */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ fontSize: '13px', color: '#b3b3b3', marginRight: '8px' }}>
          {songDetails.duration}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#282828', padding: '6px 12px', borderRadius: '20px' }}>
          {/* Upvote Button Link */}
          <button 
            onClick={handleUpvote}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '4px',
              color: activeVote === 'up' ? '#1db954' : '#b3b3b3', // Spotify green active state
              transition: 'color 0.2s ease',
              outline: 'none'
            }}
            title="Upvote track"
          >
            ▲
          </button>

          {/* Current Dynamic Counter Score Window */}
          <span style={{ 
            fontSize: '14px', 
            fontWeight: 'bold', 
            minWidth: '24px', 
            textAlign: 'center',
            color: votes > 0 ? '#1db954' : '#fff'
          }}>
            {votes}
          </span>

          {/* Downvote Button Link */}
          <button 
            onClick={handleDownvote}
            disabled={votes === 0 && activeVote !== 'down'} // Block operations if score floor is hit
            style={{
              background: 'none',
              border: 'none',
              cursor: (votes === 0 && activeVote !== 'down') ? 'not-allowed' : 'pointer',
              fontSize: '18px',
              padding: '4px',
              color: activeVote === 'down' ? '#e91429' : (votes === 0 ? '#404040' : '#b3b3b3'), 
              transition: 'color 0.2s ease',
              outline: 'none'
            }}
            title="Downvote track"
          >
            ▼
          </button>
        </div>
      </div>
      
    </div>
  );
}
