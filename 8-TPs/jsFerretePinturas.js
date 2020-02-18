/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //(0 °F − 32) × 5/9 = 0 °C
    var temperaturaF;
    var temperaturaC;
   // parseInt(temperaturaC);

    temperaturaF = parseInt(document.getElementById("Temperatura").value);

    temperaturaC = temperaturaF - 32;
    temperaturaC = temperaturaC * 5 / 9;

    prompt(temperaturaF + " Fahrenheit son " + temperaturaC + " centígrados.");
}

function CentigradosFahrenheit () 
{
    //(0 °C × 9/5) + 32 = 32 °F
    var temperaturaC;
    var temperaturaF;
   // parseInt(temperaturaC);

    temperaturaC = parseInt(document.getElementById("Temperatura").value);

    temperaturaF = temperaturaC * 9 / 5;
    temperaturaF = temperaturaF + 32;

    prompt(temperaturaC + " Fahrenheit son " + temperaturaF + " centígrados.");
}
