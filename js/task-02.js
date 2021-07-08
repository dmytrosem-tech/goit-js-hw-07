const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];




//   Создаем 1 узел------------------------------>
const ingredient1 = document.createElement('li')
ingredient1.textContent = ingredients[0]; 

//   Создаем 2 узел------------------------------>
const ingredient2 = document.createElement('li');
ingredient2.textContent = ingredients[1]; 

//   Создаем 3 узел------------------------------>
const ingredient3 = document.createElement('li');
ingredient3.textContent = ingredients[2]; 

//   Создаем 4 узел------------------------------>
const ingredient4 = document.createElement('li');
ingredient4.textContent = ingredients[3]; 

//   Создаем 5 узел------------------------------>
const ingredient5 = document.createElement('li');
ingredient5.textContent = ingredients[4]; 

//   Создаем 6 узел------------------------------>
const ingredient6 = document.createElement('li');
ingredient6.textContent = ingredients[5]; 

// Добавляем все в DOM------------------------>
const parentEl = document.querySelector('#ingredients');
parentEl.append(ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6);

