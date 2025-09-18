// _________________________
    document.addEventListener("DOMContentLoaded", function () {
        const toggle = document.querySelector('.menu-toggle');
        const navList = document.querySelector('.nav-list');

        toggle.addEventListener('click', () => {
            navList.classList.toggle('show');
        });
    });
// ____________________________________


        // SWIPER CONTAINER (BANNER)
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 1900,
                disableOnInteraction: false,
            },
            effect: 'fade',
            speed: 800,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoHeight: true,
            spaceBetween: 20,
        });

      document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closeButton');
    const overlayImg = document.getElementById('overlayImg');
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');

    let currentIndex = 0;
    let currentImages = [];

    // Função para pré-carregar imagens
    function preloadImages(urls) {
        urls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }

    // Função para mostrar imagem atual
    function showImage(index) {
        overlayImg.src = currentImages[index];
    }

    // Event delegation para abrir overlay
    document.body.addEventListener('click', e => {
        const link = e.target.closest('.open-overlay');
        if (link) {
            e.preventDefault();

            const img1 = link.dataset.img1;
            const img2 = link.dataset.img2;

            currentImages = [img1, img2].filter(Boolean);
            if (!currentImages.length) return;

            preloadImages(currentImages);
            currentIndex = 0;

            showImage(currentIndex);
            overlay.style.display = 'flex';
        }
    });

    // Fecha overlay
    closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlayImg.removeAttribute('src');
        currentImages = [];
        currentIndex = 0;
    });

    // Navegação
    nextArrow.addEventListener('click', () => {
        if (currentImages.length > 1) {
            currentIndex = (currentIndex + 1) % currentImages.length;
            showImage(currentIndex);
        }
    });

    prevArrow.addEventListener('click', () => {
        if (currentImages.length > 1) {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            showImage(currentIndex);
        }
    });

    // Clicar fora da imagem fecha overlay
    overlay.addEventListener('click', e => {
        if (e.target === overlay) {
            closeButton.click();
        }
    });
});


    window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-D39CMC4VFK');

    window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-6VQ01H6YTW');

              function voltarAoTopo() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }