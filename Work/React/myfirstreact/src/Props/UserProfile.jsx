import React from 'react';

export default function UserProfile({ username, followers = 0, 
  profilePic = 'https://flaticon.com' }) {
  return (
    <div style={{
      border: '1px solid #dbdbdb',
      borderRadius: '12px',
      padding: '20px',
      maxWidth: '300px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      textAlign: 'center',
      backgroundColor: '#fff',
      margin: '10px'
    }}>
      {/* Profile Picture */}
      <img 
        src={profilePic} 
        alt={`${username}'s profile`} 
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid #e1306c',
          padding: '2px',
          marginBottom: '12px'
        }}
      />
      
      {/* Username */}
      <h4 style={{ margin: '0 0 4px 0', fontSize: '18px', color: '#262626' }}>
        @{username}
      </h4>
      
      {/* Followers Counter */}
      <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#8e8e8e' }}>
        <strong>{followers.toLocaleString()}</strong> followers
      </p>

      {/* Action Button */}
      <button style={{
        backgroundColor: '#0095f6',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        padding: '6px 16px',
        fontWeight: '600',
        fontSize: '14px',
        cursor: 'pointer',
        width: '100%'
      }}>
        Follow
      </button>
    </div>
  );
}

// Task 3: Default Props Configuration
UserProfile.defaultProps = {
  followers: 0,
  profilePic: 'https://flaticon.com' // Default user avatar placeholder
};
