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

//5. On any Keydown, change body bg color to pink
const theBody = document.querySelector('body');

document.addEventListener('keydown', () => {
  theBody.style.backgroundColor = 'pink';
})

//6. On Keyup, change bg color back to white

document.addEventListener('keyup', () => {
  theBody.style.backgroundColor = 'white';
})

//7. On load, display a message
window.onload = (event) => {
  alert("The page has loaded.");
}

//8. On "Copy" display a message
window.addEventListener("copy", (event) => {
  alert("DONT COPY MY TEXT!!.");
})

//9. On Mouse Over Footer display message
const footer = document.querySelector('footer');

footer.addEventListener('mouseover', (event) => {
  alert("Oh, Hi, Im a Footer");

})


//10. On Click have section dissapear
const destination = document.querySelector('.content-destination');

destination.addEventListener('click', (event) => {
  event.target.style.display = 'none';
});


// stop propagation (This stops the navbar message from firing when about is clicked)
const mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('click', () => {
  alert('navbar was clicked!');
})

links[1].addEventListener('click', (event) => {
  event.stopPropagation();
  alert('About was clicked!');
})