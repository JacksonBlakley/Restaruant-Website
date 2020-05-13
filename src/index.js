import './style.css';
import image from './image.png';

console.log("THIS TEXT IS FROM index.js");

function component() {
    var element = document.createElement('div');
  
    // use your function!
    element.innerHTML = "Hello Marcus";
    element.classList.add('hello');

    //add image to existing div
    const myIcon = new Image();
    myIcon.src = image;

    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());