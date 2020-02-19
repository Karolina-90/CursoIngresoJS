function mostrar()
{
//	var contador=1;
	var contador=0;
	var acumulador=0;
	var numero;
	
	//Ingresar el numero

	do {
	numero = parseInt(prompt("Ingrese un número: "));   //parseInt(numero);
 	
	//Validar dato
		while (isNaN(numero))  {
			numero = prompt("Lo que ingresaste no era un numero. Ingrese un numero: ");
			numero = parseInt(numero);
		}
	
	//Numero Ok
	contador++;
	acumulador = acumulador + numero;

    } while (contador < 5);	

		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/contador;

	/*
	while (contador <= 5) {
	numero = parseInt(prompt("Ingrese el número " + contador + ":"));   //parseInt(numero);
	contador++;
	acumulador = acumulador + numero;
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;
	}  */

}//FIN DE LA FUNCIÓN