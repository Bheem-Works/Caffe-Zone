// Testimonial Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');
    const cards = document.querySelectorAll('.testimonial-card');
    
    // Initialize
    showCard(0);
    
    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showCard(index);
        });
    });
    
    // Auto rotate every 5 seconds
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }, 5000);
    
    // Function to show a specific card
    function showCard(index) {
        // Hide all cards
        cards.forEach(card => {
            card.classList.add('hidden');
        });
        
        // Show the selected card
        cards[index].classList.remove('hidden');
        
        // Update active dot
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[index].classList.add('active');
    }
});