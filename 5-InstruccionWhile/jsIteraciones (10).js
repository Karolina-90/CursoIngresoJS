function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var positivos;
	var negativos;
	var numero;
	var cantNeg;
	var cantPos;
	var cantCeros;
	var cantidadPar;
	var promNeg;
	var promPos;
	var difPosNeg;

	while(respuesta!="no")
	{
		numero = parseInt(prompt("Ingrese un número: "));   //parseInt(numero);
		 
		//Validar dato
			while (isNaN(numero))  {
				numero = prompt("Lo que ingresaste no era un numero. Ingrese un numero: ");
				numero = parseInt(numero);
			}
		
	}

}//FIN DE LA FUNCIÓN