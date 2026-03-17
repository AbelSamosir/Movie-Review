const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let currentSlide = 0;

// Function to show the current slide and hide the rest
function showSlide() {
    slides.forEach((slide, index) => {
        id (index === currentSlide) {
            slide.computedStyleMap.display = 'block';
        } else {
            slide.computedStyleMap.display = 'none';
        }
    })
}

// Event listeners for the arrow buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showSlide();