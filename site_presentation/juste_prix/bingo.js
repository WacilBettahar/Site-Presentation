const form = document.querySelector('#form');
const input = document.querySelector('#chiffre');
const error = document.querySelector('small');
const instructions = document.querySelector('#instruction');
let trials = 0;
let choosedNumber;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomNumber = getRandomInt(5000);


input.addEventListener('keyup', (e) => {
  if(isNaN(input.value)) {
    error.style.display = 'inline-block';
    input.style.borderColor = 'red';
    
  } else {
    error.style.display = 'none';
    input.style.borderColor = 'black';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(isNaN(input.value) || !input.value) {
    error.style.display = 'inline-block';
    input.style.borderColor = 'red';
  } else {
    trials++;
    choosedNumber = input.value;
    check(Number(choosedNumber));
    input.value = '';
  }
});
// const deleteElement = document.createElement("div");

function check(number) {
  let instruction = document.createElement('div');
  instruction.className = 'instruction';
    
  if(number < randomNumber) {
   instruction.classList.add('plus');
   instruction.innerHTML = `(${choosedNumber}) c'est Plus`;
  //  deleteElement.classList.add("fa-arrow-up"); 

  } else if(number > randomNumber) {
   instruction.classList.add('moins');
   instruction.innerHTML = `(${choosedNumber}) c'est moins`;
  //  deleteElement.classList.add("fa-arrow-down"); 

  } else {
   instruction.classList.add('Bingo');
   instruction.innerHTML = `(${choosedNumber}) BINGO`;
  }
   instructions.prepend(instruction);
};