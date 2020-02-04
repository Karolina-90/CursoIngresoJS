/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno;
    var numeroDos;
    var numeroDosPars; //Declaraciòn de variable para Forma 2
    var resultado;
    
    numeroUno = parseInt(document.getElementById("numeroUno").value); //Forma 1 de resolver el parseInt
    numeroDos = document.getElementById("numeroDos").value;
    
    numeroDosPars = parseInt(numeroDos); //Forma 2 de resolver el parseInt

    resultado = numeroUno + numeroDosPars;
    alert(resultado);

    //alert(numeroUno + numeroDos); //Si no se pone parseInt, los concatena porque los interpreta como caracter.
}