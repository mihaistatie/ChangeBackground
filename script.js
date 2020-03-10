//Creating variable for button, body & the span
const hexBtn= document.querySelector('.hexBtn');
const bodyBcg= document.querySelector('body');
const hex = document.querySelector('.hex')

//Creating and array of hex colors that will use
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
//Creating a click event for functioin get HEx
hexBtn.addEventListener('click',getHex);

function getHex () {
  let hexCol ='#';

  for(let i=0; i<6; i++){
    let random = Math.floor(Math.random()*hexNumbers.length);
    hexCol= hexCol + hexNumbers[random];

  }
  bodyBcg.style.backgroundColor = hexCol;
  hex.innerHTML= hexCol;
}
