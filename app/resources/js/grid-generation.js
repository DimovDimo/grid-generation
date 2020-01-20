(function gridContainer() {
    let button = document.getElementById("container");
    button.addEventListener("change", gridButtonClick);
}());

function gridChange() {
    let grid = getGridElement();
    gridBackgroundColor(grid);
    gridLines(grid);
}

gridChange();

function getGridElement() {
    return document.getElementById("grid");
}

function gridBackgroundColor(grid) {
    let backgroundColor = document.getElementById("background-color-input-id");
    grid.style.setProperty("background-color", backgroundColor.value);
}

function gridLines(grid) {
    let linearGradients = 
        `${verticalLinesLinearGradient()}, ${horizontalLinesLinearGradient()}`;
}

function verticalLinesLinearGradient(){
    let verticalLinesColor = document.getElementById("vertical-lines-color-input-id");
    let verticalLinesWidthPixels = document.getElementById("vertical-lines-width-input-id");
    let verticalLinesTransparentPixels = document.getElementById("vertical-lines-transparent-input-id");

    return `linear-gradient(${verticalLinesColor.value} ${verticalLinesWidthPixels.value}px, transparent ${verticalLinesTransparentPixels.value}px)`
}

function horizontalLinesLinearGradient(){
    let horizontalLinesColor = document.getElementById("horizontal-lines-color-input-id");
    let horizontalLinesWidthPixels = document.getElementById("horizontal-lines-width-input-id");
    let horizontalLinesTransparentPixels = document.getElementById("horizontal-lines-transparent-input-id");

    return `linear-gradient(90deg, ${horizontalLinesColor.value} ${horizontalLinesWidthPixels.value}px, transparent ${horizontalLinesTransparentPixels.value}px)`
}