// const priceOrigin = 120;
// const desct = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

const coupons = [
    "Empecemos_Suave15",
    "Mucho_Mas30",
    "Vamos_Por_Mas25",
];

function buttonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
    } else if (couponValue === "Empecemos_Suave15") {
        descuento = 15;
    } else if (couponValue === "Mucho_Mas30") {
        descuento = 30;
    } else if (couponValue === "Vamos_Por_Mas25") {
        descuento = 25;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento a pagar es: $" + precioConDescuento;
}

// console.log({
//     priceOrigin,
//     desct,
//     percentPriceDesct,
//     priceDesct,
// }