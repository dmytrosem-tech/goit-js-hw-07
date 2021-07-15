const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы']

// Перебираем массив с названиями лишек------------------>
const elArr = []
ingredients.forEach(ingredient => {
  const ingredientEl = document.createElement('li')
  ingredientEl.textContent = ingredient
  elArr.push(ingredientEl)
})

// Добавляем массив лишек в DOM----------------------------------->
const parentEl = document.querySelector('#ingredients')
parentEl.append(...elArr)
