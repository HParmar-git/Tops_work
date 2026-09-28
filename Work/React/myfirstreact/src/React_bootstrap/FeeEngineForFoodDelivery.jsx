import React, { useState } from 'react';

// 1. Core calculation engine placed directly inside this file
const calculateDeliveryFee = (totalAmount, isVIP) => {
  if (isVIP) return 0;
  if (totalAmount > 500) return 0;
  if (totalAmount >= 200 && totalAmount <= 500) return 40;
  return 70;
};

export default function OrderSummary() {
  const [orderAmount, setOrderAmount] = useState(250);
  const [isVIP, setIsVIP] = useState(false);

  // Calculate the fee dynamically on each render pass
  const deliveryFee = calculateDeliveryFee(orderAmount, isVIP);
  const finalTotal = orderAmount + deliveryFee;

  return (
    <div className="p-4 bg-white rounded-xl">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Checkout Order Breakdown</h2>

      {/* Control Configuration Toggles */}
      <div className="space-y-4 mb-6 p-4 bg-gray-50 rounded-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Order Value (Rs):
          </label>
          <input
            type="number"
            value={orderAmount}
            onChange={(e) => setOrderAmount(Math.max(0, Number(e.target.value)))}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="vipStatus"
            checked={isVIP}
            onChange={(e) => setIsVIP(e.target.checked)}
            className="h-4 w-4 text-indigo-600 rounded"
          />
          <label htmlFor="vipStatus" className="ml-2 text-sm font-medium text-gray-900">
            Apply User Tier: <span className="text-amber-600 font-bold">VIP Status ⭐</span>
          </label>
        </div>
      </div>

      {/* Dynamic Summary Lines */}
      <div className="space-y-2 border-t pt-4 text-sm font-medium text-gray-600">
        <div className="flex justify-between">
          <span>Items Subtotal:</span>
          <span>Rs {orderAmount}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Delivery Charge:</span>
          <span className={deliveryFee === 0 ? "text-green-600 font-bold" : "text-gray-900"}>
            {deliveryFee === 0 ? "FREE" : `Rs ${deliveryFee}`}
          </span>
        </div>
        
        {/* Proactive threshold suggestion */}
        {!isVIP && deliveryFee > 0 && (
          <p className="text-xs text-indigo-600 italic">
            Tip: Add Rs {501 - orderAmount} more to unlock **Free Delivery**!
          </p>
        )}

        <div className="flex justify-between text-base font-bold text-gray-900 border-t pt-2 mt-2">
          <span>Total To Pay:</span>
          <span>Rs {finalTotal}</span>
        </div>
      </div>
    </div>
  );
}
