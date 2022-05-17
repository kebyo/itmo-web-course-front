async function createPromocode() {
    const productName = document.createPromocodeForm.productName.value;
    const productUrl = document.createPromocodeForm.productUrl.value;
    const description = document.createPromocodeForm.description.value;
    const saleSize = document.createPromocodeForm.saleSize.value;
    const code = document.createPromocodeForm.code.value;

    return fetch('http://localhost:5000/promocodes', {
        method: 'POST',
        body: JSON.stringify({
            productName,
            productUrl,
            description,
            saleSize,
            code,
        })
    })
        .then(response => response.json());
}

async function updatePromocode() {

}

async function deletePromocode() {

}

async function getPromocode() {

}

export async function getAllPromocodes() {
   return fetch('http://localhost:5000/promocodes', {
        // credentials: true,
    })
        .then(response => response.json())
        // .then(body => console.log(body));
}
