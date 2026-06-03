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

function promptCheck() {
    let userInput;
    let promptMessage = "Please enter a grid size between 1 and 100";
    let isValid = false;

    while (!isValid) {
        let rawInput = prompt(promptMessage);

        if (rawInput === null) {
            break;
        }

        userInput = parseInt(rawInput, 10);

        if (!Number.isInteger(userInput) || rawInput.trim() === "") {
            promptMessage = "⚠️ WARNING: Not a valid integer!\n\nPlease enter a number from 1 to 100:";
        } else if (userInput < 1 || userInput > 100) {
            promptMessage = "⚠️ WARNING: Out of range!\n\nPlease enter a number between 1 and 100:";
        } else {
            isValid = true;
        }
    }

    if (isValid) {
        return userInput;
    }
}

resizeButton.addEventListener('click', (event) => {
    gridNum = promptCheck();
    container.replaceChildren();
    container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
    generateGrid(gridNum);
});

generateGrid(gridNum);