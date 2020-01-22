(function gridContainer() {
    let button = document.getElementById("container");
    button.addEventListener("change", gridChange);
}());

function gridChange() {
    let grid = getGridElement();
    gridBackgroundColor(grid);
    gridLines(grid);
    gridBackgroundSize(grid);
    gridBackgroundPosition(grid);
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
        `${linearGradient("vertical-lines-color-input-id", "vertical-lines-width-input-id", "vertical-lines-transparent-input-id", false)},
         ${linearGradient("horizontal-lines-color-input-id", "horizontal-lines-width-input-id", "horizontal-lines-transparent-input-id", true)},
         ${linearGradient("small-vertical-lines-color-input-id", "small-vertical-lines-width-input-id", "small-vertical-lines-transparent-input-id", false)},
         ${linearGradient("small-horizontal-lines-color-input-id", "small-horizontal-lines-width-input-id", "small-horizontal-lines-transparent-input-id", true)}`;
    
    grid.style.setProperty("background-image", linearGradients);
}

function linearGradient(ColorID, WidthPixelsID, TransparentPixelsID, isHorizontal){
    let Color = document.getElementById(ColorID);
    let WidthPixels = document.getElementById(WidthPixelsID);
    let TransparentPixels = document.getElementById(TransparentPixelsID);

    if (isHorizontal) {
        return verticalLinesLinearGradient(Color, WidthPixels, TransparentPixels);
    }

    return horizontalLinesLinearGradient(Color, WidthPixels, TransparentPixels);
}

function verticalLinesLinearGradient(Color, WidthPixels, TransparentPixels){
    return `linear-gradient(${Color.value} ${WidthPixels.value}px, transparent ${TransparentPixels.value}px)`;
}

function horizontalLinesLinearGradient(Color, WidthPixels, TransparentPixels){
    return `linear-gradient(90deg, ${Color.value} ${WidthPixels.value}px, transparent ${TransparentPixels.value}px)`;
}

function gridBackgroundSize(grid){

}

function gridBackgroundPosition(grid){
    
}