const nombre1 = document.getElementById("nombre1").value
const nombre2 = document.getElementById("nombre2").value
const addition = document.getElementById("addition")
const soustraction = document.getElementById("soustraction")
const multiplication = document.getElementById("multiplication")
const division = document.getElementById("division")
const resultat = document.getElementById("resultat")

function addition (a, b){
    return a+b
}

function soustraction (a, b){
    return a-b
}

function multiplication(a, b){
    return a*b
}

function division (a, b){
    return a/b
}



soustraction.addEventListener("click", () => {
   resultat.innerHTML = ""
   resultat.innerHTML = `Resultat: nombre1 + nombre2 = ${nombre1 + nombre2}`
   
})

addition.addEventListener("click", () => {
  resultat.innerHTML = "";
  resultat.innerHTML = `Resultat: nombre1 + nombre2 = ${nombre1 + nombre2}`;
});

multiplication.addEventListener("click", () => {
  resultat.innerHTML = "";
  resultat.innerHTML = `Resultat: nombre1 + nombre2 = ${nombre1 + nombre2}`;
});

division.addEventListener("click", () => {
  resultat.innerHTML = "";
  resultat.innerHTML = `Resultat: nombre1 + nombre2 = ${nombre1 + nombre2}`;
});