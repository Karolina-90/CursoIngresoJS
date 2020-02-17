function mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;
var mensaje; 

mensaje = "Es muy pequeño para NO ser soltero";
edad = parseInt(document.getElementById("edad").value);
estadoCivil = document.getElementById("estadoCivil").value;
    
if (edad < 18 && estadoCivil != "Soltero") {
    alert(mensaje);
}

}//FIN DE LA FUNCIÓN