
//function 
// permet d'isoler un bout de code reutilisable pour s'en servir à chaque fois qu'on aura besoin.

// Declaration de fonction nommée et sans paramètres.
function direBonjour() {
    console.log("Bonjour ali")
}

// Declaration de fonction nommée et avec paramètres.
function direBonsoir(nom) {
    console.log("Bonsoir", nom)
}

// declaration de fonction anonyme
(function () {
    console.log("je suis une fonction anonyme")
})()

// declaration de variable  et affectation de fonction anonyme
let somme = function () {
    console.log("somme 2+2 =", 2+2)
}

let sommeParametrable = function (a , b) {
    console.log(`somme ${a} + ${b}  = ${a + b}`)
}


// Appel de fonction
direBonjour()
direBonsoir("ali")
direBonsoir("bilé")
somme()
sommeParametrable(10,5)

