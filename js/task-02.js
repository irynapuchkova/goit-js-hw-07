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
  const ingredientsListEl = [];

  array.forEach(element => {
    ingredientItemEl = document.createElement('li');
    ingredientItemEl.style.listStyle = 'none';

    ingredientItemEl.textContent = element;

    ingredientsListEl.push(ingredientItemEl);
  })

  return ingredientsListEl;
}

const ingredientsEl = createIngredientsListEl(ingredients);
ingredientsListEl.append(...ingredientsEl);

console.log(ingredientsListEl);