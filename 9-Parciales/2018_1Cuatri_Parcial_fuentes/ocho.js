function mostrar()
{   //Se hace con while porque es hasta que el usuario quiera
    var letra;
    var numero;

    letra = prompt("Ingrese una letra: ");
    numero = parseInt(prompt("Ingrese un número entre -100 y 100: "));
    
    while (isNaN(numero) || numero < -100 || numero > 100 ) {
        numero = parseInt(prompt("Incorrecto! Ingrese un número entre -100 y 100: "));
    }


}
