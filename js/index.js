// Your code goes here

//1. on click make button 1 hot pink
const Btn1 = document.querySelector('.btn');

Btn1.addEventListener('click', (event) => {
    event.target.style.background= 'hotpink';
  })

//2. On Hover make the navigator links purple
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link =>{
      link.addEventListener('mouseover', (element) =>{
    element.target.style.color = 'purple';
    element.preventDefault();
})})

