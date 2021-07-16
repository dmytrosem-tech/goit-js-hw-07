const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы']

// Перебираем массив с названиями лишек------------------>
// const elArr = []
// ingredients.forEach(ingredient => {
//   const ingredientEl = document.createElement('li')
//   ingredientEl.textContent = ingredient
//   elArr.push(ingredientEl)
// })

// const elsArr = ingredients.map(ingredient => {
//   const el = document.createElement('li')
//   el.textContent = ingredient
//   return el
// })

// // Добавляем массив лишек в DOM----------------------------------->
// const parentEl = document.querySelector('#ingredients')
// parentEl.append(...elsArr)
const ingredientsList = document.querySelector('#ingredients')
const element = ingredients.map(option => {
  const ingredientsListElement = document.createElement('li')
  ingredientsListElement.textContent = option
  console.log(ingredientsListElement)
  return ingredientsListElement
})
ingredientsList.append(...element)
