(function gridButton() {
    let button = document.getElementById("grid-button");
    button.addEventListener("click", gridButtonClick);
}());

function gridButtonClick() {
    let grid = getGridElement();
    gridBackgroundColor(grid);
    gridLines(grid);
}

gridButtonClick();

function getGridElement() {
    return document.getElementById("grid");
}

function gridBackgroundColor(grid) {
    let backgroundColor = document.getElementById("background-color-input-id");
    grid.style.setProperty("background-color", backgroundColor.value);
}

function gridLines(grid) {
    let verticalLinesColor = document.getElementById("vertical-lines-color-input-id");
    let linearGradients = `linear-gradient(${verticalLinesColor.value} 100px, transparent 100px)`;
    grid.style.setProperty("background-image", linearGradients);
}