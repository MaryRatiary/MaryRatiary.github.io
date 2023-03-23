


let myVariable = document.querySelector('h1');
alert('hey you!');

document.querySelector('html').addEventListener('click', function() {
  alert('Ouch, stop clicking me !!');
});

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/diamant.jpg'){
    myImage.setAttribute('src', 'images/diamant2.jpg');
  } else {
    myImage.setAttribute('src', 'images/diamant.jpg');
  }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('veillez saisir votre nom.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'This Diamonds is beautifull like, ' + myName;
}
if (!localStorage.getItem('name')) {
  setUserName();
} else{
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'This Diamonds is beautifull like, ' + storedName;
}
myButton.addEventListener('click', function() {
  setUserName();
});
