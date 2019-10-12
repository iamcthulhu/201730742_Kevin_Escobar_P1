function analizarReservadaBoolean(palabra) {
    //Si devuelve ninguno es porque no es palabra reservada ni boolean
    var mensaje;
    //Elimina el ultimo caracter
    var palabra2 = palabra.slice(0, -1);

    //Coomprueba si es alguna palabra reservada o boolean
    switch (palabra) {
        case 'variable':
            mensaje = "palabra reservada";
            break;
        case 'entero':
            mensaje = "palabra reservada";
            break;
        case 'decimal':
            mensaje = "palabra reservada";
            break;
        case 'booleano':
            mensaje = "palabra reservada";
            break;
        case 'cadena':
            mensaje = "palabra reservada";
            break;
        case 'si':
            mensaje = "palabra reservada";
            break;
        case 'sino':
            mensaje = "palabra reservada";
            break;
        case 'mientras':
            mensaje = "palabra reservada";
            break;
        case 'hacer':
            mensaje = "palabra reservada";
            break;
        case 'VERDADERO':
            mensaje = "boolean";
            break;
        case 'FALSO':
            mensaje = "boolean";
            break;
        default:
            //Sirve para eliminar el error cuando una cadena almacena un salto de linea al final
            switch (palabra2) {
                case 'variable':
                    mensaje = "palabra reservada";
                    break;
                case 'entero':
                    mensaje = "palabra reservada";
                    break;
                case 'decimal':
                    mensaje = "palabra reservada";
                    break;
                case 'booleano':
                    mensaje = "palabra reservada";
                    break;
                case 'cadena':
                    mensaje = "palabra reservada";
                    break;
                case 'si':
                    mensaje = "palabra reservada";
                    break;
                case 'sino':
                    mensaje = "palabra reservada";
                    break;
                case 'mientras':
                    mensaje = "palabra reservada";
                    break;
                case 'hacer':
                    mensaje = "palabra reservada";
                    break;
                case 'VERDADERO':
                    mensaje = "boolean";
                    break;
                case 'FALSO':
                    mensaje = "boolean";
                    break;
                default:
                    mensaje = "no";
                    break;
            }
            mensaje = "no";
            break;
    }

    return mensaje;
}

var analizarSigno = function (palabra) {
    var mensaje = "no";
    //Verifica que la palabra que ingreso sea algun signo
    if (palabra.charCodeAt(0) == 34 || palabra.charCodeAt(0) == 59) {
        if (palabra.length == 1 || palabra.length == 2) {
            console.log(palabra.slice(1, 0));
            mensaje = "signo";
            return mensaje;
        }
    }
    return mensaje;
}

var analizarAgrupacion = function (palabra) {
    var mensaje = "no";
    //Verifica que la palabra que ingreso sea algun signo de agrupacion
    if (palabra.charCodeAt(0) == 40 || palabra.charCodeAt(0) == 41 || palabra.charCodeAt(0) == 123 || palabra.charCodeAt(0) == 125) {
        if (palabra.length == 1 || palabra.length == 2) {
            console.log(palabra.slice(1, 0));
            mensaje = "agrupacion";
            return mensaje;
        }
    }
    return mensaje;
}

var analizarOperador = function (palabra) {
    var mensaje = "no";
    //Verifica que la palabra que ingreso sea alguno de los operadores
    if (palabra.charCodeAt(0) == 42 || palabra.charCodeAt(0) == 43 ||
        palabra.charCodeAt(0) == 45 || palabra.charCodeAt(0) == 47 || palabra.charCodeAt(0) == 37 ||
        palabra.charCodeAt(0) == 61 || palabra.charCodeAt(0) == 60 || palabra.charCodeAt(0) == 62 ||
        (palabra.charCodeAt(0) == 61 && palabra.slice(1, 0).charCodeAt(0) == 61) ||
        (palabra.charCodeAt(0) == 60 && palabra.slice(1, 0).charCodeAt(0) == 61) ||
        (palabra.charCodeAt(0) == 62 && palabra.slice(1, 0).charCodeAt(0) == 61)) {

        if (palabra.length == 1 || palabra.length == 2) {
            console.log(palabra.slice(1, 0));
            mensaje = "operador";
            return mensaje;
        }
    }
    return mensaje;
}

var analizarIdentificador = function (palabra) {
    var mensaje = "identificador";

    var caracter = palabra.split("");

    //Verifica que el primer caracter sea una letra
    if (!(palabra[0].charCodeAt() > 64 && palabra[0].charCodeAt() < 91)) {
        if (!(palabra[0].charCodeAt() > 96 && palabra[0].charCodeAt() < 123)) {
            mensaje = "no";
            return mensaje;
        }
    }

    for (var i = 0; i < caracter.length - 1; i++) {
        //Si el primer caracter es una letra, verifica que los demas sean letras y numeros

        if (!(caracter[i].charCodeAt() > 64 && caracter[i].charCodeAt() < 91)) {
            if (!(caracter[i].charCodeAt() > 96 && caracter[i].charCodeAt() < 123)) {
                if (!(caracter[i].charCodeAt() > 47 && caracter[i].charCodeAt() < 58)) {
                    mensaje = "no";
                    return mensaje;
                }

            }

        }

    }

    return mensaje;
}

var analizarNumeroEntero = function (palabra) {
    var mensaje = "numero entero";
    //Divide la palabra en caracteres
    var caracter = palabra.split("");

    for (var i = 0; i < caracter.length - 1; i++) {
        //Verifica que todos los caracteres sean numeros

        if (!(caracter[i].charCodeAt() > 47 && caracter[i].charCodeAt() < 58)) {

            mensaje = "no";
            return mensaje;

        }
    }
    return mensaje;
}

var analizarNumeroFloat = function (palabra) {
    var mensaje = "numero float";
    var banderaPunto = 0;
    //Divide la palabra en caracteres
    var caracter = palabra.split("");

    for (var i = 0; i < caracter.length - 1; i++) {
        //Verifica que todos los caracteres sean numeros
        if (caracter[i] == ".") {
            banderaPunto += 1;
        }

        if (!(caracter[i].charCodeAt() > 47 && caracter[i].charCodeAt() < 58)) {
            if (banderaPunto > 1) {
                mensaje = "no";
                return mensaje;
            }
        }
    }
    return mensaje;
}