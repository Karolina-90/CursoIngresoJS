function mostrar()
{
	// declarar variables
	var numero;
	var respuesta='si';
	var maximo = Number.MIN_VALUE;
	var minimo = Number.MAX_VALUE;
	
	//numero = parseInt(prompt("Ingrese un número: "));
	while(respuesta=='si')	{

		numero = parseInt(prompt("Ingrese un número: "));

		if (numero < minimo) { //DUDA: La primera vez, podría ingresar un número mayor a menor que a su vez es menor a mayor
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
		
	}

}//FIN DE LA FUNCIÓN