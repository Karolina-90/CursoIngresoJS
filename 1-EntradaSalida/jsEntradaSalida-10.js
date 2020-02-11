/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var resultado;
    var aumento;
    var descuento;

    importe = parseInt(document.getElementById("importe").value);

    aumento = importe * 25;
    descuento = aumento / 100;
    resultado = importe - descuento;

    documento.getElementById("resultado").value = resultado;
}
