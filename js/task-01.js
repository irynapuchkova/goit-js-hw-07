// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.
// Получится 'В списке 3 категории.'.

const categoryEl = document.querySelector('#categories');
// console.log(category);
const categoryItemsEl = categoryEl.children;
// console.log(categoryItemsEl);
const categoryItemsElAmount = categoryItemsEl.length;

console.log(`'В списке ${categoryItemsElAmount} категории.'`);

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const spreadCategoryItemsEl = [...categoryItemsEl];

const getTitleAndItemsAmount = array => {
  const messageEl = [];
  let result;
  
  array.forEach(element => {
    const titleEl = element.firstElementChild.textContent;
    const itemsAmountEl = element.querySelectorAll('li').length;
    messageEl.push(`Категория: ${titleEl}, Количество элементов: ${itemsAmountEl}`);
    result = messageEl.join('; ');
  })
  
  return result;
};

console.log(getTitleAndItemsAmount(spreadCategoryItemsEl));