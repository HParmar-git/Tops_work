/**
 * BiteDash Interactive Food Delivery Menu App
 * Mini Capstone Project Logic
 * 
 * Features:
 * - Dynamic Dish Rendering (6+ Dishes Array with name, price, category, isVegetarian)
 * - Fetch API integration for live restaurant partner loading
 * - LocalStorage state persistence across refreshes
 * - Real-time Cart badge counter & Subtotal calculations using Array methods
 * - Tab Navigation between Browse Menu, View Cart, and Clear Cart sections
 */

// ==========================================================================
// 1. Initial State & Menu Items Array (6+ Dish Objects)
// ==========================================================================
const MENU_ITEMS = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    price: 13.99,
    category: "Main Course",
    isVegetarian: true,
    rating: 4.9,
    prepTime: "20 min",
    description: "Rich and creamy cottage cheese curry simmered in a spiced tomato & butter sauce.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Truffle Mushroom Burger",
    price: 15.49,
    category: "Main Course",
    isVegetarian: true,
    rating: 4.8,
    prepTime: "15 min",
    description: "Sautéed wild mushrooms, black truffle mayo, swiss cheese, & crispy lettuce on brioche.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Smoked BBQ Chicken Wings",
    price: 14.25,
    category: "Starters",
    isVegetarian: false,
    rating: 4.7,
    prepTime: "25 min",
    description: "Slow-roasted tender wings glazed with hickory smoked honey barbecue sauce.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Crispy Spring Rolls",
    price: 8.99,
    category: "Starters",
    isVegetarian: true,
    rating: 4.6,
    prepTime: "12 min",
    description: "Golden fried vegetable rolls served with sweet & sour chili dip.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Classic Pepperoni Pizza",
    price: 16.99,
    category: "Main Course",
    isVegetarian: false,
    rating: 4.9,
    prepTime: "22 min",
    description: "Artisanal sourdough crust topped with zesty tomato sauce, mozzarella & cured pepperoni.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Saffron Mango Lassi",
    price: 5.49,
    category: "Beverages",
    isVegetarian: true,
    rating: 4.9,
    prepTime: "5 min",
    description: "Refreshing probiotic yogurt drink blended with fresh Alphonso mango pulp & saffron.",
    image: "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Belgian Chocolate Molten Lava Cake",
    price: 7.99,
    category: "Desserts",
    isVegetarian: true,
    rating: 4.95,
    prepTime: "10 min",
    description: "Warm chocolate cake with a molten truffle center, served with vanilla bean gelato.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Iced Caramel Macchiato",
    price: 6.25,
    category: "Beverages",
    isVegetarian: true,
    rating: 4.75,
    prepTime: "5 min",
    description: "Freshly brewed espresso shots layered with cold milk, vanilla syrup & sweet caramel drizzle.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
  }
];

// App State
let appCart = [];
let liveRestaurants = [];
let currentCategoryFilter = 'All';
let isVegOnlyFilter = false;
let searchQuery = '';

// LocalStorage Storage Key
const LOCAL_STORAGE_KEY = 'bitedash_cart_items_v1';

// ==========================================================================
// 2. DOM Elements Selection
// ==========================================================================
const dishesGridEl = document.getElementById('dishes-grid');
const dishesCountLabelEl = document.getElementById('dishes-count-label');
const searchInputEl = document.getElementById('search-input');
const vegToggleEl = document.getElementById('veg-toggle');
const categoryFiltersEl = document.getElementById('category-filters');

const navCartCountEl = document.getElementById('nav-cart-count');
const cartListEl = document.getElementById('cart-list');
const emptyCartMsgEl = document.getElementById('empty-cart-msg');
const cartTotalQtyEl = document.getElementById('cart-total-qty');
const summarySubtotalEl = document.getElementById('summary-subtotal');
const summaryTaxEl = document.getElementById('summary-tax');
const summaryGrandTotalEl = document.getElementById('summary-grand-total');

const clearItemsCountEl = document.getElementById('clear-items-count');
const btnConfirmClearEl = document.getElementById('btn-confirm-clear');
const btnClearCartFastEl = document.getElementById('btn-clear-cart-fast');
const btnCheckoutEl = document.getElementById('btn-checkout');

