// anuncio_topo.js
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.anuncio_topo-container');
    const carouselItems = document.querySelectorAll('.anuncio_topo-item');
    const totalItems = carouselItems.length;
    const indicatorsContainer = document.querySelector('.anuncio_topo-indicators');

    let index = 0;

    function showImage() {
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;

        const indicators = document.querySelectorAll('.anuncio_topo-indicator');
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function goToImage(idx) {
        index = idx;
        showImage();
    }

    function nextImage() {
        index++;
        if (index >= totalItems) {
            index = 0;
        }
        showImage();
    }

    function prevImage() {
        index--;
        if (index < 0) {
            index = totalItems - 1;
        }
        showImage();
    }

    for (let i = 0; i < totalItems; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('anuncio_topo-indicator');
        if (i === 0) {
            indicator.classList.add('active');
        }
        indicator.addEventListener('click', () => goToImage(i));
        indicatorsContainer.appendChild(indicator);
    }

    setInterval(nextImage, 15000);
});
