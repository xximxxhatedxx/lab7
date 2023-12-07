document.body.style.margin = '0px';
document.body.style.height = '100vh';
document.body.style.backgroundColor = 'black';
document.body.style.display = 'flex';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';
 
let container = document.createElement('div');
let inputElement = document.createElement('input');
let imageContainer = document.createElement('div');
let result = document.createElement('div');
container.setAttribute('id', 'container');
container.style.height = '800px';
container.style.width = '800px';
container.style.maxHeight = '80vh';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'space-evenly';
container.style.background = 'black';
 
inputElement.id = 'userInput';
inputElement.style.width = '75%';
inputElement.style.height = '6%';
inputElement.style.borderRadius = '4% / 50%';
inputElement.style.border = 'none';
inputElement.style.backgroundColor = '#eeddff';
inputElement.style.textAlign = 'center';
inputElement.style.fontSize = 'xx-large';
inputElement.style.outline = 'none';
 
imageContainer.style.background = 'url(images/magic_ball.png';
imageContainer.style.backgroundColor = 'white';
imageContainer.style.backgroundSize = 'cover';
imageContainer.style.backgroundPosition = 'center';
imageContainer.style.borderRadius = '50%';
imageContainer.style.border = '3px solid black';
imageContainer.style.boxShadow = '0 0 12px 4px #6a4272';
imageContainer.style.width = '75%';
imageContainer.style.height = '75%';
imageContainer.style.textAlign = 'center';
imageContainer.style.lineHeight = '20px';
imageContainer.style.display = 'flex';
imageContainer.style.alignItems = 'center';
imageContainer.style.justifyContent = 'center';
 
result.style.fontSize = 'xxx-large';
result.style.fontFamily = 'Helvetica, Arial, sans-serif';
result.style.color = 'white';
result.style.textShadow = '2px 0 #000,\
-2px 0 #000, 0 2px #000, 0 -2px #000,\
1px 1px #000, -1px -1px #000,\
1px -1px #000, -1px 1px #000';
 
document.body.appendChild(container);
container.appendChild(inputElement);
container.appendChild(imageContainer);
imageContainer.appendChild(result);
 
let styleElem = document.head.appendChild(document.createElement("style"));
styleElem.innerHTML = '#container:before {\
    background: linear-gradient(60deg, #00b6ce, #000000 40%, #000000 60%, #7be503);\
    content:"";\
    z-index: -1;\
    height: 810px;\
    width: 810px;\
    max-height: 81vh;\
    position: absolute;\
    filter: blur(5px);';
 
const options = ['Yes', 'No', 
    'Maybe', 'Very doubtful', 
    'Better not tell you now', 
    'Reply hazy, try again',
    'Ask again later', 'As I see it, yes', 
    'My sources say no', 'Most likely'
];
 
inputElement.focus();
 
imageContainer.onclick = () => {
    if (inputElement.value.length < 3) result.innerText = "Type your question please";
    else result.innerText = options[Math.floor(Math.random() * (options.length - 1))];
    inputElement.value = "";
    inputElement.focus();
}