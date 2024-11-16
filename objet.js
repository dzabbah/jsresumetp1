
// declaration d'objet JS: un objet js a des propriété et des méthodes
// declaration d'objet JS 1er methode
let personne = {
    nom: "Ali",
    prenom: "lecode",
    manger: function () {

    }
} 

personne.age = 20
personne["taille"] = 1.88
personne.info = function () {
    return `je m'appelle ${this.nom} ${this.prenom}. j'ai ${this.age} et je mesure ${this.taille}.`
}
console.log(personne)
console.log("info: ", personne.info())

// declaration d'objet JS 2eme methode
let maison = new Object()
maison.couleur = "bleu"
maison["nombrePieces"] = 3
maison.info = function () {
    return `Maison de couleur ${this.couleur} et de ${this.nombrePieces} pieces !!!`
}

console.log(maison)
console.log("info: ", maison.info())





