var input = myForm.myInput;
var reader = new FileReader;

input.addEventListener('change', onChange);


function onChange(event) {
    //En el documento se 
    var file = event.target.files[0];

    reader.readAsText(file);

    reader.onload = onLoad;

}

function onLoad() {
    var result = reader.result; //Se obtiene el texto
    //Separa las lineas del archivo
    var lineas = result.split('\n');

    var lineaActual = 0;

    for (var linea of lineas) {
        lineaActual += 1;

        console.log('[linea]', linea)

        var texto;
        texto = document.getElementById("salidaTexto");
        texto.value = texto.value + (linea);

        analizarLinea(linea, lineaActual);


        //if(linea === passwordBuscar) {
        // Encontraste contraseña
        //}
    }

}

