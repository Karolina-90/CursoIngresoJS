function mostrar()
{
	// declarar variables
	var numero;
	var respuesta='si';
	var maximo;
	var minimo;
	var flag;

	//respuesta = respuesta.toLocaleUpperCase(); ??
	
	//numero = parseInt(prompt("Ingrese un número: "));
	while(respuesta=='si')	{

		numero = parseInt(prompt("Ingrese un número: "));   //parseInt(numero);
		 
		//Validar dato
			while (isNaN(numero))  {
				numero = prompt("Lo que ingresaste no era un numero. Ingrese un numero: ");
				numero = parseInt(numero);
			}

			if (flag == 0) {

				maximo = numero;
				minimo = numero;
				flag = 1;

			} else if(numero > maximo) {

				maximo = numero;

			} else if(numero > maximo) {
				
				minimo = numero;
			}
  	}
 
			document.getElementById("maximo").value = maximo;
			document.getElementById("minimo").value = minimo;

/*

		if (numero < minimo) { 
			minimo = numero; 
		} 
		if (numero > maximo) {
			maximo = numero;
		}

		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;

		respuesta = prompt("¿Quiere ingresar otro número?");

		if (respuesta == 'no') {
			respuesta = 'no';
		}
		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;
		
	} */

}//FIN DE LA FUNCIÓN