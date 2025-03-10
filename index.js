/**
 * Food Delivery Website JavaScript
 * 
 * This file contains all the JavaScript functionality for a food delivery website
 * including cart management, food item display, popular items carousel, and modals.
 */

// ===== DATA MODELS =====
/**
 * Food items data for the website
 */
const foodItems = [
    {
        image: "images/image1.jpg",
        name: "Home made pizza",
        price: "₹190",
        rating: "4.7",
        deliveryTime: "50-79 min",
        discount: "50%"
    },
    {
        image: "images/unsplash_33GPuoFI7v8.png",
        name: "Home made pizza",
        price: "₹123",
        rating: "4.7",
        deliveryTime: "50-79 min",
        discount: ""
    },
    {
        image: "images/unsplash_60nzTP7_hMQ.png",
        name: "Home made pizza",
        price: "₹190",
        rating: "4.7",
        deliveryTime: "50-79 min",
        discount: "20%"
    },
    {
        image: "images/unsplash_CbNAuxSZTFo.png",
        name: "Home made pizza",
        price: "₹190",
        rating: "4.7",
        deliveryTime: "50-79 min",
        discount: ""
    },
    {
        image: "images/unsplash_MqT0asuoIcU.png",
        name: "Home made pizza",
        price: "$19",
        rating: "4.7",
        deliveryTime: "50-79 min",
        discount: "50%"
    },
    {
        image: "images/unsplash_nP11TkjxJ7s.png",
        name: "Home made pizza",
        price: "₹190",
        rating: "4.7",
        deliveryTime: "50-79 min",
        discount: ""
    },
    {
        image: "images/unsplash_sejqj6Eaqe8.png",
        name: "Home made pizza",
        price: "₹190",
        rating: "4.7",
        deliveryTime: "50-79 min",
        discount: "20%"
    },
    {
        image: "images/unsplash_UxRhrU8fPHQ.png",
        name: "Home made pizza",
        price: "₹190",
        rating: "4.7",
        deliveryTime: "50-79 min",
        discount: "50%"
    },
    {
        image: "images/unsplash_Y6OgisiGBjM.png",
        name: "Home made pizza",
        price: "$19",
        rating: "4.7",
        deliveryTime: "50-79 min",
        discount: "50%"
    },
    {
        image: "images/unsplash_CbNAuxSZTFo.png", 
        name: "Home made pizza",
        price: "₹190",
        rating: "4.7",
        deliveryTime: "50-79 min",
        discount: ""
    },
    {
        image: "images/unsplash_Y6OgisiGBjM.png",
        name: "Home made pizza",
        price: "₹190",
        rating: "4.7",
        deliveryTime: "50-79 min",
        discount: "20%"
    },
    {
        image: "images/unsplash_UxRhrU8fPHQ.png",
        name: "Home made pizza",
        price: "₹190",
        rating: "4.7",
        deliveryTime: "50-79 min",
        discount: ""
    }
];

/**
 * Popular items data for the carousel
 */
const popularItems = [
    {
        name: "Home made pizza",
        image: "images/pexels-omar-mahmood-106343 1.png",
        price: 190,
        rating: 4.7,
        reviews: 30
    },
    {
        name: "Tandoori Chicken",
        image: "images/unsplash_33GPuoFI7v8.png",
        price: 134,
        rating: 4.8,
        reviews: 150
    },
    {
        name: "Chilli Chicken",
        image: "images/pexels-omar-mahmood-106343 1.png",
        price: 114,
        deliveryTime: "50-79 min"
    },
    {
        name: "Pasta Primavera",
        image: "images/unsplash_33GPuoFI7v8.png",
        price: 160,
        rating: 4.5,
        reviews: 78
    },
    {
        name: "Vegetable Curry",
        image: "images/pexels-omar-mahmood-106343 1.png",
        price: 145,
        deliveryTime: "30-45 min"
    },
    {
        name: "Chocolate Brownie",
        image: "unsplash_33GPuoFI7v8.png",
        price: 85,
        rating: 4.9,
        reviews: 200
    }
];

// ===== CART MODULE =====
/**
 * Cart functionality for the website
 */
