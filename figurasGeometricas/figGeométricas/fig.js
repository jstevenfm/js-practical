console.log("Qué se cuentan");

// Cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Cada lado del cuadrado mide: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm²");

console.groupEnd();


// Triángulo
console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
);
console.log("El altura del triángulo es: " + alturaTriangulo + "cm");


const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm²");

console.groupEnd();


// Círculo
console.group("Círculo");

const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

const diametroCirculo = 8;
console.log("El diametro del círculo es: " + diametroCirculo + "cm");

const pi = Math.PI;
console.log(pi)

const perimetroCirculo = diametroCirculo * pi;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("El área del círculo es: " + areaCirculo + "cm²");

console.groupEnd();
 