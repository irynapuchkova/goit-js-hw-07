// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и
// нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount),
// которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше 
// предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const ref = {
  controls: document.querySelector('#controls'),
  input: controls.querySelector('input'),
  renderBtn: controls.querySelector('[data-action="render"]'),
  destroyBtn: controls.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
}

// console.log(ref.boxes.children.length);
const incrementDecrementNum = '10px';
let boxesAmount;

ref.input.addEventListener('input', ((event) => {
     ref.renderBtn.addEventListener('click', createBoxes);
  }))



ref.destroyBtn.addEventListener('click', (event) => {
  
});


// ref.renderBtn.addEventListener('click', )

function createBoxes(amount) {
  let box = document.createElement('div');
  amount += box;
  console.dir(amount);

  box.style.display = 'block';
  box.style.width = '30px';
  box.style.height = '30px';
  box.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  
  ref.boxes.append(box);
}
