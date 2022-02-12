// date show 
const date = new Date();
document.getElementById('show-date').innerText = date.toLocaleDateString();




document.getElementById('detail-submit-btn').addEventListener('click', function() {

    // get main buyer input
    const inputFieldBuyer = document.getElementById('buyer-details-input');
    // display buyer info 
    document.getElementById('buyer-info').innerText = inputFieldBuyer.value;
    inputFieldBuyer.value = ''
        // get item name

});

document.getElementById('add-details-btn').addEventListener('click', function() {
    const itemName = document.getElementById('item-name-input');

    const priceItems = document.getElementById('item-price-input');
    const quantiyItems = document.getElementById('item-quantity-input');

    // create element
    const tr = element('tr');
    const th = element('th');
    const td1 = element('td')
    const td2 = element('td')
    const td3 = element('td')

    const totaPrice = parseInt(priceItems.value) * parseInt(quantiyItems.value);
    // added chiled 
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    th.innerText = itemName.value;
    td1.innerText = priceItems.value;
    td2.innerText = quantiyItems.value;
    td3.innerText = totaPrice;
    td3.classList.add('totalPRC')
    document.getElementById('info-table').appendChild(tr);
    subTotal();
    itemName.value = '';
    priceItems.value = '';
    quantiyItems.value = '';

});

function element(tagName) {
    return document.createElement(tagName);
}
// for sub total 
function subTotal() {
    let allTotalPrice = 0;
    const subTotal = document.getElementById('sub-total');
    const totalPrices = document.getElementsByClassName('totalPRC');
    for (const totalPrice of totalPrices) {
        allTotalPrice += parseInt(totalPrice.innerText);
    }
    // display subtotal
    const subTotalPrice = allTotalPrice
    subTotal.innerText = subTotalPrice;

    // get tax
    const totalTax = document.getElementById('tax');

    // disply tax
    const totalTaxPrice = allTotalPrice * .2;
    totalTax.innerText = totalTaxPrice.toFixed(2);
    // get grandTotal
    const grandTotal = document.getElementById('grand-total');
    const grandTotalPrice = totalTaxPrice + subTotalPrice;
    grandTotal.innerText = grandTotalPrice;

    document.getElementById('grand-total-2').innerText = grandTotalPrice;

}