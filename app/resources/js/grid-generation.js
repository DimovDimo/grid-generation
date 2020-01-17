(function gridButton(){
    let button = document.getElementById("grid-button");
    button.addEventListener("click", gridButtonClick);
}());

function gridButtonClick(){
    let grid = document.getElementById("grid");
    let backgroundColor = document.getElementById("background-color-input-id");
    grid.style.setProperty("background-color", backgroundColor.value);
}

gridButtonClick();