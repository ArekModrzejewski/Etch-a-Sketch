//funtion creating divs taking number of columns of the square grid
function createDivs(numberOfColumns) {
    let i = 0;
    const container = document.querySelector('#squares-container');
    while (i < numberOfColumns ** 2) {
        const content = document.createElement('div');
        content.classList.add('neutral-div')
        container.appendChild(content);
        i++;
    }
}
createDivs(16);
const divs = document.getElementsByClassName('neutral-div');
for (i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseover', function (e) {
        (e.target).classList.add('hovered-div');
    }
)};
