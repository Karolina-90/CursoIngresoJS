function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';

	do {
		numero = parseInt(prompt("Ingrese un número: "));   //parseInt(numero);
		 
		//Validar dato
			while (isNaN(numero))  {
				numero = prompt("Lo que ingresaste no era un numero. Ingrese un numero: ");
				numero = parseInt(numero);
			}
	
			if (numero >= 0) {
				positivo = positivo + numero;
			} else {
				negativo = negativo * numero;
			}
	 

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN