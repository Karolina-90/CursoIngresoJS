/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno;
    var numeroDos;
    var resultado;
    var mensaje;

    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);

    resultado = numeroUno + numeroDos;

    mensaje = "La Suma es " + resultado;

    alert(mensaje);
}

function restar()
{
    var numeroUno;
    var numeroDos;
    var resultado;
    var mensaje;

    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);

    resultado = numeroUno - numeroDos;

    mensaje = "La resta es " + resultado;

    alert(mensaje);
}

function multiplicar()
{ 
    var numeroUno;
    var numeroDos;
    var resultado;
    var mensaje;

    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);

    resultado = numeroUno * numeroDos;

    mensaje = "La multiplicaciòn es " + resultado;

    alert(mensaje);
}

function dividir()
{
    var numeroUno;
    var numeroDos;
    var resultado;
    var mensaje;

    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);

    resultado = numeroUno / numeroDos;

    mensaje = "La divisiòn es " + resultado;

    alert(mensaje);
}

