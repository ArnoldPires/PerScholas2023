//Intro to the DOM
/*
Students Will Be Able To:

Use DevTools to Explore the DOM
Select a Single Element in the DOM
Select Multiple Elements in the DOM
Change the Content of an Element
Change the Style of an Element
Manipulate the Attributes of an Element
Manipulate the Classes of an Element
Iterate Over a Collection of Elements
*/

let titleEl = document.querySelector('#title');
titleEl.style.color = "purple";
titleEl.style.backgroundColor = "yellow";
titleEl.style.textAlign = "center";
console.log(titleEl.id);

let pE1 = document.querySelector(".cool")
pE1.style.color = "green";
pE1.setAttribute("class", "example")
pE1.classList.remove('cool')
pE1.classList.add('second', 'third')
console.log(pE1.getAttribute("class"))


let a = document.querySelector('a');
a.setAttribute('href', 'www.google.com')

pE1.classList.add('example')
pE1.classList.replace

let commentEls = document.querySelectorAll('.comment');
console.log(commentEls)
for (let commentEl of commentEls) {
  console.log(commentEl)
  commentEl.style.fontSize = '30px';
}