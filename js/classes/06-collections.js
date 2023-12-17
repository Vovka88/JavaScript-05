const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const colorPickerContainerEl = document.querySelector(".js-color-picker");
const makeColorPickerOptions = (args) => {
  return args.map(({ label, color}) => {
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.classList.add(".color-picker__option");
    buttonEl.textContent = label;
    buttonEl.style.backgroundColor = color;
    return buttonEl
  });
};
const elements = makeColorPickerOptions(colorPickerOptions);
console.log(elements);
colorPickerContainerEl.append(...elements)
