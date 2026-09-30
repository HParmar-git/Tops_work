import React, { useState } from 'react';

export default function CartItem() {
  // 1. Core State Management
  const [quantity, setQuantity] = useState(1);
  const itemName = "Wireless Ergonomic Gaming Mouse";
  const itemPrice = 1499; // Price in INR per item

  // 2. Handler functions
  const increaseQuantity = () => {
    setQuantity(prevQty => prevQty + 1);
  };

  const decreaseQuantity = () => {
    // Flipkart logic: Prevents lowering quantity below 1
    if (quantity > 1) {
      setQuantity(prevQty => prevQty - 1);
    }
  };

  return (
    <div style={{
      fontFamily: 'Roboto, Arial, sans-serif',
      backgroundColor: '#fff',
      padding: '24px',
      maxWidth: '450px',
      borderRadius: '4px',
      boxShadow: '0 2px 4px 0 rgba(0,0,0,.08)',
      border: '1px solid #f0f0f0',
      margin: '20px auto'
    }}>
      {/* Product Details Section */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#212121', margin: '0 0 8px 0' }}>
          {itemName}
        </h3>
        <p style={{ fontSize: '14px', color: '#878787', margin: '0 0 12px 0' }}>
          Seller: RetailNet
        </p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{ fontSize: '18px', fontWeight: '600', color: '#212121' }}>
            ₹{(itemPrice * quantity).toLocaleString('en-IN')}
          </span>
          <span style={{ fontSize: '12px', color: '#388e3c', fontWeight: '500' }}>
            Offers Applied
          </span>
        </div>
      </div>

      {/* Flipkart-Style Quantity Controller Box */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Decrement Button */}
        <button 
          onClick={decreaseQuantity}
          disabled={quantity <= 1} // Disables click actions when quantity is 1
          style={{
            width: '28px',
            height: '28px',
            background: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '50%',
            cursor: quantity <= 1 ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: quantity <= 1 ? '#c2c2c2' : '#212121',
            padding: '0',
            outline: 'none'
          }}
        >
          -
        </button>

        {/* Quantity Display Input */}
        <div style={{
          width: '46px',
          height: '28px',
          border: '1px solid #e0e0e0',
          borderRadius: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: '500',
          color: '#212121',
          backgroundColor: '#fff'
        }}>
          {quantity}
        </div>

        {/* Increment Button */}
        <button 
          onClick={increaseQuantity}
          style={{
            width: '28px',
            height: '28px',
            background: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#212121',
            padding: '0',
            outline: 'none'
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
