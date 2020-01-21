(function gridContainer() {
    let button = document.getElementById("container");
    button.addEventListener("change", gridChange);
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
        `${LinearGradient("vertical-lines-color-input-id", "vertical-lines-width-input-id", "vertical-lines-transparent-input-id", false)},
         ${LinearGradient("horizontal-lines-color-input-id", "horizontal-lines-width-input-id", "horizontal-lines-transparent-input-id", true)}`;
}

function LinearGradient(ColorID, WidthPixelsID, TransparentPixelsID, isHorizontal){
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