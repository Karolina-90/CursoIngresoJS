function mostrar()
{
    var contador= 0;
    var numero = parseInt(prompt("Ingrese un número: "));

    while (isNaN(numero)) {
        numero = parseInt(prompt("Incorrecto. Ingrese un número: "));
    }

    for (var i=0 ; i<=numero ; i+=2) {  //numero-2
        contador++;
        document.write(i + "</br>");
    }
    document.write("Cantidad de números pares encontrados: " + contador);
    
}//FIN DE LA FUNCIÓN