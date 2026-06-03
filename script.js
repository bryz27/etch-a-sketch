const resizeButton = document.querySelector('#resize-button');
const container = document.querySelector('.container');

let gridNum = 16;

function generateGrid(num) {
    for (let i = 0; i < (num * num); i++) {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        container.appendChild(item);
    }
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('active');
        });
    });
}

resizeButton.addEventListener('click', (event) => {
    gridNum = prompt("Input grids in width and height:");
    container.replaceChildren();
    container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
    generateGrid(gridNum);
});

generateGrid(gridNum);