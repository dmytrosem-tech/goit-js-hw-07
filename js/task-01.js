const categoriesEl = document.querySelector('#categories');

const categoriesCount = categoriesEl.children.length;
console.log(`В списке ${categoriesCount} категории:`);

const categoriesValuesCount = categoriesEl.querySelectorAll("ul")


// Находим первую категорию и количество в ней элементов---->
const categorieFirst = categoriesEl.firstElementChild;
const categorieFirstTitle = categorieFirst.firstElementChild.textContent;
const categorieFirstCountIn = categoriesValuesCount[0].children.length;
console.log(`Категория: ${categorieFirstTitle}`);
console.log(`Количество элементов: ${categorieFirstCountIn}`);

// Находим вторую категорию и количество в ней элементов---->
const categorieSecond = categoriesEl.children[1];
const categorieSecondTitle = categorieSecond.firstElementChild.textContent;
const categorieSecondCountIn = categoriesValuesCount[1].children.length;
console.log(`Категория: ${categorieSecondTitle}`);
console.log(`Количество элементов: ${categorieSecondCountIn}`);

// Находим третью категорию и количество в ней элементов---->
const categorieThird = categoriesEl.children[2];
const categorieThirdTitle = categorieThird.firstElementChild.textContent;
const categorieThirdCountIn = categoriesValuesCount[2].children.length;
console.log(`Категория: ${categorieThirdTitle}`);
console.log(`Количество элементов: ${categorieThirdCountIn}`);


