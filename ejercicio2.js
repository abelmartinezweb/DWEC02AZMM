//Creo que el "defer" en la etiqueta script del html sustituiría a este procedimiento de que se cargue la ventanda antes de ejecutar el js
window.onload = function(){

    /**
     * Creo las variables. 
     * - precio: sin inicializar por que luego añadirá lo que introduzca el usuario en formato string.
     * - precioMax: inicializada a 0 por que se irá sumando y necesitamos que sea numérico desde el principio.
     * - total: igual a precioMax
     * - articulos: igual a las otras dos 
     */
let precio;
let precioMax = 0;
let total = 0;
let articulos = 0;

    /**
     * Bucle do-while para que ejecute ciertas sentencias antes de comprobar la condición.
     */
    do {
        //Pedimos al usuario el precio del articulo
        precio = prompt("Introduzca el precio del artículo:");

        /**
         * Un if para comprobar si hay que lanzar mensaje de error:
         * Lanza el mensaje si el dato introducido es No numérico o menor o igual a 0 a la vez que no es null ni está vacío
         */
        if ((isNaN(precio) || precio <= 0) && (precio != null && precio != "")) {
            window.alert("Error: Precio no válido. Introduce un número mayor que 0.");
        }

        /**
         * Para realizar las sumas a las variables también comprobamos que es numérico y mayor a 0:
         */
        if (!isNaN(precio) && precio > 0) {
            //sumamos al total el dato introducido, pasandolo a float.
            total += parseFloat(precio);
            //sumamos 1 al contador de articulos
            articulos++;
            
            /**
             * Dentro de todo esto comprobamos si el dato introducido es el mayor de todos los datos introducidos.
             */
            if (precio > precioMax) {
                //Si lo es entonces sustituimos el valor de precioMax, convirtiendo el dato a float.
                precioMax = parseFloat(precio);
            }
        }
        
        /**
         * La condicion para que se repita el bucle es que el dato sea diferente de 0, no sea null y no esté vacío.
         */
    } while (precio != 0 && precio != null && precio != "");

    /**
     * Si los articulos introducidos son 0, significa que ninguno ha sido valido y lanzamos un mensaje:
     */
    if (articulos == 0) {
        alert( "No se ha registrado ningún artículo en la cesta de la compra.");
        /**
         * En caso de que sea mayor que 0, habria introducido datos validos, por lo que imprimimos en pantalla los resultados
         * con la estructura que indica el ejercicio:
         */
    } else if (articulos > 0) {
        document.writeln("<p>ElectroTech - Resumen de Cierre de Caja (TPV)</p>");
        document.writeln("<p><strong>Artículos procesados en la compra: </strong>" + articulos + " unidades</p>");
        document.writeln("<p><strong>Importe total acumulado: </strong>" + total.toFixed(2) + " €</p>");
        document.writeln("<p><strong>Precio medio por artículo: </strong>" + (total/articulos).toFixed(2) + " €</p>");
        document.writeln("<p><strong>Artículo de mayor importe registrado: </strong>" + precioMax.toFixed(2) + " €</p>");
    }



}