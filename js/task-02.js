// Напиши скрипт,
// который для каждого элемента массива ingredients создаст отдельный li,
  
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsListEl = document.querySelector('#ingredients');

const createIngredientsListEl = array => {
  let ingredientItemEl;

  array.forEach(element => {
    ingredientItemEl = document.createElement('li');
    ingredientItemEl.textContent = element;
    ingredientsListEl.append(ingredientItemEl);
    ingredientItemEl.style.listStyle = 'none';
  })
  return ingredientsListEl;
}

console.log(createIngredientsListEl(ingredients));