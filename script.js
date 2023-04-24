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
            div.style.backgroundColor = random_rgba();
        });
        grid.append("", div);
    }
}
getSquares(16*16, 16);
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

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