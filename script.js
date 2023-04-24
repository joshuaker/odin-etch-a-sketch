const grid = document.querySelector("#grid-container");
function getSquares(squareNum, sides) {
    // grid width/height of 960px divided by # of sides
    const gridStyle = getComputedStyle(grid);
    const gridLength = gridStyle.width;
    const squareLength = `${parseInt(gridLength)/sides}px`;

    while (squareNum > 0) {
        squareNum--;
        let div = document.createElement("div");
        div.classList.add("square");
        div.style.width = squareLength;
        div.style.height = squareLength;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        });
        grid.append("", div);
    }
}
getSquares(16*16, 16);
function rndRGBColorCode() {
    return `'rgb(' . rand(0, 255) . ',' . rand(0, 255) . ',' . rand(0, 255) . ')'`;
}
console.log(rndRGBColorCode())

const getNewSquare = document.querySelector("#getNewSquare");
getNewSquare.addEventListener("click", () =>{
    sides = parseInt(prompt("Sides: "));
    // set upper limit of sides
    if (sides > 100) {
        sides = 100;
    };
    grid.innerHTML = "";
    getSquares(sides*sides,sides)
})