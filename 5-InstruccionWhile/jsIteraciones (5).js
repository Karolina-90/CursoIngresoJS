function mostrar()
{
var sexo = prompt("ingrese f ó m .");

document.getElementById('Sexo').value=sexo;

while ((sexo != "f" ) && (sexo != "m")) {
    alert("El sexo es incorrecto");
    var sexo = prompt("ingrese F ó M .");
    document.getElementById('Sexo').value=sexo;
 }

}//FIN DE LA FUNCIÓN