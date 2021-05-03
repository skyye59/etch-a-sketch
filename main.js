const wrapper = document.querySelector(".wrapper");
const gridRange = document.querySelector("input");
const value = document.querySelector(".val");

// Generates the grids needed to write on
const generateGrids = function (num) {
  for (let i = 0; i < num * num; i++) {
    const gridBox = document.createElement("div");
    gridBox.setAttribute("class", "box");
    wrapper.appendChild(gridBox);
  }

  wrapper.setAttribute(
    "style",
    `grid-template-columns: repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr)`
  );
};

// Set the initial Value
generateGrids(gridRange.value);
value.textContent = `${gridRange.value}x${gridRange.value}`;

// Get all of the boxes
let grids = document.querySelectorAll(".box");

// Tracks the changes to the range input
gridRange.addEventListener("input", () => {
  value.textContent = `${gridRange.value}x${gridRange.value}`;

  // Clear the first set of created grids before generating a new set
  // If you do not, there will be a pile of created divs which crash the browser
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.lastChild);
  }

  // New set of grids to generate
  generateGrids(gridRange.value);
  grids = document.querySelectorAll(".box");
});

window.addEventListener("mousedown", () => {
  grids.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.setAttribute("style", "background-color: black");
    });
  });
});
