let usuario = prompt("ingrese usuario");
let clave = prompt("Ingrese Clave");

/* algoritmo que pide usuario y clave */

/* objetos para el algoritmo de compra */

const producto1 = {
   nombre: "Camara",
   precio:2000,
   gama: "altagama",
    tipoUso:"profesional",
}
const producto2 = {
    nombre: "Camara",
    precio:200000,
    gama: "altagama",
     tipoUso:"profesional",
 }
 const producto3 = {
    nombre: "Camara",
    precio:350000,
    gama: "altagama",
     tipoUso:"profesional",
 }
 const producto4 = {
    nombre: "Camara",
    precio:4000000 ,
    gama: "altagama",
     tipoUso:"profesional",
 }
 /* usuario = persona */
 /* clave = programar */
/* algoritmo de registro de usuario y contraseña */
function registro() {
    while (usuario != "persona"  &&  clave != "programar") {
        alert(`Clave y usuario Incorecto`);
        
        usuario = prompt("Ingrese usuario correcto");
        clave = prompt("ingrese clave correcta");
    }
    
}
/* saludo al usuario al ingresar */
function saludo() {
    registro()
    if (usuario === "persona" && clave === "programar") {
        alert(`Bienvenido ${usuario}`)
    }
}
/* algoritmo de compra en distintas moneda de un mismo producto con los precios de los respectivo paises */
function compras() {
    saludo()
    let compra = prompt("Con que moneda quiere pagar ARS,USD,COP,BS").toUpperCase();

    switch (compra) {
        case "ARS":
            alert(`${usuario} quiso pagar ${producto2.nombre} ${producto2.tipoUso} con valor de ${producto2.precio} pesos Argentinos`);
            break;
        case "USD":
            alert(`${usuario} quiso pagar ${producto1.nombre}  ${producto1.tipoUso} con valor de ${producto1.precio} Dolares`);
            break;
        case "COP":
            alert(`${usuario} quiso pagar ${producto3.nombre} ${producto3.tipoUso} con valor de ${producto3.precio} pesos colombianos`);
            break;
        case "BS":
            alert(`${usuario} quiso pagar ${producto4.nombre} ${producto4.tipoUso} con valor de ${producto4.precio} Bolivares`);
            break;
        default:
            alert(`Moneda no admitida`);
            break;
    }
    /* una despedida para el usuario */
    if (compra === "ARS" || compra === "USD" || compra === "COP" || compra === "BS") {
        alert(`Gracias por su compra vuelva pronto`)
    }else{
        alert(`ès una lastima que no haya decidido comprar, vuelva pronto`)
    }

}

compras()