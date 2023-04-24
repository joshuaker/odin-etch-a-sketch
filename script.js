let sides = 16;
let squareNum = sides * sides;
const grid = document.querySelector("#grid-container");

while (squareNum > 0) {
    console.log(squareNum);
    squareNum--;
    let div = document.createElement("div");
    div.classList.add("square");
    grid.append("", div)
}