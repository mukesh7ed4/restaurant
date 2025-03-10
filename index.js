document.addEventListener('DOMContentLoaded', function() {
    // Get the cart icon and modal elements
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const backToMenuBtn = document.getElementById('backToMenu');
    const allBackToMenuBtns = document.querySelectorAll('.back-to-menu-btn');
    
    // Cart functionality
    let cartCount = 0;
    let cartItems = [];
    
    // Function to open the cart modal
    function openCartModal() {
        cartModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    
    // Function to close the cart modal
    function closeCartModal() {
        cartModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    
    // Add click event to cart icon to open modal
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        openCartModal();
    });
    
    // Add click events to all "Back to Menu" buttons
    allBackToMenuBtns.forEach(btn => {
        btn.addEventListener('click', closeCartModal);
    });
    
    // Close modal if user clicks outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            closeCartModal();
        }
    });
    
    // Optional: Add escape key functionality to close modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && cartModal.style.display === 'block') {
            closeCartModal();
        }
    });
});