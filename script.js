// script.js

let lastScrollTop = 0;
const items = document.querySelectorAll('.timeline-item, .gallery-images img');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Scorrimento verso il basso (zoom in)
    if (scrollTop > lastScrollTop) {
        items.forEach(item => {
            item.style.transform = 'scale(1.05)'; // Ingrandisce gli elementi
        });
    } else { // Scorrimento verso l'alto (zoom out)
        items.forEach(item => {
            item.style.transform = 'scale(1)'; // Rimpicciolisce gli elementi
        });
    }

    // Salva la posizione dello scroll per il prossimo confronto
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Per evitare valori negativi
});
