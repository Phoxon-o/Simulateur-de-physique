import * as utils from './utils.js';
import Circle from './classes/Circle.js';
import Vector2 from './classes/Vector2.js';


let body = document.querySelector('body');
let canvas = utils.createTag(body, 'canvas');

let context = canvas.getContext('2d');

// window.onload = window.onresize = () => {
    canvas.width = window.innerWidth * 0.95;
    canvas.height = window.innerHeight * 0.95;
// }

let circle = new Circle(new Vector2(50, 50), 20);

setInterval(() => {
    for(let i = 0; i < 10; i++) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    
        context.beginPath();
        context.strokeStyle = 'black';
        context.lineWidth = 1;
    
        context.arc(circle.position.x, circle.position.y, circle.radius, 0, Math.PI * 2);
        context.stroke();
    
        circle.update(0.01, canvas);
    }
}, 10);