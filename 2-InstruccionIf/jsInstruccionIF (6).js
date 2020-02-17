function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

if (edad >= 18) {
    alert("Mayor de edad");
} else if (edad < 13) {
    alert("Niño");
} else {
    alert("Adolescente");
}

}//FIN DE LA FUNCIÓN