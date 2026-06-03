const gridItems = document.querySelectorAll('.grid-item');
const resizeButton = document.querySelector('#resize-button');
const container = document.querySelector('.container');

let gridNum = 16;

gridItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('active');
    });
});

resizeButton.addEventListener('click', (event) => {
    gridNum = prompt("Input grids in width and height:");
    container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
});