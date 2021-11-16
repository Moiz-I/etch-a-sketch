const container = document.getElementById("grid-container");

const clear = document.getElementById("clear");

const slider = document.getElementById("slider");
const output = document.getElementById("output")
const grids = document.querySelectorAll("div.grid-item");

makeRows(16, 16);

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', function (e) {
      e.target.style.background = "red";
    })
    container.appendChild(cell).className = "grid-item";
  };
};

slider.oninput = function() {
  output.innerHTML = this.value;
  container.innerHTML = ''
  makeRows(this.value, this.value)
}

function eraseAllColor() {
  var gridPixels = container.querySelectorAll('div.grid-item');
  gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffff');
}

clear.addEventListener('click', eraseAllColor)

//clear.onclick = () =>  grids.forEach(grids => grids.style.background = 'white');

//random color:  "#" +Math.floor(Math.random()*16777215).toString(16);

