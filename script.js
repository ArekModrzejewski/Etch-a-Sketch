const divs = document.getElementsByClassName('neutral-div');
const reset_button = document.getElementById('reset-button');
const size_button = document.getElementById('size-button');

//funtion creating divs taking number of columns of the square grid
function createDivs(numberOfColumns) {
    let i = 0;
    const container = document.querySelector('#squares-container');
    while (i < numberOfColumns ** 2) {
        const content = document.createElement('div');
        content.classList.add('neutral-div')
        container.appendChild(content);
        container.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;
        i++;
    }
}
function removeDivs() {
    document.querySelectorAll('.neutral-div').forEach(e => e.remove());
}


function drawingHover() {
    for (i = 0; i < divs.length; i++) {
        divs[i].addEventListener('mouseover', function (e) {
            (e.target).classList.add('hovered-div');
        }
        )
    }
}

function resetColor() {
    for (i = 0; i < divs.length; i++) {
        divs[i].classList.remove('hovered-div')
    }
}
function size_buttonFunction() {
    let columns = window.prompt('Enter a number from range <4, 70>', 'Enter number here...')
    if (columns >= 4 && columns <= 70) {
        removeDivs()
        createDivs(columns)
        i++
    }
    else {
        alert('Wrong input. Try again.')
        size_buttonFunction()
    }
}
reset_button.onclick = resetColor;

size_button.onclick = size_buttonFunction;

window.onmousedown = drawingHover;
createDivs(16);
