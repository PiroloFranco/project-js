class producto {
    constructor(nombre, marca, precio, stock){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }
}

const fruta1 = new producto("Banana", "La Bananita", 100, 70)

const fruta2 = new producto("Manzana", "La Manzanita", 120, 90)

const fruta3 = new producto("Naranja", "La Naranjita", 130, 80)

const fruta4 = new producto("Pera", "La Perita", 150, 50)

const fruta5 = new producto("Uva", "La Uvita", 140, 180)

const fruta6 = new producto("Sandia", "La Sandita", 200, 30)

const fruta7 = new producto("Mandarina", "la Mandarita", 110, 80)

let frutas = [fruta1, fruta2, fruta3, fruta4, fruta5, fruta6, fruta7]


const carne1 = new producto("Carne", "La Vaquita", 700, 80)

const carne2 = new producto("Pollo", "Los pollitos felices", 300, 90)

const carne3 = new producto("Cerdo", "Los cerditos", 500, 70)

const carne4 = new producto("Pescado", "Alta mar", 600, 40)

let carnes = [carne1, carne2, carne3, carne4]


const galleta1 = new producto("Oreos", "Nabisco", 120, 70)

const galleta2 = new producto("Merengadas", "Bagley", 110, 90)

const galleta3 = new producto("Variedad", "Terrabusi", 90, 110)

const galleta4 = new producto("Sonrisas", "Bagley", 120, 70)

let galletas = [galleta1, galleta2, galleta3, galleta4]


const lacteo1 = new producto("Leche", "La Serenisima", 100, 80)

const lacteo2 = new producto("Manteca", "La Serenisima", 110, 90)

const lacteo3 = new producto("Queso", "La Serenisima", 60, 150)

let lacteos = [lacteo1, lacteo2, lacteo3, lacteo4]


let carrito = []

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
} else{
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

let divFrutas = document.querySelector("#divFrutas")

