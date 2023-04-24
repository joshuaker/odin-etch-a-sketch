let sides = 16;
let squareNum = sides * sides;
const grid = document.querySelector("#grid-container");
// grid width/height of 960px divided by # of sides
const gridStyle = getComputedStyle(grid);
const gridLength = gridStyle.width;
const squareLength = `${parseInt(gridLength)/sides}px`

while (squareNum > 0) {
    squareNum--;
    let div = document.createElement("div");
    div.classList.add("square");
    div.style.width = squareLength;
    div.style.height = squareLength;
    grid.append("", div)
}