const Cart = (function() {
    // Private variables
    let cartItems = [];
    let cartCount = 0;
    
    // DOM Elements
    let cartIcon;
    let cartModal;
    let backToMenuBtns;
    
    // Private methods
    function openCartModal() {
        cartModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    
    function closeCartModal() {
        cartModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    
    function setupEventListeners() {
        // Add click event to cart icon to open modal
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            openCartModal();
        });
        
        // Add click events to all "Back to Menu" buttons
        backToMenuBtns.forEach(btn => {
            btn.addEventListener('click', closeCartModal);
        });
        
        // Close modal if user clicks outside of modal content
        window.addEventListener('click', function(event) {
            if (event.target === cartModal) {
                closeCartModal();
            }
        });
        
        // Add escape key functionality to close modal
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && cartModal.style.display === 'block') {
                closeCartModal();
            }
        });
    }
    
    // Public methods
    function initialize() {
        cartIcon = document.getElementById('cartIcon');
        cartModal = document.getElementById('cartModal');
        backToMenuBtns = document.querySelectorAll('.back-to-menu-btn');
        
        setupEventListeners();
    }
    
    function addItem(item) {
        cartItems.push(item);
        cartCount++;
        updateCartDisplay();
    }
    
    function removeItem(index) {
        if (index >= 0 && index < cartItems.length) {
            cartItems.splice(index, 1);
            cartCount--;
            updateCartDisplay();
        }
    }
    
    function updateCartDisplay() {
        // Update cart icon count
        const cartCountElement = document.getElementById('cartCount');
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        }
        
        // Update cart modal content
        // Implementation would depend on the HTML structure
    }
    
    function getCartItems() {
        return [...cartItems]; // Return a copy to prevent direct modification
    }
    
    function getCartCount() {
        return cartCount;
    }
    
    // Public API
    return {
        initialize,
        addItem,
        removeItem,
        getCartItems,
        getCartCount,
        openModal: openCartModal,
        closeModal: closeCartModal
    };
})();

// ===== FOOD GRID MODULE =====
/**
 * Food Grid functionality for displaying food items
 */
