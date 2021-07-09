// Ищем элемменты------------------------------------>
const counterEl = document.querySelector("#counter");
const mBtn = counterEl.firstElementChild;
const pBtn = counterEl.lastElementChild;
let counterValueEl = document.querySelector("#value");

// Обьявляем переменку------------------------------->
let counterValue = 0;

// Обьявляем коллбеки-------------------------------->
const countDecrement = () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
  };
const countIncrement = () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
  };

// Вешаем слушателя--------------------------------->
mBtn.addEventListener("click", countIncrement);
pBtn.addEventListener("click", countDecrement);

