// Напиши скрипт который, при наборе текста в инпуте input#name -
//   input(событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputEl = document.querySelector('input');
// console.log(inputEl.value.length); 

const outputEl = document.querySelector('#name-output');
outputEl.textContent

inputEl.addEventListener('input', (event) => {
  event.currentTarget.value.length === -0 
    ? outputEl.textContent = 'незнакомец'
    : outputEl.textContent = event.currentTarget.value;
}
);

