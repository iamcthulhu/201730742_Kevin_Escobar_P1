function analizarReservadaBoolean(palabra) {
    //Si devuelve ninguno es porque no es palabra reservada ni boolean
    var mensaje;

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
            break;
    }

    return mensaje;
}

var analizarSigno = function (palabra) {
    var mensaje = "no";

    if (palabra.charCodeAt(0) == 34 || palabra.charCodeAt(0) == 59) {
        if(palabra.length == 1 || palabra.length == 2){
            console.log(palabra.slice(1, 0));
            mensaje = "signo";
            return mensaje;
        }
    }
    return mensaje;
}

var analizarAgrupacion = function (palabra) {
    var mensaje = "no";

    if (palabra.charCodeAt(0) == 40 || palabra.charCodeAt(0) == 41 || palabra.charCodeAt(0) == 123 || palabra.charCodeAt(0) == 125 ) {
        if(palabra.length == 1 || palabra.length == 2){
            console.log(palabra.slice(1, 0));
            mensaje = "agrupacion";
            return mensaje;
        }
    }
    return mensaje;
}

var analizarOperador = function (palabra) {
    var mensaje = "no";

    if (palabra.charCodeAt(0) == 42 || palabra.charCodeAt(0) == 43 || 
            palabra.charCodeAt(0) == 45 || palabra.charCodeAt(0) == 47 || palabra.charCodeAt(0) == 37 || 
                palabra.charCodeAt(0) == 61 || palabra.charCodeAt(0) == 60 || palabra.charCodeAt(0) == 62 || 
                    (palabra.charCodeAt(0) == 61 && palabra.slice(1, 0).charCodeAt(0) == 61) || 
                        (palabra.charCodeAt(0) == 60 && palabra.slice(1, 0).charCodeAt(0) == 61) || 
                            (palabra.charCodeAt(0) == 62 && palabra.slice(1, 0).charCodeAt(0) == 61)) {
                            
        if(palabra.length == 1 || palabra.length == 2){
            console.log(palabra.slice(1, 0));
            mensaje = "operador";
            return mensaje;
        }
    }
    return mensaje;
}