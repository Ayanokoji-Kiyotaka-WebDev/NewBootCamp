

document.addEventListener('DOMContentLoaded', function () {
    const colorPalette = document.querySelector('.color-palette');
    const blankGrid = document.querySelector('.blank-grid');
    let selectedColor = null;

    for (let i = 0; i < 10; i++) {
        const colorSquare = document.createElement('div');
        colorSquare.classList.add('color');
        colorPalette.appendChild(colorSquare);
    }

    // Create blank squares in the grid
    for (let i = 0; i < 200; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        blankGrid.appendChild(square);
    }

    const colorSquares = document.querySelectorAll('.color');
    colorSquares.forEach(function (colorSquare, index) {
        colorSquare.style.backgroundColor = getRandomColor();
        colorSquare.addEventListener('click', function () {
            selectedColor = this.style.backgroundColor;
            removeSelectedClass();
            this.classList.add('selected');
        });
    });

 
    const gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach(function (square) {
        square.addEventListener('click', function () {
            if (selectedColor) {
                this.style.backgroundColor = selectedColor;
            }
        });
    });

    function removeSelectedClass() {
        colorSquares.forEach(function (colorSquare) {
            colorSquare.classList.remove('selected');
        });
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});