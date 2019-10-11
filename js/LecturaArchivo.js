var input = myForm.myInput;
var reader = new FileReader;

input.addEventListener('change', onChange);


function onChange(event) {
  var file = event.target.files[0];
  
  reader.readAsText(file);
  
  reader.onload = onLoad;
  
}

function onLoad() {
  var result = reader.result; // Obtienes el texto
  //Separa las lineas del archivo
  var lineas = result.split('\n');
  
  
  // o lineas.forEach(function(linea){ ... })
  // o lineas.find(function(linea){ return linea == contraseña })
  var lineaActual = 0;

  for(var linea of lineas) {
      lineaActual += 1;

    console.log('[linea]', linea)

    var texto;
    texto = document.getElementById("salidaTexto");

    texto.value = texto.value + (lineaActual + linea);

    //if(linea === passwordBuscar) {
      // Encontraste contraseña
    //}
  }
  
}

