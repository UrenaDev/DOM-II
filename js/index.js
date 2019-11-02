// Your code goes here

//1. on click make button 1 hot pink
const Btn1 = document.querySelector('.btn');

Btn1.addEventListener('click', (event) => {
  event.target.style.background= 'hotpink';
})

//2. On Hover make the navigator links purple
const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('mouseover', (element) => {
    element.target.style.color = 'purple';
    element.preventDefault();
  })
})

//3. On Double click, change text on button 2
const Btn2 = document.querySelectorAll('.btn')[1];

Btn2.addEventListener('dblclick', () => {
  Btn2.textContent = 'CHAAAAAANGE!';
})


//4. On Scroll, change main section bg color to gray
const mainSection = document.querySelector('.home');

window.addEventListener('scroll', () => {
  mainSection.style.backgroundColor = 'gray';
})