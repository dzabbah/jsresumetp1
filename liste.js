// declaration de liste en JS
//1ere Methode
let fruits = ["banana"]
fruits.unshift("mangue")
fruits[2] = "pomme"
fruits.push("orange")
//fruits.splice(2, 0, "pomme")

console.log( "fruits" , fruits)


//2eme Methode
let nombres = new Array()
nombres.push(10)
nombres.push(11)
console.log(`Nombres: ${nombres}`)