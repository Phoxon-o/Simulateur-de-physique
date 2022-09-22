import Vector2 from "./Vector2.js";
import World from "./World.js";

// Classe mère de tous les objets physiques
export default class Body {
    // Constructeur avec tout ce que les objets auront en commun
    constructor(position) {
        this.position = position;

        // Initialisation vecteur nul de la vitesse et de l'accélération
        this.velocity = Vector2.zero;
        this.acceleration = Vector2.zero;
    }

    // Fonction update par défaut, avec l'application de la gravité et des calculs qui suivent pour la vitesse et la position
    update(deltaTime) {
        this.acceleration = World.gravity;
        this.velocity = this.velocity.add(this.acceleration.mulConst(deltaTime));
        this.position = this.position.add(this.velocity.mulConst(deltaTime).add(this.acceleration.mulConst(deltaTime * deltaTime)));
    }
}