const restaurantSelectEl = document.getElementById('restaurant-select');
const btnRefreshRestaurantsEl = document.getElementById('btn-refresh-restaurants');
const bannerBadgeEl = document.getElementById('banner-badge');
const bannerTitleEl = document.getElementById('banner-title');
const bannerSubEl = document.getElementById('banner-sub');
const metaRatingEl = document.getElementById('meta-rating');
const metaTimeEl = document.getElementById('meta-time');
const metaMinEl = document.getElementById('meta-min');

const orderModalEl = document.getElementById('order-modal');
const modalOrderDetailsEl = document.getElementById('modal-order-details');
const btnCloseModalEl = document.getElementById('btn-close-modal');

// ==========================================================================
// 3. Application Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTabNavigation();
  loadCartFromStorage();
  fetchLiveRestaurants();
  renderDishes();

  // Event Listeners for Filters
  searchInputEl.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderDishes();
  });

  vegToggleEl.addEventListener('change', (e) => {
    isVegOnlyFilter = e.target.checked;
    renderDishes();
  });

  categoryFiltersEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('cat-pill')) {
      document.querySelectorAll('.cat-pill').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      currentCategoryFilter = e.target.getAttribute('data-category');
      renderDishes();
    }
  });

  // Clear Cart Button Listeners
  btnConfirmClearEl.addEventListener('click', clearCart);
  btnClearCartFastEl.addEventListener('click', () => {
    switchTab('clear-cart-section');
  });

  // Checkout Listener
  btnCheckoutEl.addEventListener('click', handleCheckout);
  btnCloseModalEl.addEventListener('click', () => {
    orderModalEl.classList.add('hidden');
    clearCart();
    switchTab('browse-section');
  });

  // Fetch API Live Refresh Listener
  btnRefreshRestaurantsEl.addEventListener('click', () => {
    fetchLiveRestaurants(true);
  });

  restaurantSelectEl.addEventListener('change', (e) => {
    const selectedId = e.target.value;
    const selectedRest = liveRestaurants.find(r => r.id === selectedId);
    if (selectedRest) {
      updateBanner(selectedRest);
      showToast(`Selected restaurant: ${selectedRest.name}`, 'success');
    }
  });
});

// ==========================================================================
// 4. Tab Navigation Logic (Browse Menu, View Cart, Clear Cart)
// ==========================================================================
function initTabNavigation() {
  const tabButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.app-section');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      switchTab(targetId);
    });
  });
}

