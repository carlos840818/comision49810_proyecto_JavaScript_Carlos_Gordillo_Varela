const servicios = [
    {nombre: 'desarrollo web', precio: 300},
    {nombre: 'analisis de datos', precio: 150},
    {nombre: 'diseño ux/ui', precio: 100},
    {nombre: 'trading', precio: 100},
];

let ventas = []

let seleccion = prompt("Bienvenido, ¿desea adquirir algún servicio? si / no")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor debes ingresar si y/o no")
    seleccion = prompt("¿Deseas adquirir algún servicio?")
}

if(seleccion == "si"){
    alert("A continuación nuestra lista de productos:")
    let todosLosServicios = servicios.map((servicio) => servicio.nombre + " " + servicio.precio + "$");
    alert(todosLosServicios.join("\n"))
}else if(seleccion == "no"){
    alert('Gracias por tu visita, esperamos poder asesorarte pronto.')
}

while(seleccion != "no"){
    let servicio = prompt('Agregar al carrito');
    let precio = 0;

if(servicio == 'desarrollo web' || servicio == "analisis de datos" || servicio == 'diseño ux/ui' || servicio == 'trading'){
    switch(servicio){
        case 'desarrollo web':
            precio = 300;
            break;
        case 'analisis de datos':
            precio = 150;
            break;
        case 'diseño ux/ui':
            precio = 100;
            break;
        case 'trading':
            precio = 100;
            break;
        default:
            break;   
        }
    let unidades = parseInt(prompt("¿Cuantos servicios deseas adquirir?"))

    ventas.push({servicio, unidades, precio})
    console.log(ventas)
    }else{
        alert("Lo sentimos, no ofrecemos ese servicio")
    }

    seleccion = prompt('¿Desea adquirir otro servicio?')

    while(seleccion === "no"){
        alert("Gracias por su compra. Hasta Pronto!")
        ventas.forEach((ventasFinal) => {
            console.log(`producto: ${ventasFinal.servicio}, unidades: ${ventasFinal.unidades},
            total a pagar: ${ventasFinal.unidades * ventasFinal.precio}`)
        })
    break;
    }
}

const total = ventas.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El total a pagar por su compra es ${total}`)
console.log(`El total a pagar por su compra es ${total}`)



