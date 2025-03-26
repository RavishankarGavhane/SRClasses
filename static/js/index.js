document.addEventListener('DOMContentLoaded', () => {
    // Carousel Initialization
    const carousel = new bootstrap.Carousel(document.querySelector('#heroCarousel'), {
        interval: 3000,
        ride: 'carousel',
        pause: 'hover'
    });

    // Smooth Scroll for Nav Links
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Map Toggle Functionality
    const mapViewBtn = document.getElementById('mapView');
    const view360Btn = document.getElementById('360View');
    const googleMap = document.getElementById('googleMap');
    const view360Map = document.getElementById('360Map');

    mapViewBtn.addEventListener('click', () => {
        mapViewBtn.classList.add('active');
        view360Btn.classList.remove('active');
        googleMap.classList.add('active');
        view360Map.classList.remove('active');
    });

    view360Btn.addEventListener('click', () => {
        view360Btn.classList.add('active');
        mapViewBtn.classList.remove('active');
        view360Map.classList.add('active');
        googleMap.classList.remove('active');
    });

    // Dynamically adjust object-position for carousel images
    document.querySelectorAll('.carousel-img').forEach(img => {
        const position = img.getAttribute('data-position');
        if (position) {
            img.style.objectPosition = position;
        }
    });

    // New Functionality: Show/Hide Carousel Control Icons on Click
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    const prevIcon = document.querySelector('.carousel-control-prev-icon');
    const nextIcon = document.querySelector('.carousel-control-next-icon');

    // Function to show the icons
    function showIcons() {
        prevIcon.classList.add('visible');
        nextIcon.classList.add('visible');
    }

    // Function to hide the icons after a delay
    function hideIcons() {
        setTimeout(() => {
            prevIcon.classList.remove('visible');
            nextIcon.classList.remove('visible');
        }, 2000); // Hide after 2 seconds
    }

    // Add click event listeners to the buttons
    prevButton.addEventListener('click', () => {
        showIcons();
        hideIcons();
    });

    nextButton.addEventListener('click', () => {
        showIcons();
        hideIcons();
    });
});