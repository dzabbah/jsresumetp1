const nombre1 = document.getElementById("nombre1")
const nombre2 = document.getElementById("nombre2")
const resultat = document.getElementById("resultat")



function doAddition (a, b){
    return a+b
}

function doSoustraction (a, b){
    return a-b
}

function doMultiplication(a, b){
    return a*b
}

function doDivision (a, b){
    return a/b
}

function convertStringToNumber(string) {
  return Number(string)
}

function effacer() {
  nombre1.value = ""
  nombre2.value = ""
}


 const addition = function() {
  resultat.innerHTML = "";
  resultat.innerHTML = `Resultat: nombre1 + nombre2 = ${
    doAddition(convertStringToNumber(nombre1.value), convertStringToNumber(nombre2.value))
  }`;
}

 const soustraction = function() {
  resultat.innerHTML = "";
  resultat.innerHTML = `Resultat: nombre1 + nombre2 = ${
    doSoustraction(convertStringToNumber(nombre1.value), convertStringToNumber(nombre2.value))
  }`;
}
 const multiplication = function(event) {
  resultat.innerHTML = "";
  resultat.innerHTML = `Resultat: nombre1 + nombre2 = ${
    doMultiplication(convertStringToNumber(nombre1.value), convertStringToNumber(nombre2.value))
  }`;
}
 const division = function(event) {
  resultat.innerHTML = "";
  resultat.innerHTML = `Resultat: nombre1 + nombre2 = ${
    doDivision(convertStringToNumber(nombre1.value), convertStringToNumber(nombre2.value))
  }`;
}



