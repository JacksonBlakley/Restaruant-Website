import './style.css';
import rose from './rose.png';

const page = () => {


console.log("THIS TEXT IS FROM index.js");
const container = document.querySelector('#content');

//create header container
var header = document.createElement('div');
header.classList.add("headerContainer");
container.appendChild(header);

//create header sub items
var homeDiv = document.createElement('div');
homeDiv.classList.add("homeSubHeader");
header.appendChild(homeDiv);
var homeTxt = document.createElement('p');
homeTxt.classList.add("subHeaderTxt");
homeTxt.textContent = "HOME";
homeDiv.appendChild(homeTxt);


var menuDiv = document.createElement('div');
menuDiv.classList.add("menuSubHeader");
header.appendChild(menuDiv);
var menuTxt = document.createElement('p');
menuTxt.classList.add("subHeaderTxt");
menuTxt.textContent = "MENU";
menuDiv.appendChild(menuTxt);

var contactDiv = document.createElement('div');
contactDiv.classList.add("contactSubHeader");
header.appendChild(contactDiv);
var contactTxt = document.createElement('p');
contactTxt.classList.add("subHeaderTxt");
contactTxt.textContent = "CONTACT";
contactDiv.appendChild(contactTxt);


//create image container
const roseImg = new Image();
roseImg.classList.add('smallImage');
roseImg.src = rose;
container.appendChild(roseImg);

}

export { page };


//function component() {
  //  var element = document.createElement('div');
  
    // use your function!
    //element.innerHTML = "Hello Marcus";
    //element.classList.add('hello');

    //add image to existing div
    //const mountainImg = new Image();
    //mountainImg.src = mountain;

    //element.appendChild(mountainImg);

  //  return element;
  //}
  
 // document.body.appendChild(component());