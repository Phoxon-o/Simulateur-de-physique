// Classe vecteur 2D
export default class Vector2 {
    // Vecteur nul
    static zero = new Vector2(0, 0);

    // Constructeur des deux composantes du vecteur 2D
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Méthode d'addition à un autre vecteur
    add(vect) {
        return new Vector2(this.x + vect.x, this.y + vect.y);
    }

    // Méthode de multiplication par une constante
    mulConst(k) {
        return new Vector2(this.x * k, this.y * k);
    }

    // Méthode de division par une constante
    divConst(k) {
        return new Vector2(this.x / k, this.y / k);
    }
}