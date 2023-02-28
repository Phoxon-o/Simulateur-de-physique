import Body from './Body.js';
import Vector2 from './Vector2.js';
import World from './World.js';


// Classe de l'objet cercle, une "balle"
export default class Circle extends Body {
    // Ajout du rayon au constructeur, propre au cercle
    constructor(position, mass, coeffRest, radius) {
        super(position, mass, coeffRest);

        this.radius = radius;
        
        // Calcul du moment d'inertie pour un disque
        this.momentInert = 1/2 * this.mass * this.radius * this.radius;
    }

    // Surcharge de la méthode update
    update(deltaTime, canvas) {
        // Changement de la vitesse pour créer un rebond 
        // et ajout d'une force opposée à la gravitation quand le cercle touche le bas du canevas
        if(this.position.y >= canvas.height - this.radius) {
            this.velocity.y *= -this.coeffRest;

            this.addForce(World.gravity.mulConst(-this.mass));
        }
        
        // Méthode update par défaut, de la classe mère
        super.update(deltaTime);
    }
}