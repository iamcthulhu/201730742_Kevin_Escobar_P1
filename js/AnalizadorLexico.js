function analizarLinea(linea, numeroLinea) {
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

                /*if(i == (palabra.length - 1)){
                    var palabra2 = palabra[i].slice(0, -1);
                    palabra = palabra2;
                }*/
                //Verifica una por una todas las funciones de los automatas
                if (analizarReservadaBoolean(palabra[i]) != "no") {

                    todosTokens.push(escribir(palabra[i], analizarReservadaBoolean(palabra[i]), numeroLinea, numeroColumna, "salidaTokens"));

                }else if(analizarSigno(palabra[i]) != "no"){

                    todosTokens.push(escribir(palabra[i], analizarSigno(palabra[i]), numeroLinea, numeroColumna, "salidaTokens"));

                }else if(analizarAgrupacion(palabra[i]) != "no"){

                    todosTokens.push(escribir(palabra[i], analizarAgrupacion(palabra[i]), numeroLinea, numeroColumna, "salidaTokens"));

                }else if(analizarOperador(palabra[i]) != "no"){

                    todosTokens.push(escribir(palabra[i], analizarOperador(palabra[i]), numeroLinea, numeroColumna, "salidaTokens"));

                }else if(analizarIdentificador(palabra[i]) != "no"){

                    todosTokens.push(escribir(palabra[i], analizarIdentificador(palabra[i]), numeroLinea, numeroColumna, "salidaTokens"));

                }else if(analizarNumeroEntero(palabra[i]) != "no"){

                    todosTokens.push(escribir(palabra[i], analizarNumeroEntero(palabra[i]), numeroLinea, numeroColumna, "salidaTokens"));

                }else if(analizarNumeroFloat(palabra[i]) != "no"){

                    todosTokens.push(escribir(palabra[i], analizarNumeroFloat(palabra[i]), numeroLinea, numeroColumna, "salidaTokens"));

                }else{
                    todosTokens.push(escribir(palabra[i], "error", numeroLinea, numeroColumna, "salidaErrores"));
                }

            }
        } else {
            return;
        }
    } else {
        return;
    }
}

var escribir = function (palabra, identificador, numeroLinea, numeroColumna, texto) {
    //Crea un nuevo objeto token
    var token = new Token(palabra, identificador, numeroLinea, numeroColumna);
    //Escribe los resultados en los cuadros de texto
    var salida;
    salida = document.getElementById(texto);
    salida.value = salida.value + ("   Patron: " + palabra + "\nTipo: " + identificador + "\nNumeroLinea: " + numeroLinea + "\nNumeroColumna: " + numeroColumna);

    return token;

}



