console.log("Qué se cuentan");

// CUADRADO
console.group("Cuadrado");

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perímetro de tu cuadrado es: " + perimetro + " cm");
}

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área de tu cuadrado es: " + area + " cm²");
}


console.groupEnd();


// TRIÁNGULO
console.group("Triángulo");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function calcularPerimetroTriangulo() {
    const ladoA = document.getElementById("ladoA");
    const ladoB = document.getElementById("ladoB");
    const base = document.getElementById("base");
    const valueLadoA = Number(ladoA.value);
    const valueLadoB = Number(ladoB.value);
    const valueBase = Number(base.value);
    // const altura = document.getElementById("altura");
    // const valueAltura = altura.value;

    const perimetro = perimetroTriangulo(valueLadoA, valueLadoB, valueBase);
    alert("El perímetro de tu triángulo es: " + perimetro + " cm");
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function calcularAreaTriangulo() {
    const base = document.getElementById("base");
    const valueBase = Number(base.value);
    const altura = document.getElementById("altura");
    const valueAltura = Number(altura.value);

    const perimetro = areaTriangulo(valueBase, valueAltura);
    alert("El perímetro de tu triángulo es: " + perimetro + " cm");
}

console.groupEnd();


// Círculo
console.group("Círculo");

// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// const diametroCirculo = radioCirculo * 2;
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del círculo es: " + diametroCirculo + "cm");

const pi = Math.PI;
// console.log(pi)

// const perimetroCirculo = diametroCirculo * pi;
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

// const areaCirculo = (radioCirculo * radioCirculo) * pi;
function areaCirculo(radio) {
    return (radio * radio) * pi;
}
// console.log("El área del círculo es: " + areaCirculo + "cm²");

console.groupEnd();

// HTML
// HTML
// HTML

