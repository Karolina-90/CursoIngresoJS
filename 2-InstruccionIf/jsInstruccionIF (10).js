function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio = Math.round(Math.random()*10);
	alert("Número aleatorio entre 0 y 10: " + aleatorio);

	if (aleatorio >= 9) {
		alert("Excelente");
	} else if (aleatorio < 4) {
		alert("Vamos, la próxima se puede");
	} else {
		alert("Aprobado");
	}

}//FIN DE LA FUNCIÓN