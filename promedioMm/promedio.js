// 
// MEDIA ARITMÉTICA
// 
function calcularPromedio(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// 
// MEDIANA
// 
const lista1 = [
    500,
    8000,
    100,
    300,
];
lista1.sort((a, b) => a - b);

const mitadLista1 = parseInt(lista1.length / 2);

function par(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;
if (par(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioMediana = calcularPromedio([
        elemento1,
        elemento2,
    ]);

    mediana = promedioMediana;
} else {
    mediana = lista1[mitadLista1];
}

//
// MODA
//

const listaModa = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    2,
    2,
    1,
];

const listaModaCount = {};

listaModa.map(
    function (elemento) {
        if (listaModaCount[elemento]) {
            listaModaCount[elemento] = listaModaCount[elemento] += 1;
        } else {
            listaModaCount[elemento] = 1;
        }

    }
);

const listaModaArray = Object.entries(listaModaCount).sort(
    function (valorAcumuladoModa, nuevoValor) {
        return valorAcumuladoModa[1] - nuevoValor[1];
    }
);

const moda = listaModaArray[listaModaArray.length - 1];