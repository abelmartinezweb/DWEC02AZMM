//Creo que el "defer" en la etiqueta script del html sustituiría a este procedimiento de que se cargue la ventanda antes de ejecutar el js
window.onload = function(){

    //Variables donde se almacena la información del usuario:
    let nombre;
    let precio;
    let cantidad;
    //Variables que usaremos para los datos calculados que mostraremos al usuario:
    let subtotal;
    let descuento;
    let precioConDescuento;
    let totalPago;
    
    nombre = prompt("Introduzca el nombre o descripción del producto:"); //cadena
    //Verificamos el nombre y si está correcto pasamos al siguiente paso:
    if (nombre != "" && nombre != null) {

        precio = prompt("Introduzca el precio en euros:"); //numero
        cantidad = prompt("Introduzca la cantidad:"); //numero
        //Comprobamos que sean numéricos los otros dos datos:
        if (
            (!isNaN(precio) && !isNaN(cantidad)) 
                            && 
            (precio > 0 && cantidad > 0)) {
            /*Si ambos son números entonces pasamos a hacer la conversión del tipo que queremos en cada uno,
            en este caso float para el precio y entero para la cantidad, si hubiese hecho el casting antes de
            comprobarlos, siempre detectaría que son numéricos, aunque no lo fuesen*/
            precio = parseFloat(precio);
            cantidad = parseInt(cantidad);

            //Si ambas condiciones están correctas iniciamos los calculos:
            subtotal = precio * cantidad;
            
            //Según la cantidad aplicamos un descuento u otro y por ende un precio con descuento y un total a pagar:
            if (cantidad < 3) {
                //Aquí guardamos el descuento para mostrarlo posteriormente como porcentaje:
                descuento = 0;
                //Calculamos el valor del descuento a aprtir del precio del producto:
                precioConDescuento = precio * 0;
                //Calculamos el precio total del producto despues del descuento:
                totalPago = precio - precioConDescuento;

            } else if (cantidad >= 3 && cantidad <= 5) {
                descuento = 10;
                precioConDescuento = precio * 0.1;
                totalPago = precio - precioConDescuento;


            } else if (cantidad > 5) {
                descuento = 20;
                precioConDescuento = precio * 0.2;
                totalPago = precio - precioConDescuento;

            }

            //Mostramos la estructura del ticket que pide el ejercicio:
            document.writeln("<h2>ElectroTech - Resumen de Ticket</h2>");
            document.writeln("<p><strong>Artículo: </strong>" + nombre + "</p>");
            document.writeln("<p><strong>Precio unitario: </strong>" + precio.toFixed(2) + "</p>");
            document.writeln("<p><strong>Subtotal bruto: </strong>" + subtotal.toFixed(2) + " € | <strong>Unidades: </strong>" + cantidad + "</p>");
            document.writeln("<p><strong>Descuento aplicado: </strong>" + descuento + "% (" + precioConDescuento + "€)</p>");
            document.writeln("<p><strong>TOTAL A PAGAR: " + totalPago.toFixed(2) + "</strong></p>");



        }else{
            document.write("<h1>La cantidad o el precio no han sido válidos</h1>");
        }

    }else{
        document.write("<h1>El nombre no ha sido válido</h1>");
    }

}