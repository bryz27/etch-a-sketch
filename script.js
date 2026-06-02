const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('active');
    });
});