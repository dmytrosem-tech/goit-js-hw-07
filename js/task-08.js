const refs = {
  controlsRef: document.querySelector("#controls"),
  boxesRef: document.querySelector("#boxes"),
  inputRef: document.querySelector("input"),
};
const btnRenderRef = refs.controlsRef.children[1];
const btnDestroyRef = refs.controlsRef.lastElementChild;
const createDiv = document.createElement("div");

refs.controlsRef.addEventListener("input", onValueChange);

function onValueChange(event) {
  console.log(Number(event.currentTarget.firstElementChild.value));
}

function createBoxes(amount) {
  refs.boxesRef.appendChild(createDiv);
}
