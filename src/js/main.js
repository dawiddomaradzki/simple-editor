console.log(`Hello world!`);


const inputText = document.querySelector('.editor__enter--js');
const btnLoad = document.querySelector('.editor__button--load--js');
const btnSave = document.querySelector('.editor__button--save--js');

// let inputArray = localStorage.setItem('items', JSON.stringify(inputArray));



btnSave.addEventListener('click', (e) => {
  e.preventDefault();
  const input = inputText.value;

  console.log(input);
  localStorage.setItem ('input', input);
});


btnLoad.addEventListener('click', (e) => {
  e.preventDefault();
  inputText.value = localStorage.getItem('input');

});