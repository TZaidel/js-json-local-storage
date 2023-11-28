function createProduct(arr) {
    return arr.map(({id, img, name, price, description }) => {
        return `<li id="${id}" class="product-card js-product">
        <img src="${img}" class="product-img">
        <h2 class="product-title">${name}</h2>
        <p class="product-description">${price} грн</p>
        <p>${description}</p>
        <button class="product-add-btn js-btn">Add to basket</button>
        </li>`
    }).join('')
}


export {createProduct}