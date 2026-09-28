import React, { useState } from 'react';

export default function RestaurantMenu() {
    // 1. Static Configuration: Stays completely constant throughout the session
    const restaurantDetails = {
        name: "The Pizza Artisan",
        cuisineType: "Gourmet Italian Pizza",
        minOrderValue: 15.00, // minimum order required in dollars
    };

    // 2. Dynamic State: Updates continuously as the user interacts with the app
    const [selectedDish, setSelectedDish] = useState(null);

    // Mock Menu Items Array
    const menuItems = [
        { id: 1, name: "Margherita Pizza", price: 12.99 },
        { id: 2, name: "Truffle Mushroom Pasta", price: 16.50 },
        { id: 3, name: "Garlic Parmesan Knots", price: 6.99 }
    ];

    return (
        <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
            {/* Constant Restaurant Header Header Section */}
            <div className="border-b pb-4 mb-6">
                <h1 className="text-2xl font-bold text-gray-900">{restaurantDetails.name}</h1>
                <p className="text-sm text-gray-500 font-medium mt-1">{restaurantDetails.cuisineType}</p>
                <div className="mt-2 inline-block bg-amber-50 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded">
                    Min. Order: \${restaurantDetails.minOrderValue.toFixed(2)}
                </div>
            </div>

            {/* Updatable Menu Selection List Section */}
            <div className="mb-6">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Browse Menu
                </h3>
                <div className="space-y-2">
                    {menuItems.map((dish) => (
                        <button
                            key={dish.id}
                            onClick={() => setSelectedDish(dish)} // Updates state on click
                            className={`w-full text-left p-3 rounded-lg border transition-all flex justify-between items-center ${selectedDish?.id === dish.id
                                    ? "border-indigo-600 bg-indigo-50/50 ring-1 ring-indigo-600"
                                    : "border-gray-200 hover:border-gray-300 bg-gray-50/30"
                                }`}
                        >
                            <span className="font-medium text-gray-800">{dish.name}</span>
                            <span className="text-gray-600 text-sm">\${dish.price.toFixed(2)}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Dynamic Order Validation Summary Block */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Current Selection
                </h4>
                {selectedDish ? (
                    <div className="mt-2 flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-gray-900">{selectedDish.name}</p>

                            {/* Dynamic validation logic against the constant value */}
                            {selectedDish.price < restaurantDetails.minOrderValue && (
                                <p className="text-xs text-red-500 mt-1 font-medium">
                                    Add \${(restaurantDetails.minOrderValue - selectedDish.price).toFixed(2)} more to reach minimum order.
                                </p>
                            )}
                        </div>
                        <span className="text-indigo-600 font-bold">\${selectedDish.price.toFixed(2)}</span>
                    </div>
                ) : (
                    <p className="text-sm text-gray-500 italic mt-2">No item selected yet. Select a dish above!</p>
                )}
            </div>
        </div>
    );
}
