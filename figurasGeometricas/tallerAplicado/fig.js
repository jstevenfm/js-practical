// CUADRADO
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


// TRIÁNGULO
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

    const perimetro = perimetroTriangulo(valueLadoA, valueLadoB, valueBase);
    alert("El perímetro de tu triángulo es: " + perimetro + " cm");
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function calcularAreaTriangulo() {
    const base = document.getElementById("base");
    const valueBase = Number(base.value);
    const altura = document.getElementById("altura");
    const valueAltura = Number(altura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert("El perímetro de tu triángulo es: " + area + " cm²");
}

// Círculo
function diametroCirculo(radio) {
    return radio * 2;
}
function calcularDiametroCirculo() {
    const radio = document.getElementById("radio");
    const valueRadio = radio.value;

    const diametro = diametroCirculo(valueRadio);
    alert("El diametro del círculo es: " + diametro + " cm");
}

const pi = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
function calcularPerimetroCirculo() {
    const radio = document.getElementById("radio");
    const valueRadio = radio.value;

    const perimetro = perimetroCirculo(valueRadio);
    alert("El perímetro del círculo es: " + perimetro + " cm");
}

function areaCirculo(radio) {
    return (radio * radio) * pi;
}
function calcularAreaCirculo() {
    const radio = document.getElementById("radio");
    const valueRadio = radio.value;

    const area = areaCirculo(valueRadio);
    alert("El área de tu círculo es: " + area + " cm²");
}
