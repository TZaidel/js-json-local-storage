import { createProduct } from "./templates/template-product";
import  instruments  from "./product.json"


const list = document.querySelector('.js-list')
const KEY = 'add products'

list.insertAdjacentHTML('beforeend', createProduct(instruments))
list.addEventListener('click', onClick)


function onClick(event) {
    if (!event.target.classList.contains('js-btn')) {
        return
    }

    const productId = +event.target.closest('.js-product').id
    const currentProduct = instruments.find(({ id }) => id === productId)

    const products = JSON.parse(localStorage.getItem(KEY)) ?? []
    console.log(products)

    const index = products.findIndex(({ id }) => id === productId)
    console.log(index)

    if (index !== -1) {
        products[index].quantity +=1
    } else {
        currentProduct.quantity = 1
        products.push(currentProduct)
    }

    localStorage.setItem(KEY, JSON.stringify(products))
}

