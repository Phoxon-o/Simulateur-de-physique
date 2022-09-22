import Body from './Body.js';
import Vector2 from './Vector2.js';


// Classe de l'objet cercle, une "balle"
export default class Circle extends Body {
    // Ajout du rayon au constructeur, propre au cercle
    constructor(position, radius) {
        super(position);

        this.radius = radius;
    }

    // Surcharge de la méthode update
    update(deltaTime, canvas) {
        // Nullification de la vitesse et de l'accélération quand le cercle touche le bas du canevas
        if(this.position.y >= canvas.height - this.radius) {
            this.velocity = Vector2.zero;

            if (this.acceleration.y > 0) {
                this.acceleration.y = 0;
            }
        }
        
        // Méthode update par défaut, de la classe mère
        super.update(deltaTime);
    }
}