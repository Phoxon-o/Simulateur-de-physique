// Fonction de création de balise
export function createTag(parent, tagName, content = null) {
    // Création de la balise "tagName" 
    // (tagName pouvant être canevas, div, p, etc.)
    let tag = document.createElement(tagName);
    
    // On ajoute l'élément au parent spécifié
    parent.appendChild(tag);

    // Si nous avons précisé un contenu (pour une balise p par exemple)
    // Nous l'ajoutons
    // (La fonction peut être améliorée, pour ajouter une balise, mais ce n'est pas utile pour ce projet (normalement... :D))
    if(content != null) {
        tag.appendChild(document.createTextNode(content));
    }

    return tag;
}