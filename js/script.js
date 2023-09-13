/*
1- con un ciclo stampo tutte le immagini dentro items-wrapper.
2- prendo tutti gli elementi con la classe item e li salvo in un array.
3- al primo elemento tolgo la classe hide
4- al click di bottom 
  a. aggiungo la classe hide all'elemento corrente 
  b. incremento il contatore
  c. tolgo la classe hide all'elemento corrente
5- al click di up come punto 4 ma inverso
6- nascondo di default il bottone up
7- al click di bottom appare up
8- quando sono all'ultimo elemento nascondo il bottone bottom
9- al click di up mostro bottom
10- quando sono sul primo elemento nascondo up
*/ 


const itemsWrapper = document.querySelector('.items-Wrapper');
const btnNext = document.querySelector('.bottom');
const btnPrev = document.querySelector('.top');



const images = [
  
  '../img/01.webp',
  '../img/02.webp',
  '../img/03.webp',
  '../img/04.webp',
  '../img/05.webp',
  
]

console.log(images);

let counterImg = 0;  

itemsWrapper.innerHTML= '';

for (let i = 0; i < images.length; i++) {
  const image = images[i];
  console.log(image);
  itemsWrapper.innerHTML += `<img src="${image}" class="item hide" >`;
}

const itemsCollection = document.getElementsByClassName('item');

itemsCollection[counterImg].classList.remove('hide');

btnNext.addEventListener('click', function(){
  
  itemsCollection[counterImg].classList.add('hide');

  counterImg++;

  itemsCollection[counterImg].classList.remove('hide');

  btnPrev.classList.remove('hide');

  if(counterImg === itemsCollection.length - 1){

    btnNext.classList.add('hide');

  }
})

btnPrev.addEventListener('click', function(){

  itemsCollection[counterImg].classList.add('hide');

  counterImg--;
  
  itemsCollection[counterImg].classList.remove('hide');

  btnNext.classList.remove('hide');

  if(counterImg === 0) btnPrev.classList.add('hide');


})

