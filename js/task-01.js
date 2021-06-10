// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.
// Получится 'В списке 3 категории.'.

const categoryEl = document.querySelector('#categories');
const categoryItemsAmount = categoryEl.children.length;

console.log(`'В списке ${categoryItemsAmount} категории.'`);

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

function getCategoryNameAndItemsElAmount(idx) {
  const categoryName = categoryEl.children[`${idx}`].firstElementChild.textContent;
  const categoryItemsElAmount = categoryEl.children[`${idx}`].lastElementChild.childElementCount;

  console.log(`Категория: ${categoryName}, Количество элементов: ${categoryItemsElAmount}`)
}

getCategoryNameAndItemsElAmount(0);
getCategoryNameAndItemsElAmount(1);
getCategoryNameAndItemsElAmount(2);