function switchTab(targetId) {
  const tabButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.app-section');

  tabButtons.forEach(b => {
    if (b.getAttribute('data-target') === targetId) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  sections.forEach(sec => {
    if (sec.id === targetId) {
      sec.classList.add('active');
    } else {
      sec.classList.remove('active');
    }
  });

  // Update clear count indicator if navigating to clear-cart-section
  if (targetId === 'clear-cart-section') {
    const totalItems = appCart.reduce((sum, item) => sum + item.quantity, 0);
    clearItemsCountEl.textContent = `Current Items in Cart: ${totalItems} item(s) (${appCart.length} dish types)`;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================================================
// 5. Fetch API - Async/Await Live Restaurant Loading
// ==========================================================================
async function fetchLiveRestaurants(isManualRefresh = false) {
  bannerBadgeEl.textContent = "Fetching Live API...";
  try {
    // Fetch live json file via HTTP Fetch API
    const response = await fetch('data/restaurants.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    liveRestaurants = data;

    populateRestaurantSelect(liveRestaurants);
    if (liveRestaurants.length > 0) {
      updateBanner(liveRestaurants[0]);
    }

    if (isManualRefresh) {
      showToast("Restaurant listings reloaded live via Fetch API!", "success");
    }
  } catch (err) {
    console.warn("Fetch API fallback triggered:", err);
    // Fallback Mock Data if served directly via file:// protocol
    liveRestaurants = [
      {
        id: "rest-1",
        name: "Spice Bistro & Grill",
        cuisine: "Indian & Fusion",
        rating: 4.9,
        deliveryTime: "20-30 min",
        minOrder: "$15.00",
        badge: "Top Rated"
      },
      {
        id: "rest-2",
        name: "Bella Italia Trattoria",
        cuisine: "Italian & Pasta",
        rating: 4.8,
        deliveryTime: "25-35 min",
        minOrder: "$20.00",
        badge: "Chef's Special"
      }
    ];
    populateRestaurantSelect(liveRestaurants);
    updateBanner(liveRestaurants[0]);
  }
}

function populateRestaurantSelect(restaurants) {
  restaurantSelectEl.innerHTML = '';
  restaurants.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r.id;
    opt.textContent = `${r.name} (${r.cuisine})`;
    restaurantSelectEl.appendChild(opt);
  });
}

function updateBanner(restaurant) {
  bannerBadgeEl.textContent = restaurant.badge || "Live Partner";
  bannerTitleEl.textContent = restaurant.name;
  bannerSubEl.textContent = `${restaurant.cuisine} • Premium Delivery Available`;
  
  metaRatingEl.innerHTML = `
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    ${restaurant.rating} Rating
  `;
  metaTimeEl.innerHTML = `
    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    ${restaurant.deliveryTime}
  `;
  metaMinEl.innerHTML = `
    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    Min ${restaurant.minOrder}
  `;
}

// ==========================================================================
// 6. Menu Rendering & Filtering Logic (Array Methods: filter)
// ==========================================================================
function renderDishes() {
  dishesGridEl.innerHTML = '';

  const filteredDishes = MENU_ITEMS.filter(dish => {
    // Search Filter
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery) ||
                          dish.description.toLowerCase().includes(searchQuery) ||
                          dish.category.toLowerCase().includes(searchQuery);

    // Category Filter
    const matchesCategory = (currentCategoryFilter === 'All') || (dish.category === currentCategoryFilter);

    // Veg Only Filter
    const matchesVeg = !isVegOnlyFilter || (dish.isVegetarian === true);

    return matchesSearch && matchesCategory && matchesVeg;
  });

  dishesCountLabelEl.textContent = `Showing ${filteredDishes.length} of ${MENU_ITEMS.length} dishes`;

  if (filteredDishes.length === 0) {
    dishesGridEl.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 8px;">No dishes match your selected filters.</p>
        <button class="cat-pill active" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  filteredDishes.forEach(dish => {
    const card = document.createElement('div');
    card.className = 'dish-card';

    const vegClass = dish.isVegetarian ? 'veg' : 'nonveg';
    const vegText = dish.isVegetarian ? '● VEG' : '▲ NON-VEG';

    card.innerHTML = `
      <div class="dish-img-box">
        <img src="${dish.image}" alt="${dish.name}" class="dish-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'">
        <span class="dish-badge-veg ${vegClass}">${vegText}</span>
        <span class="dish-category-tag">${dish.category}</span>
      </div>
      <div class="dish-content">
        <div class="dish-header">
          <h3 class="dish-title">${dish.name}</h3>
          <span class="dish-rating">★ ${dish.rating}</span>
        </div>
        <p class="dish-desc">${dish.description}</p>
        <div class="dish-footer">
          <span class="dish-price">$${dish.price.toFixed(2)}</span>
          <button class="btn-add-cart" data-id="${dish.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    `;

    // Add event listener to 'Add to Cart' button
    const btnAdd = card.querySelector('.btn-add-cart');
    btnAdd.addEventListener('click', () => addToCart(dish, btnAdd));

    dishesGridEl.appendChild(card);
  });
}

window.resetFilters = function() {
  searchQuery = '';
  isVegOnlyFilter = false;
  currentCategoryFilter = 'All';
  searchInputEl.value = '';
  vegToggleEl.checked = false;
  document.querySelectorAll('.cat-pill').forEach(btn => btn.classList.remove('active'));
  document.querySelector('.cat-pill[data-category="All"]').classList.add('active');
  renderDishes();
};

// ==========================================================================
// 7. Cart Functionality & Array Operations (find, map, filter, reduce)
// ==========================================================================
function addToCart(dish, btnEl) {
  const existingItem = appCart.find(item => item.id === dish.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    appCart.push({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image,
      category: dish.category,
      isVegetarian: dish.isVegetarian,
      quantity: 1
    });
  }

  // Micro animation on button
  if (btnEl) {
    btnEl.classList.add('added');
    btnEl.innerHTML = `✓ Added`;
    setTimeout(() => {
      btnEl.classList.remove('added');
      btnEl.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Add to Cart
      `;
    }, 1200);
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`Added "${dish.name}" to cart!`, 'success');
}

function updateQuantity(dishId, delta) {
  const item = appCart.find(i => i.id === dishId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(dishId);
    return;
  }

  saveCartToStorage();
  updateCartUI();
}

function removeFromCart(dishId) {
  const itemIndex = appCart.findIndex(i => i.id === dishId);
  if (itemIndex > -1) {
    const removedName = appCart[itemIndex].name;
    appCart.splice(itemIndex, 1);
    saveCartToStorage();
    updateCartUI();
    showToast(`Removed "${removedName}" from cart`, 'danger');
  }
}

function clearCart() {
  appCart = [];
  saveCartToStorage();
  updateCartUI();
  showToast("Cart has been cleared!", "danger");
}

// ==========================================================================
// 8. LocalStorage Persistence Logic
// ==========================================================================
function saveCartToStorage() {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(appCart));
  } catch (e) {
    console.error("Failed to save cart to LocalStorage:", e);
  }
}

function loadCartFromStorage() {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      appCart = JSON.parse(stored);
    }
  } catch (e) {
    console.error("Failed to load cart from LocalStorage:", e);
    appCart = [];
  }
  updateCartUI();
}

// ==========================================================================
// 9. Render Cart UI & Summary Calculation (Array reduce)
// ==========================================================================
function updateCartUI() {
  // Real time calculate total quantity using Array.reduce
  const totalCount = appCart.reduce((sum, item) => sum + item.quantity, 0);
  navCartCountEl.textContent = totalCount;
  cartTotalQtyEl.textContent = totalCount;

  // Render items inside View Cart
  if (appCart.length === 0) {
    emptyCartMsgEl.classList.remove('hidden');
    cartListEl.innerHTML = '';
  } else {
    emptyCartMsgEl.classList.add('hidden');
    cartListEl.innerHTML = '';

    appCart.forEach(item => {
      const row = document.createElement('div');
      row.className = 'cart-item-row';
      const itemSubtotal = (item.price * item.quantity).toFixed(2);

      row.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-meta">$${item.price.toFixed(2)} each • ${item.category}</span>
        </div>
        <div class="cart-item-controls">
          <button class="btn-qty btn-minus" data-id="${item.id}">-</button>
          <span class="qty-val">${item.quantity}</span>
          <button class="btn-qty btn-plus" data-id="${item.id}">+</button>
        </div>
        <div class="cart-item-subtotal">$${itemSubtotal}</div>
        <button class="btn-remove-item" data-id="${item.id}" title="Remove Dish">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      `;

      row.querySelector('.btn-minus').addEventListener('click', () => updateQuantity(item.id, -1));
      row.querySelector('.btn-plus').addEventListener('click', () => updateQuantity(item.id, 1));
      row.querySelector('.btn-remove-item').addEventListener('click', () => removeFromCart(item.id));

      cartListEl.appendChild(row);
    });
  }

  // Calculate Order Totals using Array.reduce
  const subtotal = appCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 0 ? 2.99 : 0.00;
  const tax = subtotal * 0.08;
  const promoDiscount = subtotal > 0 ? 2.99 : 0.00; // Free delivery promo
  const grandTotal = Math.max(0, subtotal + tax + deliveryFee - promoDiscount);

  summarySubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  summaryTaxEl.textContent = `$${tax.toFixed(2)}`;
  summaryGrandTotalEl.textContent = `$${grandTotal.toFixed(2)}`;
}

// ==========================================================================
// 10. Checkout & Modal Logic
// ==========================================================================
function handleCheckout() {
  if (appCart.length === 0) {
    showToast("Your cart is empty! Add items before checkout.", "danger");
    return;
  }

  const subtotal = appCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const grandTotal = subtotal + tax;

  const restaurantName = restaurantSelectEl.options[restaurantSelectEl.selectedIndex]?.text || "BiteDash Partner";

  modalOrderDetailsEl.innerHTML = `
    <p style="margin-bottom: 8px;"><strong>Restaurant:</strong> ${restaurantName}</p>
    <p style="margin-bottom: 8px;"><strong>Total Items:</strong> ${appCart.reduce((s, i) => s + i.quantity, 0)}</p>
    <p style="margin-bottom: 8px;"><strong>Amount Paid:</strong> $${grandTotal.toFixed(2)}</p>
    <p style="font-size: 0.8rem; color: var(--text-muted);">Estimated Delivery: 25-35 mins to your current location.</p>
  `;

  orderModalEl.classList.remove('hidden');
}

// ==========================================================================
// 11. Toast Notifications Utility
// ==========================================================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = type === 'success' ? '✓' : '⚠️';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