const FoodGrid = (function() {
    // Private methods
    function createFoodItem(item) {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';

        // Create the discount tag if present
        const discountTag = item.discount ? `<div class="discount-tag">${item.discount}</div>` : '';

        foodItem.innerHTML = `
            <div class="food-image">
                ${discountTag}
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="food-info">
                <div class="food-name-price">
                    <h3>${item.name}</h3>
                    <span class="price">${item.price}</span>
                </div>
                <div class="food-rating">
                    <span class="stars">★ ${item.rating}</span>
                    <span class="delivery-time">${item.deliveryTime}</span>
                    <button class="add-to-cart">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3.33337V12.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.33331 8H12.6666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        
        // Add event listener to add-to-cart button
        const addToCartBtn = foodItem.querySelector('.add-to-cart');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => {
                Cart.addItem(item);
            });
        }

        return foodItem;
    }
    
    // Public methods
    function populate(items, containerId = 'foodGrid') {
        const foodGrid = document.getElementById(containerId);
        if (!foodGrid) return;
        
        // Clear existing items
        foodGrid.innerHTML = '';
        
        // Add new items
        items.forEach(item => {
            const foodItemElement = createFoodItem(item);
            foodGrid.appendChild(foodItemElement);
        });
    }
    
    // Public API
    return {
        populate
    };
})();

// ===== POPULAR ITEMS CAROUSEL MODULE =====
/**
 * Popular Items Carousel functionality
 */
const PopularItemsCarousel = (function() {
    // Private variables
    let sliderWrapper;
    let prevArrow;
    let nextArrow;
    let currentPosition = 0;
    let maxPosition;
    let itemWidth;
    let visibleItems;
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    
    // Private methods
    function createFoodItemCard(item) {
        // Create slider item
        const sliderItem = document.createElement('div');
        sliderItem.className = 'slider-item';
        
        // Create food item
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';
        
        // Create food image
        const foodImage = document.createElement('div');
        foodImage.className = 'food-image';
        
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        
        foodImage.appendChild(img);
        foodItem.appendChild(foodImage);
        
        // Create food info
        const foodInfo = document.createElement('div');
        foodInfo.className = 'food-info';
        
        // Create food name and price
        const foodNamePrice = document.createElement('div');
        foodNamePrice.className = 'food-name-price';
        
        const foodName = document.createElement('h3');
        foodName.textContent = item.name;
        
        const price = document.createElement('span');
        price.className = 'price';
        price.textContent = `₹${item.price}`;
        
        foodNamePrice.appendChild(foodName);
        foodNamePrice.appendChild(price);
        foodInfo.appendChild(foodNamePrice);
        
        // Create food rating section
        const foodRating = document.createElement('div');
        foodRating.className = 'food-rating';
        
        // Add either rating or delivery time
        if (item.rating) {
            // Create rating element with stars
            const rating = document.createElement('div');
            rating.className = 'rating';
            
            const stars = document.createElement('span');
            stars.className = 'stars';
            stars.textContent = `★ ${item.rating}`;
            
            const reviews = document.createElement('span');
            reviews.className = 'reviews';
            reviews.textContent = `(${item.reviews}+ reviews)`;
            
            rating.appendChild(stars);
            rating.appendChild(reviews);
            foodRating.appendChild(rating);
        } else if (item.deliveryTime) {
            // Create delivery time element
            const timeButton = document.createElement('div');
            timeButton.className = 'time-button';
            
            const shadowLeft = document.createElement('div');
            shadowLeft.className = 'shadow-left';
            
            const shadowRight = document.createElement('div');
            shadowRight.className = 'shadow-right';
            
            timeButton.appendChild(shadowLeft);
            timeButton.appendChild(shadowRight);
            timeButton.appendChild(document.createTextNode(item.deliveryTime));
            
            foodRating.appendChild(timeButton);
        }
        
        // Create action buttons
        const actionButtons = document.createElement('div');
        actionButtons.className = 'action-buttons';
        
        // Create save button
        const saveBtn = document.createElement('button');
        saveBtn.className = 'save-btn';
        
        const saveImg = document.createElement('img');
        saveImg.src = 'images/save.svg';
        saveImg.alt = 'Save';
        
        saveBtn.appendChild(saveImg);
        actionButtons.appendChild(saveBtn);
        
        // Create add to cart button
        const addToCartBtn = document.createElement('button');
        addToCartBtn.className = 'add-to-cart';
        
        // Create SVG plus icon
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('viewBox', '0 0 16 16');
        svg.setAttribute('fill', 'none');
        
        const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path1.setAttribute('d', 'M8 3.33337V12.6667');
        path1.setAttribute('stroke', 'white');
        path1.setAttribute('stroke-width', '2');
        path1.setAttribute('stroke-linecap', 'round');
        path1.setAttribute('stroke-linejoin', 'round');
        
        const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path2.setAttribute('d', 'M3.33331 8H12.6666');
        path2.setAttribute('stroke', 'white');
        path2.setAttribute('stroke-width', '2');
        path2.setAttribute('stroke-linecap', 'round');
        path2.setAttribute('stroke-linejoin', 'round');
        
        svg.appendChild(path1);
        svg.appendChild(path2);
        addToCartBtn.appendChild(svg);
        
        // Add event listener to add-to-cart button
        addToCartBtn.addEventListener('click', () => {
            Cart.addItem(item);
        });
        
        actionButtons.appendChild(addToCartBtn);
        foodRating.appendChild(actionButtons);
        
        foodInfo.appendChild(foodRating);
        foodItem.appendChild(foodInfo);
        sliderItem.appendChild(foodItem);
        
        return sliderItem;
    }
    
    function createPopularItemsSection(items, containerId) {
        // Create section element
        const section = document.createElement('section');
        section.className = 'popular-items';

        // Create container
        const container = document.createElement('div');
        container.className = 'container';

        // Add heading
        const heading = document.createElement('h2');
        heading.textContent = 'Popular Items';
        container.appendChild(heading);

        // Create slider
        const popularSlider = document.createElement('div');
        popularSlider.className = 'popular-slider';

        // Create previous arrow button
        prevArrow = document.createElement('button');
        prevArrow.className = 'slider-arrow prev-arrow';
        prevArrow.id = 'prevArrow';
        
        const prevImg = document.createElement('img');
        prevImg.src = 'images/arrow-left.svg';
        prevImg.alt = 'Previous';
        
        prevArrow.appendChild(prevImg);
        popularSlider.appendChild(prevArrow);

        // Create slider wrapper
        sliderWrapper = document.createElement('div');
        sliderWrapper.className = 'slider-wrapper';
        sliderWrapper.id = 'sliderWrapper';

        // Add food items to slider
        items.forEach(item => {
            const sliderItem = createFoodItemCard(item);
            sliderWrapper.appendChild(sliderItem);
        });

        popularSlider.appendChild(sliderWrapper);

        // Create next arrow button
        nextArrow = document.createElement('button');
        nextArrow.className = 'slider-arrow next-arrow';
        nextArrow.id = 'nextArrow';
        
        const nextImg = document.createElement('img');
        nextImg.src = 'images/arrow-right.svg';
        nextImg.alt = 'Next';
        
        nextArrow.appendChild(nextImg);
        popularSlider.appendChild(nextArrow);

        container.appendChild(popularSlider);

        // Add request dish button
        const requestDishWrapper = document.createElement('div');
        requestDishWrapper.className = 'request-dish-wrapper';
        
        const requestDishBtn = document.createElement('button');
        requestDishBtn.className = 'request-dish-btn';
        requestDishBtn.id = 'requestDishBtn';
        requestDishBtn.textContent = 'Request a dish';
        
        // Add event listener to request dish button
        requestDishBtn.addEventListener('click', () => {
            RequestDishModal.open();
        });
        
        requestDishWrapper.appendChild(requestDishBtn);
        container.appendChild(requestDishWrapper);

        section.appendChild(container);
        
        // Append to container
        const mainContainer = document.getElementById(containerId) || document.body;
        mainContainer.appendChild(section);
        
        return section;
    }
    
    function updateSliderPosition() {
        sliderWrapper.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
        sliderWrapper.style.transition = 'transform 0.3s ease';
        
        // Disable/enable arrows based on position
        prevArrow.disabled = currentPosition === 0;
        nextArrow.disabled = currentPosition >= maxPosition;
    }
    
    function setupSliderEventListeners() {
        // Event listener for previous arrow
        prevArrow.addEventListener('click', () => {
            if (currentPosition > 0) {
                currentPosition--;
                updateSliderPosition();
            }
        });
        
        // Event listener for next arrow
        nextArrow.addEventListener('click', () => {
            if (currentPosition < maxPosition) {
                currentPosition++;
                updateSliderPosition();
            }
        });
        
        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                if (currentPosition > 0) {
                    currentPosition--;
                    updateSliderPosition();
                }
            } else if (e.key === 'ArrowRight') {
                if (currentPosition < maxPosition) {
                    currentPosition++;
                    updateSliderPosition();
                }
            }
        });
        
        // Add touch/drag functionality
        sliderWrapper.addEventListener('mousedown', dragStart);
        sliderWrapper.addEventListener('touchstart', dragStart);
        sliderWrapper.addEventListener('mouseup', dragEnd);
        sliderWrapper.addEventListener('touchend', dragEnd);
        sliderWrapper.addEventListener('mouseleave', dragEnd);
        sliderWrapper.addEventListener('mousemove', drag);
        sliderWrapper.addEventListener('touchmove', drag);
    }
    
    function dragStart(e) {
        isDragging = true;
        startPosition = getPositionX(e);
        currentTranslate = -currentPosition * itemWidth;
    }
    
    function drag(e) {
        if (!isDragging) return;
        const currentPosition = getPositionX(e);
        const diff = currentPosition - startPosition;
        sliderWrapper.style.transform = `translateX(${currentTranslate + diff}px)`;
        sliderWrapper.style.transition = 'none';
    }
    
    function dragEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        
        const movedBy = getPositionX(e) - startPosition;
        
        // Determine if we should change slide based on move distance
        if (movedBy < -100 && currentPosition < maxPosition) {
            currentPosition++;
        } else if (movedBy > 100 && currentPosition > 0) {
            currentPosition--;
        }
        
        updateSliderPosition();
    }
    
    function getPositionX(e) {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }
    
    // Public methods
    function initialize(items, containerId = 'main-content') {
        // Create the popular items section
        createPopularItemsSection(items, containerId);
        
        // Get slider elements
        sliderWrapper = document.getElementById('sliderWrapper');
        if (!sliderWrapper) return;
        
        const sliderItems = sliderWrapper.querySelectorAll('.slider-item');
        if (!sliderItems.length) return;
        
        // Calculate dimensions and positions
        itemWidth = sliderItems[0].offsetWidth;
        const containerWidth = sliderWrapper.offsetWidth;
        visibleItems = Math.floor(containerWidth / itemWidth);
        
        currentPosition = 0;
        maxPosition = sliderItems.length - visibleItems;
        
        // Setup event listeners
        setupSliderEventListeners();
        
        // Initialize arrows state
        updateSliderPosition();
    }
    
    // Public API
    return {
        initialize
    };
})();

// ===== REQUEST DISH MODAL MODULE =====
/**
 * Request Dish Modal functionality
 */
const RequestDishModal = (function() {
    // Private variables
    let modal;
    let isInitialized = false;
    
    // Private methods
    function createModal() {
        // Create modal container
        modal = document.createElement('div');
        modal.className = 'modal request-dish-modal';
        modal.id = 'requestDishModal';
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        // Create modal header
        const modalHeader = document.createElement('div');
        modalHeader.className = 'modal-header';
        
        const modalTitle = document.createElement('h2');
        modalTitle.textContent = 'Request a Dish';
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', close);
        
        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(closeBtn);
        
        // Create modal body
        const modalBody = document.createElement('div');
        modalBody.className = 'modal-body';
        
        // Create request form
        const form = document.createElement('form');
        form.id = 'requestDishForm';
        
        // Dish name input
        const dishNameGroup = document.createElement('div');
        dishNameGroup.className = 'form-group';
        
        const dishNameLabel = document.createElement('label');
        dishNameLabel.htmlFor = 'dishName';
        dishNameLabel.textContent = 'Dish Name:';
        
        const dishNameInput = document.createElement('input');
        dishNameInput.type = 'text';
        dishNameInput.id = 'dishName';
        dishNameInput.name = 'dishName';
        dishNameInput.required = true;
        
        dishNameGroup.appendChild(dishNameLabel);
        dishNameGroup.appendChild(dishNameInput);
        
        // Description input
        const descriptionGroup = document.createElement('div');
        descriptionGroup.className = 'form-group';
        
        const descriptionLabel = document.createElement('label');
        descriptionLabel.htmlFor = 'description';
        descriptionLabel.textContent = 'Description:';
        
        const descriptionTextarea = document.createElement('textarea');
        descriptionTextarea.id = 'description';
        descriptionTextarea.name = 'description';
        descriptionTextarea.rows = 4;
        
        descriptionGroup.appendChild(descriptionLabel);
        descriptionGroup.appendChild(descriptionTextarea);
        
        // Submit button
        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.className = 'submit-btn';
        submitBtn.textContent = 'Submit Request';
        
        // Add form elements
        form.appendChild(dishNameGroup);
        form.appendChild(descriptionGroup);
        form.appendChild(submitBtn);
        
        // Form submission handler
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission logic here
            console.log('Request submitted:', {
                dishName: dishNameInput.value,
                description: descriptionTextarea.value
            });
            close();
        });
        
        modalBody.appendChild(form);
        
        // Add all elements to modal
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modal.appendChild(modalContent);
        
        // Add modal to body
        document.body.appendChild(modal);
        
        // Add event listener to close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                close();
            }
        });
        
        isInitialized = true;
    }
    
    // Public methods
    function initialize() {
        if (!isInitialized) {
            createModal();
        }
    }
    
    function open() {
        if (!isInitialized) {
            initialize();
        }
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    function close() {
        if (isInitialized && modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    }
    
    // Public API
    return {
        initialize,
        open,
        close
    };
})();

// ===== INITIALIZATION =====
/**
 * Initialize all components when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart functionality
    Cart.initialize();
    
    // Populate food grid
    FoodGrid.populate(foodItems);
    
    // Initialize popular items carousel
    PopularItemsCarousel.initialize(popularItems);
    
    // Initialize request dish modal (lazy initialization)
    // RequestDishModal will be initialized when needed
});