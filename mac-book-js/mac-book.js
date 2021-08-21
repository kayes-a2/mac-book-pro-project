
// extra product (memory/storage/delivery) cost function (start)
function extraProductCost(product, price) {
    const productCost = document.getElementById(product + '-cost');
    productCost.innerText = price;


    totalCost()
}
// extra product (memory/storage/delivery) cost function (end)



// equation of total cost function (start)
function totalCost() {

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCoast = document.getElementById('delivery-cost').innerText;

    const total = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCoast)

    //total price & final price
    document.getElementById('total-price').innerText = total;
    document.getElementById('final-cheakout-price').innerText = total;

}
// equation of total cost function (end)


// add event handeler on memory button (start)
document.getElementById('eight-gb-memory').addEventListener('click', function () {
    extraProductCost('memory', 0);
})


document.getElementById('sixteen-gb-memory').addEventListener('click', function () {
    extraProductCost('memory', 180);
})
// add event handeler on memory button (end)



// add event handeler on storage button (start)
document.getElementById('storage-one').addEventListener('click', function () {
    extraProductCost('storage', 0);
})

document.getElementById('storage-two').addEventListener('click', function () {
    extraProductCost('storage', 100);
})

document.getElementById('storage-three').addEventListener('click', function () {
    extraProductCost('storage', 180);
})
// add event handeler on storage button (end)


// add event handeler on delivery button (start)
document.getElementById('free-delivery').addEventListener('click', function () {
    extraProductCost('delivery', 0);
})

document.getElementById('paid-delivery').addEventListener('click', function () {
    extraProductCost('delivery', 20);
})
// add event handeler on delivery button (end)


// add event handeler on promo code button (start)
document.getElementById('apply-promo-code').addEventListener('click', function () {
    const promoCode = document.getElementById('input-promo-code');
    const promoCodeText = promoCode.value;

    // promo code condition cheaking (start)
    if (promoCodeText == 'stevekaku') {
        const discountPrice = document.getElementById('final-cheakout-price');
        const discountPriceText = discountPrice.innerText;
        discountPrice.innerText = (discountPriceText / 5) * 4;
        promoCode.value = '';
    }
    else {
        promoCode.value = "WRONG (DON'T MATCH)";
        // promoCode.value = '';
    }
    // promo code condition cheaking (end)

})
// add event handeler on promo code button (end)



