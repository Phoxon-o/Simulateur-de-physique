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

// Création d'un cercle (ou plutôt un disque, physiquement parlant, car plein)
let circle = new Circle(new Vector2(50, 50), 50 / 1000, 0.5, 20);

// Ajout d'une force et d'un moment, pour tester
circle.addForce(new Vector2(10, 0));
circle.addTorque(50);

// Boucle de dessin et de calculs physiques
setInterval(() => {
    // Boucle for afin de réaliser plus de mise à jour physiques pour chaque intervalle 
    // (L'intervalle ayant des limites au niveau du timeout)
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

        // Dessin d'un rayon en rouge, pour voir la rotation
        context.beginPath();
        context.strokeStyle = "red";
        context.lineWidth = 1;
        context.moveTo(circle.position.x, circle.position.y);
        // On utilise la trigonométrie pour le tracer par rapport à l'angle du disque
        context.lineTo(circle.position.x + Math.cos(circle.angle) * circle.radius, circle.position.y + Math.sin(circle.angle) * circle.radius);
        context.stroke();
    
        // Calculs physiques du cercle
        circle.update(0.01, canvas);
    }
}, 10);