//Creo que el "defer" en la etiqueta script del html sustituiría a este procedimiento de que se cargue la ventanda antes de ejecutar el js
window.onload = function () {
    


    /**
     * Declaración de variahles que vamos a necesitar:
     */
    let nombre;
    let precio;
    let cantidad;

    /**
     * Entrada de datos mediante prompt() junto a la validación de estos datos:
     */

    /**
     * El nombre no tenemos que validarlo asi que lo pedimos y lo dejamos tal cual:
     */
    nombre = prompt("Introduzca el nombre del artículo:");
    /**
     * Posteriormente pedimos el precio:
     */
    precio = prompt("Introduzca el precio del artículo en euros:");

    /**
     * Validamos que sea numérico y mayor que cero:
     */
    if (!isNaN(precio) && precio > 0) {
        /**
         * Si es así entonces entramos y pedimos la cantidad:
         */
        cantidad = prompt("Introduzca el número máximo de unidades a presupuestar en la tabla:");

        /**
         * Validamos que la cantidad sea en el rango esperado:
         */
        if (cantidad >= 5 && cantidad <= 15) {
            /**
             * Si es así, entonces Creamos la tabla y añadimos las cabeceras:
             */
            document.write('<div style=" text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center;">');

            document.write(`<h1>Tabla de descuentos de ${nombre}</h1>`);

            document.write('<table border="1" style="background-color: rgb(212, 214, 216); ">');
                document.write('<tr style="background-color: rgba(70, 73, 73, 0.49); color: white;">');
                    document.write("<th>Cantidad de unidades</th>");
                    document.write("<th>% Descuento</th>");
                    document.write("<th>Precio Unitario con Dto.</th>");
                    document.write("<th>Total a Pagar</th>");
                    document.write("<th>Ahorro Acumulado</th>");
                document.write("</tr>");

                /**
                 * Ahora creamos un bucle for para ir añadiendo a la tabla los datos que queremos por
                 */
            for (let index = 1; index <= cantidad; index++) {
                //Creamos la variable donde guardaremos el descuento según la cantidad de artículos:
                let descuento;

                /**Segun la cantidad aplicamos un descuento u otro: */
                if (index >= 1 && index <= 2) {
                    descuento = 0;
                }
                if (index >= 3 && index <= 5) {
                    descuento = 5;
                }
                if (index >= 6 && index <= 9) {
                    descuento = 10;
                }
                if (index >= 10) {
                    descuento = 15;
                }

                /**Ahora realizamos las operaciones y las guardamos en nuevas variables: */

                let precioConDto = parseFloat(precio) - (descuento * parseFloat(precio)/100);
                let total = index * precioConDto;
                let ahorroTotal = (index * precio) - total;

                /**Costruimos las filas de la tabla que se irán construyendo con los datos de las operaciones anteriores: */
                document.write("<tr>");
                    document.write('<td style="background-color: rgba(70, 73, 73, 0.49); color: aliceblue;">' + index + '</td>');
                    document.write("<td>" + descuento + "%</td>");
                    document.write("<td>" + precioConDto.toFixed(2) + "</td>");
                    document.write("<td>" + total.toFixed(2) + "</td>");
                    document.write("<td>" + ahorroTotal.toFixed(2) + "€</td>");
                document.write("</tr>");
                
            }

            document.write("</table>");
            document.write('</div>');

            
        }else{
            /**
             * Si no está en el rango lanzamos el mensaje de error y termina el programa sin tabla:
             */
            document.write('<h3 style="color: red; text-align: center;">El rango permitido es de 5 a 15 unidades.</h3>');
        }
        
    }else{
        /**
         * Si el precio no es válido informamos al usuario y termina la ejecución sin tabla:  
         */ 
        document.write('<h3 style="color: red; text-align: center;">El precio no es válido.</h3>');
    }
   

}