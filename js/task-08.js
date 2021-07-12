// получаем ссылки-------------------------------------------------------------->
const refs = {
  controlsRef: document.querySelector("#controls"),
  boxesRef: document.querySelector("#boxes"),
  inputRef: document.querySelector("input"),
};
const btn = document.querySelector("#boxes");
const btnRenderRef = refs.controlsRef.children[1];
const btnDestroyRef = refs.controlsRef.lastElementChild;

// Вешаем слушатели------------------------------------------------------------->
refs.controlsRef.addEventListener("input", onValueChange);
btnRenderRef.addEventListener("click", onRenderBtnClick);
btnDestroyRef.addEventListener("click", onDestrBtnClick);

// Это массив элементов который будет добавлятся в верстку после распыления----->
let divArr = [];

// Сначала делаем функции создания и добавления ящиков-------------------------->
function onRenderBtnClick(event) {
  createBoxes(refs.inputRef.value);
}

function createBoxes(amount) {
  // console.log(amount);
  let inputValue = amount;
  let divWidth = 20;
  let divHeight = 20;

  for (let i = 0; i < inputValue; i += 1) {
    const boxesDiv = document.createElement("div");
    boxesDiv.classList.add("boxes__div");
    boxesDiv.style.backgroundColor = `rgb(${getRandomColor(
      0,
      255
    )}, ${getRandomColor(0, 255)}, ${getRandomColor(0, 255)})`;
    divWidth += 10;
    boxesDiv.style.width = `${divWidth}px`;
    divHeight += 10;
    boxesDiv.style.height = `${divHeight}px`;
    divArr.push(boxesDiv);
  }
  refs.boxesRef.append(...divArr);
}

// Теперь функции очищения родительского элемента от того что мы наваяли-------->
function onDestrBtnClick(event) {
  destroyBoxes();
}

function destroyBoxes() {
  //  refs.boxesRef.children.remove(); / ТУТ ДОЛЖНО ОТРАБОТАТЬ - НО НЕТ((
  console.log(refs.boxesRef.children);
  divArr.splice(0, 1);
  console.log(divArr);
  refs.boxesRef.append(...divArr);
}


// Тут вынимаем значение инпута при вводе, ----------------------------------->
function onValueChange(event) {
  return Number(event.currentTarget.firstElementChild.value);
}

// Функция рандомного цвета--------------------------------------------------->
function getRandomColor(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
