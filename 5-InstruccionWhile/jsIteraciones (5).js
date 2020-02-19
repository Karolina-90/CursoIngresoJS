function mostrar()
{
var sexo = prompt("Ingrese f ó m .");

sexo = sexo.toLocaleLowerCase();

while ((sexo != "f" ) && (sexo != "m")) {
    alert("El sexo es incorrecto");
    var sexo = prompt("ingrese F ó M .");
    document.getElementById('Sexo').value=sexo;
}

switch (sexo) {
    case "f":
        sexo = "Femenino";
        break;
    case "m":
        sexo = "Masculino";
        break;
}

document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN