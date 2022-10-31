let nombre = prompt ("Bienvenido a Cozy holidays departamentos! Cual es su nombre?");

let personas = parseInt(prompt(`cuantas personas desean hospedarse ${nombre} ?`)); 
switch (personas){ 
    case 1 : 
        alert ( "se le asigno departamento  monoambiente ,zona centrica con 1 cama queen"); 
        precioTotal(personas);
        break;  

    case 2 : 
        alert ( "se le asigno departamento monoambiente zona centrica con 1 cama queen y 1 sofa cama");
        precioTotal(personas);
        break; 
    case 3 : 
        alert ( "se le asigno departamento  de 2 habitaciones zona centrica con 1 cama queen y 2 single"); 
        precioTotal(personas);
        break;
    case 4   : 
        alert ( " se le asigno departamento  de 2 habitaciones zona centrica con 1 cama queen y 2 single"); 
        precioTotal(personas);
        break;
    default: 
        alert("lo siento, solo contamos con un maximo de 4 personas ") ;
        alert(" Esperamos verlo pronto")
        break;       
}  


/*================= FUNCIONES =========================== */

function precioTotal(personas){
    precioNoche = 1000 * personas;
    alert(`el precio a pagar por noche sera  ARS ${precioNoche} `);
    desc = prompt("Los usuarios del Banco Santander el dia de hoy tiene un 20% de descuento\nUsted opera con Santander?\n(SI/NO)").toLowerCase();
    if(desc === "si"){
        x = precioNoche * 0.2;
        precioFinal = precioNoche - x;
        alert(`el precio a total a pagar por noche sera  ARS ${precioFinal} `); 
    }else{
        alert(`el precio a pagar por noche sera  ARS ${precioNoche} `);
    }
}