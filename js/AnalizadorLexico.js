function analizarLinea(linea, numeroLinea, todosTokens) {
    //Cuenta el numero de columnas
    var numeroColumna = 0;

    var identificador = "";
    //Aqui ingresan las lineas del texto por separado, se verifica que la linea no se vacia
    if (linea !== "") {
        //Se separan las lineas por palabras
        var palabra = linea.split(" ");

        //Se verifica que la palabra no sea vacia
        if (palabra !== "") {
            //Por cada palabra, hacer:


            console.log(palabra);


            for (var i = 0; i < palabra.length; i++) {

                numeroColumna += 1;

                if (analizarReservadaBoolean(palabra[i]) != "no") {

                    escribir(palabra[i], analizarReservadaBoolean(palabra[i]), numeroLinea, numeroColumna, "salidaTokens");

                }else if(analizarSigno(palabra[i]) != "no"){

                    escribir(palabra[i], analizarSigno(palabra[i]), numeroLinea, numeroColumna, "salidaTokens");

                }else if(analizarAgrupacion(palabra[i]) != "no"){

                    escribir(palabra[i], analizarAgrupacion(palabra[i]), numeroLinea, numeroColumna, "salidaTokens");

                }else if(analizarOperador(palabra[i]) != "no"){

                    escribir(palabra[i], analizarAgrupacion(palabra[i]), numeroLinea, numeroColumna, "salidaTokens");

                }

                //Se separan los caracteres de cada palabra
                var caracter = palabra[i].split("");
                //Se verifica que los caracteres no sean vacios
                if (caracter !== "") {

                    console.log(caracter);


                } else {
                    return;
                }
            }
        } else {
            return;
        }
    } else {
        return;
    }
}

function escribir(palabra, identificador, numeroLinea, numeroColumna, texto) {

    /*var token = new Token(palabra, identificador, numeroLinea, numeroColumna);
    todosTokens.push(token);*/

    var salida;
    salida = document.getElementById(texto);
    salida.value = salida.value + ("   Patron: " + palabra + "\nTipo: " + identificador + "\nNumeroLinea: " + numeroLinea + "\nNumeroColumna: " + numeroColumna);


}



