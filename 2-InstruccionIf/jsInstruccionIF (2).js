function mostrar()
{
//tomo la edad  

var edad;
var mensaje;
mensaje = "Es mayor de edad";

edad = parseInt(document.getElementById("edad").value);

if (edad >= 18) {
    alert(mensaje);
}

}//FIN DE LA FUNCIÓN