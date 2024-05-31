function showTab(tabId) {
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    document.getElementById(tabId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    showTab('home');

    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    function showSlide(index) {
        const slideWidth = slides[0].clientWidth;
        const slideContainer = document.querySelector('.carousel-slide');
        slideContainer.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    }

    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);

    setInterval(nextSlide, 3000);
});

