// Variables y Operaciones

1️⃣
- Es un espacio reservado en memoria.
- Declarar separa el espacio en memoria y le da el nombre. Al inicializar se da el valor de la variable.
- Al sumar se hace la operación matemática y se muestra el resultado de la misma. Al concatenar se unen los valores.
- El operador +

2️⃣
- nombre => string
- apellido => string
- user => string
- edad => number
- email => string
- mayorEdad => boolean
- dineroAhorrado => number
- deudas => number

3️⃣
var nombre = "Pepito";
var apellido = "Perez";
var user = "pepitoperez";
var edad = 20;
var email = "pepitoperez@email.com";
var mayorEdad = true;
var dineroAhorrado = 5000;
var deudas = 100;

4️⃣
var nombre = prompt("¿Cuál es su nombre?");
var apellido = prompt("¿Cuál es su apellido?");
console.log(nombre + " " + apellido);

var dineroAhorrado = prompt("¿Cuánto dinero ahorrado tiene?");
var deudas = prompt("¿Cuánto es el valor total de sus deudas?");
console.log(dineroAhorrado - deudas);

// Funciones

1️⃣
- Un bloque de código con una serie de pasos o tarea a ejecutar.
- Permite desarrollar tareas específicas. Ayuda a simplificar el código.
- El parámetro es la variable que tiene la función. El argumento es el valor de la variable.

2️⃣
function presentation(name, lastname, nickname) {
    return "Mi nombre es " + name + " " + lastname + ", pero prefiero que me digas " + nickname;
}
console.log(presentation("Juan David", "Castro Gallego", "juandc"));

// Condicionales

1️⃣
- Conjunto de instrucciones que se ejecutan cuando una condición es verdadera.
- IF, ELSE, ELSE IF. Evaluan si una condición es verdadera o falsa y cumplen unas instrucciones según el resultado de la evaluación. Preciso para pocos casos. SWITCH perfectgo para situaciones en las que haya muchos casos y el objeto de evaluación sea distinto para cada uno.
- Si se puede.

2️⃣
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Explert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExplertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// Ciclos

1️⃣
- Una función que se ejecutará hasta que se cumpla una condición.
- For, For... of, While, Do While.
- Es un bloque de códgio qu ese ejecuta indefinidamente. Al no tener fin puede consumir muchos recursos, hace que el dispositivo de trabe y/o se reinicie.
- Si se puede.

2️⃣
let i = 0;
while(i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

let i = 10;
while(i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

3️⃣
result = 0;

while( result != "4") {
    result = prompt("¿Cuánto es 2 + 2?");
}
alert("¡Felicidades! Estás en lo correcto");

// Listas

1️⃣
- Estructura de datos. Puede almacenar distintos tipos de datos.
- Combinación entre palabras clave y valores. Conjunto de propiedades.
- Los objetos son mejores usarlos cuando los parámetros ya estan establecidos y se quiere guardar un conjutno de valores con relación que se pueden manejar por separado o unidos. Los arrays son convenientes cuando se quiere guardar información sin un orden estricto.
- Si se puede.
