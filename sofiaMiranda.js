

class Producto {
    constructor(categoria, tamaño, gramaje, cantidad, precio) {
        this.categoria = categoria;
        this.tamaño = tamaño; 
        this.gramaje = gramaje;
        this.cantidad = cantidad;
        this.precio = precio;
    };
};

let laminaEscalera = new Producto ( 'lamina', 'a4' , '90 gramos', '1', '200'); 
let lamina2 = new Producto ( 'lamina', 'a3' , '120 gramos', '1', '200'); 
let lamina3 = new Producto ('lamina', '90x60' , '120 gramos', '1', '200'); 

console.log('laminaEscalera => ', laminaEscalera);
console.log('lamina2 => ', lamina2);
console.log('lamina3 => ', lamina3);


class Cliente {
    constructor(nombre, email, telefono, productosComprados) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.productosComprados = productosComprados;
    };
};


const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const envio   = x => x * 0.21;
let precioProducto  = 500;
let precioProducto1  = 200; 
let precioProducto2  = 300;  
let precioDescuento = 50;  

//Calculo el precioProducto + IVA - precioDescueto
let nuevoPrecio = resta(suma(precioProducto, envio(precioProducto)), precioDescuento);
let nuevoPrecio1 = resta(suma(precioProducto1, envio(precioProducto1)), precioDescuento); 
let nuevoPrecio2 = resta(suma(precioProducto2, envio(precioProducto2)), precioDescuento); 
console.log(nuevoPrecio);
console.log(nuevoPrecio1);
console.log(nuevoPrecio2);


