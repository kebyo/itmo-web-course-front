import { getAllPromocodes } from './promocode.js';

function initPromocodesInInterface(promocodes) {
    const main = document.querySelector('main');

    main.innerHTML = '';
    const divPromocodes = [];

    for (const promocode of promocodes) {
        const div = document.createElement('div');

        div.innerHTML =
            `
                <h1>Продукт</h1>
                <h2>Название</h2>
                <p>${promocode.productName}</p>
                <h2>Ссылка</h2>
                <a>${promocode.productUrl}</a>
                
                <h1>Скидка</h1>
                <h2>Описание</h2>
                <p>${promocode.description}</p>
                <h2>Размер скидки</h2>
                <p>${promocode.saleSize}</p>
                <h2>Прмокод:</h2>
                <p>${promocode.code}</p>             
            `
        div.className = 'promocode'
        divPromocodes.push(div);
    }

    divPromocodes.forEach(i => main.appendChild(i));
}


window.onload = async function (ev) {
    const promocodes = await getAllPromocodes();

    initPromocodesInInterface(promocodes);
}