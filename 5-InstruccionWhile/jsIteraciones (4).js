function mostrar()
{
	var numero = parseInt(prompt("Ingrese un número entre 0 y 10."));

//	while (numero > 10 ) {    Mi forma
//	while (numero < 0 OR numero > 10 OR isNaN (numero)) {
	while (!(numero >= 0 && numero <= 10)) {		
	var numero = parseInt(prompt("Número incorrecto, debe estar entre 0 y 10. Reingrese un nùmero. "));
}
	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN

/*Ferrete construcciòn
iluminacion
pinturas
no se que*/