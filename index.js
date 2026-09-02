/**
 * CraveBite - Modern Fast Food & Restaurant Application
 * Author: Priyanshu Kumar Maurya
 */

(function () {
    'use strict';

    // =========================================================================
    // Food Catalog Data
    // =========================================================================
    const foodItems = [
        {
            id: 'b1',
            name: 'Classic Double Cheeseburger',
            category: 'burger',
            price: 8.99,
            rating: 4.9,
            badge: 'Bestseller',
            badgeType: 'spicy',
            desc: 'Dual grilled beef patties, melted cheddar, pickles, and signature house sauce on a toasted brioche bun.',
            img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'b2',
            name: 'Smoked BBQ Bacon Burger',
            category: 'burger',
            price: 10.50,
            rating: 4.8,
            badge: 'Chef Special',
            badgeType: 'spicy',
            desc: 'Smoked crisp bacon strips, caramelized onions, BBQ glaze, and pepper jack cheese.',
            img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'b3',
            name: 'Crispy Zinger Chicken Burger',
            category: 'burger',
            price: 9.25,
            rating: 4.9,
            badge: 'Popular',
            badgeType: 'spicy',
            desc: 'Golden fried extra crispy chicken thigh fillet with fresh lettuce and spicy garlic mayo.',
            img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'b4',
            name: 'Truffle Mushroom Swiss Burger',
            category: 'burger',
            price: 11.99,
            rating: 4.7,
            badge: 'Gourmet',
            badgeType: 'veg',
            desc: 'Sautéed forest mushrooms, Swiss cheese, and aromatic black truffle aioli sauce.',
            img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'p1',
            name: 'Wood-Fired Margherita Pizza',
            category: 'pizza',
            price: 12.50,
            rating: 4.8,
            badge: '100% Veg',
            badgeType: 'veg',
            desc: 'Authentic San Marzano tomato sauce, fresh buffalo mozzarella, and aromatic basil leaves.',
            img: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'p2',
            name: 'Supreme Pepperoni Blast Pizza',
            category: 'pizza',
            price: 14.99,
            rating: 4.9,
            badge: 'Top Pick',
            badgeType: 'spicy',
            desc: 'Loaded with double layers of crispy cured pepperoni slices and stringy mozzarella.',
            img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'p3',
            name: 'BBQ Smoked Chicken Pizza',
            category: 'pizza',
            price: 13.80,
            rating: 4.7,
            badge: 'Chef Choice',
            badgeType: 'spicy',
            desc: 'Tender grilled chicken chunks, red bell peppers, sweet red onions, and smoky BBQ drizzle.',
            img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'a1',
            name: 'Peri Peri Crinkle Cut Fries',
            category: 'appetizer',
            price: 4.99,
            rating: 4.9,
            badge: 'Crunchy',
            badgeType: 'veg',
            desc: 'Crispy skin-on potato fries dusted with tangy African bird eye peri peri seasoning.',
            img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'a2',
            name: 'Crispy Buffalo Chicken Wings',
            category: 'appetizer',
            price: 8.50,
            rating: 4.8,
            badge: 'Spicy',
            badgeType: 'spicy',
            desc: '6 pcs juicy bone-in wings tossed in signature Louisiana hot glaze with ranch dip.',
            img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'd1',
            name: 'Oreo Fudge Monster Shake',
            category: 'drinks',
            price: 4.50,
            rating: 4.9,
            badge: 'Cold',
            badgeType: 'veg',
            desc: 'Rich vanilla ice cream blended with crushed Oreo cookies, chocolate syrup, and whipped cream.',
            img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'd2',
            name: 'Mango Passion Cooler Mocktail',
            category: 'drinks',
            price: 3.99,
            rating: 4.7,
            badge: 'Refreshing',
            badgeType: 'veg',
            desc: 'Fresh Alphonso mango pulp, crushed mint, passion fruit puree, and sparkling soda.',
            img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'ds1',
            name: 'Molten Nutella Lava Cake',
            category: 'dessert',
            price: 6.50,
            rating: 5.0,
            badge: 'Must Try',
            badgeType: 'veg',
            desc: 'Warm Belgian dark chocolate sponge with a warm oozing Nutella molten center.',
            img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80'
        }
    ];

    // =========================================================================
    // State & Storage
    // =========================================================================
    let cart = [];
    let activeCategory = 'all';
    let searchQuery = '';
    let appliedCoupon = null;

    // Load Cart from LocalStorage
    try {
        const savedCart = localStorage.getItem('cravebite_cart');
        if (savedCart) cart = JSON.parse(savedCart);
    } catch (e) {
        cart = [];
    }

    // =========================================================================
    // DOM Elements
    // =========================================================================
    const foodGrid = document.getElementById('food-grid');
    const categoryTabs = document.getElementById('category-tabs');
    const searchInput = document.getElementById('food-search-input');
    const cartBtn = document.getElementById('cart-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartCounter = document.getElementById('cart-counter');
    const cartItemsCount = document.getElementById('cart-items-count');
    const billSubtotal = document.getElementById('bill-subtotal');
    const billDiscount = document.getElementById('bill-discount');
    const discountRow = document.getElementById('discount-row');
    const billDelivery = document.getElementById('bill-delivery');
    const billTotal = document.getElementById('bill-total');
    const couponInput = document.getElementById('coupon-input');
    const applyCouponBtn = document.getElementById('apply-coupon-btn');
    const couponMsg = document.getElementById('coupon-msg');
    const checkoutBtn = document.getElementById('checkout-btn');
    const orderModal = document.getElementById('order-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalOrderSummary = document.getElementById('modal-order-summary');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const toast = document.getElementById('toast');
    const newsletterForm = document.getElementById('newsletter-form');

    // =========================================================================
    // Render Functions
    // =========================================================================

    function renderMenu() {
        const filtered = foodItems.filter(item => {
            const matchesCat = (activeCategory === 'all' || item.category === activeCategory);
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  item.desc.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            foodGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; color: var(--text-muted);">
                    <i class="fa-solid fa-cookie-bite" style="font-size: 3rem; margin-bottom: 12px; color: var(--secondary);"></i>
                    <h3>No yummy dishes found</h3>
                    <p>Try searching for something else or explore other categories!</p>
                </div>
            `;
            return;
        }

        foodGrid.innerHTML = filtered.map(item => `
            <div class="food-card" data-id="${item.id}">
                <div class="food-img-wrap">
                    <img src="${item.img}" alt="${escapeHtml(item.name)}" loading="lazy">
                    <span class="badge-${item.badgeType}">${escapeHtml(item.badge)}</span>
                </div>
                <div class="food-card-body">
                    <div class="food-card-header">
                        <h3 class="food-card-title">${escapeHtml(item.name)}</h3>
                        <div class="food-rating">
                            <i class="fa-solid fa-star"></i>
                            <span>${item.rating}</span>
                        </div>
                    </div>
                    <p class="food-desc">${escapeHtml(item.desc)}</p>
                    <div class="food-card-footer">
                        <span class="food-price">$${item.price.toFixed(2)}</span>
                        <button type="button" class="add-to-cart-btn" data-id="${item.id}" title="Add to Cart">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Attach Add to Cart Listeners
        foodGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const item = foodItems.find(f => f.id === id);
                if (item) addToCart(item);
            });
        });
    }

    function renderCart() {
        const totalItemsCount = cart.reduce((sum, item) => sum + item.qty, 0);
        cartCounter.textContent = totalItemsCount;
        cartItemsCount.textContent = totalItemsCount;

        if (cart.length === 0) {
            cartItemsList.innerHTML = `
                <div class="cart-empty-state">
                    <i class="fa-solid fa-utensils"></i>
                    <h4>Your cart is empty</h4>
                    <p>Browse our delicious menu and add your favorite dishes!</p>
                    <a href="#menu" class="btn btn-primary btn-sm" id="cart-browse-btn">Explore Menu</a>
                </div>
            `;
            const browseBtn = document.getElementById('cart-browse-btn');
            if (browseBtn) browseBtn.addEventListener('click', closeCart);

            billSubtotal.textContent = '$0.00';
            billDiscount.textContent = '-$0.00';
            discountRow.style.display = 'none';
            billDelivery.textContent = '$0.00';
            billTotal.textContent = '$0.00';
            return;
        }

        cartItemsList.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.img}" alt="${escapeHtml(item.name)}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title">${escapeHtml(item.name)}</div>
                    <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
                </div>
                <div class="cart-item-actions">
                    <button type="button" class="qty-btn minus-btn" data-index="${index}"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-num">${item.qty}</span>
                    <button type="button" class="qty-btn plus-btn" data-index="${index}"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        `).join('');

        // Quantity controls
        cartItemsList.querySelectorAll('.minus-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'), 10);
                updateQty(idx, -1);
            });
        });

        cartItemsList.querySelectorAll('.plus-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'), 10);
                updateQty(idx, 1);
            });
        });

        // Calculate Totals
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        let discount = 0;

        if (appliedCoupon === 'TASTY20') {
            discount = subtotal * 0.20;
            discountRow.style.display = 'flex';
            billDiscount.textContent = `-$${discount.toFixed(2)}`;
        } else {
            discountRow.style.display = 'none';
        }

        const delivery = subtotal > 30 ? 0.00 : 2.50;
        const finalTotal = Math.max(0, subtotal - discount + delivery);

        billSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        billDelivery.textContent = delivery === 0 ? 'FREE' : `$${delivery.toFixed(2)}`;
        billTotal.textContent = `$${finalTotal.toFixed(2)}`;
    }

    // =========================================================================
    // Cart Actions
    // =========================================================================

    function addToCart(item) {
        const existing = cart.find(c => c.id === item.id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...item, qty: 1 });
        }
        saveCart();
        renderCart();
        showToast(`${item.name} added to cart!`);

        // Bounce effect on cart icon
        cartBtn.style.transform = 'scale(1.25)';
        setTimeout(() => { cartBtn.style.transform = 'scale(1)'; }, 200);
    }

    function updateQty(index, change) {
        if (!cart[index]) return;
        cart[index].qty += change;

        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        saveCart();
        renderCart();
    }

    function saveCart() {
        try {
            localStorage.setItem('cravebite_cart', JSON.stringify(cart));
        } catch (e) {}
    }

    function openCart() {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = 'auto';
    }

    // =========================================================================
    // Feedback & UI
    // =========================================================================

    function showToast(text, isError = false) {
        toast.querySelector('.toast-text').textContent = text;
        const icon = toast.querySelector('.toast-icon');
        if (isError) {
            icon.className = 'fa-solid fa-circle-exclamation toast-icon';
            icon.style.color = '#ff4757';
        } else {
            icon.className = 'fa-solid fa-circle-check toast-icon';
            icon.style.color = '#2ed573';
        }
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // =========================================================================
    // Event Listeners
    // =========================================================================

    // Category Tabs Filter
    if (categoryTabs) {
        categoryTabs.addEventListener('click', (e) => {
            const btn = e.target.closest('.cat-tab');
            if (!btn) return;

            categoryTabs.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-category');
            renderMenu();
        });
    }

    // Live Search
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderMenu();
        });
    }

    // Deals Button click
    document.querySelectorAll('.add-deal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const name = btn.getAttribute('data-name');
            const price = parseFloat(btn.getAttribute('data-price'));
            const img = btn.getAttribute('data-img');

            addToCart({ id, name, price, img });
        });
    });

    // Cart Drawer Open/Close
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Apply Coupon Code
    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', () => {
            const code = couponInput.value.trim().toUpperCase();
            if (code === 'TASTY20') {
                appliedCoupon = 'TASTY20';
                couponMsg.textContent = '🎉 Coupon TASTY20 applied: 20% OFF!';
                couponMsg.style.color = '#2ed573';
                renderCart();
                showToast('20% Discount applied!');
            } else if (code === '') {
                couponMsg.textContent = 'Please enter a promo code';
                couponMsg.style.color = '#ffa502';
            } else {
                couponMsg.textContent = '❌ Invalid coupon code';
                couponMsg.style.color = '#ff4757';
            }
        });
    }

    // Checkout Flow
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast('Your cart is empty!', true);
                return;
            }

            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            const discount = appliedCoupon === 'TASTY20' ? subtotal * 0.20 : 0;
            const delivery = subtotal > 30 ? 0.00 : 2.50;
            const total = (subtotal - discount + delivery).toFixed(2);
            const orderId = '#CB-' + Math.floor(100000 + Math.random() * 900000);

            modalOrderSummary.innerHTML = `
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                    <span>Order ID:</span> <strong>${orderId}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                    <span>Items Ordered:</span> <strong>${cart.length} unique dishes</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span>Amount Paid:</span> <strong style="color: var(--secondary); font-size: 1.1rem;">$${total}</strong>
                </div>
            `;

            closeCart();
            orderModal.classList.add('open');

            // Clear Cart
            cart = [];
            appliedCoupon = null;
            if (couponInput) couponInput.value = '';
            if (couponMsg) couponMsg.textContent = '';
            saveCart();
            renderCart();
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            orderModal.classList.remove('open');
        });
    }

    // Mobile Navbar Menu Toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }

    // Close mobile nav on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
        });
    });

    // Newsletter Form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            showToast(`Welcome! VIP 15% promo code sent to ${emailInput.value}`);
            newsletterForm.reset();
        });
    }

    // Highlight Active Nav Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    });

    // Initialize App
    renderMenu();
    renderCart();

})();
