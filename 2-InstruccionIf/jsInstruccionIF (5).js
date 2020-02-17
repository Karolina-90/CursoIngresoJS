function mostrar()
{
//tomo la edad  
var edad;
var mensaje; 

mensaje = "No es adolescente";
edad = parseInt(document.getElementById("edad").value);

if (!(edad >= 13 && edad <= 17)) {
    alert(mensaje);
}

}//FIN DE LA FUNCIÓN