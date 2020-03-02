function mostrar()
{

    var numero = parseInt(prompt("Ingrese un número: "));

    while (isNaN(numero)) {
        numero = parseInt(prompt("Incorrecto. Ingrese un número: "));
    }

    for (var i=0 ; i==numero ; i++) {
     
        document.write(i + "</br>");    
    
        if (i==10) {
            break;
        }



}//FIN DE LA FUNCIÓN