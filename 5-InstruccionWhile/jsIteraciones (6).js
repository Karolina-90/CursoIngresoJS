function mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;

	contador = 1;

		while (contador <= 5) {
		numero = parseInt(prompt("Ingrese el número " + contador + ":"));
		//parseInt(numero);
		contador++;
		acumulador = acumulador + numero;
		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/5;
	}

}//FIN DE LA FUNCIÓN