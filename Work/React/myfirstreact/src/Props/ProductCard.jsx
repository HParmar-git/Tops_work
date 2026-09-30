import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ productName, price }) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '250px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff',
      margin: '10px'
    }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{productName}</h3>
      <p style={{ margin: '0', color: '#007bff', fontWeight: 'bold' }}>
        ₹{price.toFixed(2) }
      </p>
    </div>
  );
}

// Task 4: Prop Type Validation
ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
