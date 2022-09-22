import * as utils from './utils.js';
import Circle from './classes/Circle.js';
import Vector2 from './classes/Vector2.js';


// Récupération du body
let body = document.querySelector('body');
// Création du canevas
let canvas = utils.createTag(body, 'canvas');

// Récupération du contexte du canevas (afin de dessiner)
let context = canvas.getContext('2d');

// window.onload = window.onresize = () => {
    // Changement de la taille du canevas
    canvas.width = window.innerWidth * 0.95;
    canvas.height = window.innerHeight * 0.95;
// }

// Création d'un cercle
let circle = new Circle(new Vector2(50, 50), 20);

// Boucle de dessin et de calculs physiques
setInterval(() => {
    // Boucle for afin de réaliser plus de mise à jour physiques pour chaque interval 
    // (L'interval ayant des limites au niveau du timeout)
    for(let i = 0; i < 10; i++) {
        // Effacement du canevas à chaque nouvelle itération
        context.clearRect(0, 0, canvas.width, canvas.height);
    
        // Commencement du dessin
        context.beginPath();
        // Couleur et taille de ligne
        context.strokeStyle = 'black';
        context.lineWidth = 1;
    
        // Dessin du cercle
        context.arc(circle.position.x, circle.position.y, circle.radius, 0, Math.PI * 2);
        // Affichage des lignes
        context.stroke();
    
        // Calcul physiques du cercle
        circle.update(0.01, canvas);
    }
}, 10);