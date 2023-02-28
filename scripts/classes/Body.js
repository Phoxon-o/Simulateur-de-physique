import Vector2 from "./Vector2.js";
import World from "./World.js";

// Classe mère de tous les objets physiques
export default class Body {
    // Constructeur avec tout ce que les objets auront en commun
    constructor(position, mass, coeffRest) {
        this.position = position;
        this.mass = mass;
        this.coeffRest = coeffRest;

        // Initialisation vecteur nul de la vitesse et de l'accélération
        this.velocity = Vector2.zero;
        this.acceleration = Vector2.zero;
        
        // Ainsi qu'à zéro pour l'accélération, la vitesse et l'angle
        this.angularAcc = 0;
        this.angularVel = 0;
        this.angle = 0;

        // Ajout du moment cinétique, à "null" dans la classe mère (il se calcule différement pour chaque objet)
        this.momentInert = null;
    }

    // Fonction update par défaut, avec les calculs d'accélérations, vitesses et positions
    update(deltaTime) {
        // Ajout de l'accélération due à la gravité
        this.acceleration = this.acceleration.add(World.gravity);
        // Calcul de la vitesse par intégration de l'accélération par rapport au temps
        this.velocity = this.velocity.add(this.acceleration.mulConst(deltaTime));
        // Idem pour la position, en intégrant la vitesse par rapport au temps
        this.position = this.position.add(this.velocity.mulConst(deltaTime).add(this.acceleration.mulConst(deltaTime * deltaTime)));

        // Pas d'accélération angulaire à traiter ici, du moins si nous voulons rester réaliste 
        // (la gravité est la seule force jouant sur notre balle, et elle ne provoque pas de rotation). 

        // Même principe que plus haut pour la vitesse angulaire et la position angulaire (l'angle)
        this.angularVel += this.angularAcc * deltaTime;
        this.angle += this.angularVel * deltaTime + this.angularAcc * deltaTime * deltaTime;

        // On réinitialise les accélération, car elles ont lieu en un point précis dans le temps :
        // on ne veut pas que les objets accélèrent continuellement.
        this.acceleration = Vector2.zero;
        this.angularAcc = 0;
    }

    // Fonction d'ajout d'une force sur notre objet physique
    addForce(force) {
        this.acceleration = this.acceleration.add(force.divConst(this.mass));
    }

    // Fonction d'ajout d'un moment sur notre objet physique
    addTorque(torque) {
        this.angularAcc += torque / this.momentInert;
    }
}