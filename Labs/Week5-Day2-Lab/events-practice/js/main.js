alert('Js is loaded');

const button = document.querySelector('button');
button.addEventListener('click', function(event) {
  console.log(event)
  button.style.color = "red";
});

button.addEventListener('click', function(event) {
  const li = document.createElement('li');
  const input = document.querySelector('input');
  li.textContent = input.value;
  document.querySelector('ul').appendChild(li);
  console.log(li)
});