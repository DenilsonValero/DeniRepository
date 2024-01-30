let usuario = prompt("ingrese usuario");
let clave = prompt("Ingrese Clave");

/* algoritmo que pide usuario y clave */

/* objetos dentro de una aaray  para el algoritmo de compra */
    const productos =[
        {nombre:"camara" , precio:2000 , moneda:"ars"},
        {nombre:"paralante" , precio:200000 , moneda:"ars"},
        {nombre:"celular" , precio: 350000, moneda:"ars"},
        {nombre:"tele", precio:4000000 , moneda:"ars"},
    ];

    productos.forEach((item) => {
            console.log(item);
            console.log(item.nombre);
           console.log(item.precio);
           console.log(item.pais);
          });


     

 /* usuario = persona */
 /* clave = programar */
/* algoritmo de registro de usuario y contraseña */
const  registro = () => {
    while (usuario != "persona"  &&  clave != "programar") {
        alert(`Clave y usuario Incorecto`);
        
        usuario = prompt("Ingrese usuario correcto");
        clave = prompt("ingrese clave correcta");
    }
    
}
/* saludo al usuario al ingresar */
const saludo = () => {
    registro()
    if (usuario === "persona" && clave === "programar") {
        alert(`Bienvenido ${usuario}`)
    }
}
/* algoritmo de compra y busqueda con el metodo find*/
/* productos camara,celular,parlante y tele */
const compras = () => {
    saludo()
    let compra = prompt("Que producto quiere comprar");
    let monedaEncontrada = productos.find((item) => item.nombre === compra);
   
    switch (monedaEncontrada.nombre) {
        case "camara":
            alert(`${usuario} quiso pagar ${monedaEncontrada.nombre} con valor de ${monedaEncontrada.precio} pesos Argentinos`);
            break;
        case  "parlante":
            alert(`${usuario} quiso pagar ${monedaEncontrada.nombre} con valor de ${monedaEncontrada.precio} pesos Argentinos`);
            break;
        case  "celular":
            alert(`${usuario} quiso pagar ${monedaEncontrada.nombre} con valor de ${monedaEncontrada.precio}  pesos Argentinos`);
            break;
        case "tele":
            alert(`${usuario} quiso pagar ${monedaEncontrada.nombre} con valor de ${monedaEncontrada.precio}  pesos Argentinos`);
            break;
        default:
            alert(`Perdon no vendemos/tenemos este producto`);
            break;
    }
    /* una despedida para el usuario */

    if (compra === monedaEncontrada.nombre) {
        alert(`Gracias por su compra vuelva pronto`)
    }else{
        alert(`ès una lastima que no haya decidido comprar, vuelva pronto`)
    }
}

compras()


