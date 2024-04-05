
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const limiteSlides = 5; 

function showSlide(index) {
    const slides = document.getElementById('slides');
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + limiteSlides) % limiteSlides;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % limiteSlides;
    showSlide(currentIndex);
}

