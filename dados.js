const carouselContainer = document.querySelector('.carousel-container');

function scrollLeft() {
    carouselContainer.scrollBy({ left: -220, behavior: 'smooth' });
}

function scrollRight() {
    carouselContainer.scrollBy({ left: 220, behavior: 'smooth' });
}
