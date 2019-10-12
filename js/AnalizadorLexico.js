function analizarLinea(linea, numeroLinea) {
    //Cuenta el numero de columnas
    var numeroColumna = 0;
    //Aqui ingresan las lineas del texto por separado, se verifica que la linea no se vacia
    if (linea !== "") {
        //Se separan las lineas por palabras
        var palabra = linea.split(" ");

        //Se verifica que la palabra no sea vacia
        if (palabra !== "") {
            //Por cada palabra, hacer:
            numeroColumna +=1;

            if(analizarReservadaBoolean(palabra) !== "ninguno"){
                var token = new Token(palabra, analizarReservadaBoolean(palabra), numeroLinea, numeroColumna);
                
            }

            console.log(palabra);

            
            for(var i = 0; i < palabra.length; i++) {
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

function newFunction() {
    return "";
}

var mensaje = function analizarReservadaBoolean(palabra){
    //Si devuelve ninguno es porque no es palabra reservada ni boolean
    mensaje = "ninguno";

    //Coomprueba si es alguna palabra reservada o boolean
    switch(palabra){
        case "variable":
            mensaje = "palabra reservada";
            break;
            case "entero":
            mensaje = "palabra reservada";
            break;
            case "decimal":
            mensaje = "palabra reservada";
            break;
            case "booleano":
            mensaje = "palabra reservada";
            break;
            case "cadena":
            mensaje = "palabra reservada";
            break;
            case "si":
            mensaje = "palabra reservada";
            break;
            case "sino":
            mensaje = "palabra reservada";
            break;
            case "mientras":
            mensaje = "palabra reservada";
            break;
            case "hacer":
            mensaje = "palabra reservada";
            break;
            case "VERDADERO":
            mensaje = "boolean";
            break;
            case "FALSO":
            mensaje = "boolean";
            break;
    }

    return mensaje;
}
