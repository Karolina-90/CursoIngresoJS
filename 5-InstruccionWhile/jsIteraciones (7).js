function mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while (respuesta == 'si') {
		numero = parseInt(prompt("Ingrese un número: "));
		acumulador = acumulador + numero;
		contador++;
		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/contador;
		respuesta = prompt("¿Quiere ingresar otro número?");
	} // FIN DEL WHILE

}//FIN DE LA FUNCIÓN