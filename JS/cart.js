const getInputValuebyId = id => {
    const inputField = document.getElementById(id)
    const inputValue = inputField.value
    inputField.value = ''
    return inputValue
}

const addProduct = () => {
    const product = getInputValuebyId('product_name_field')
    const quantity = getInputValuebyId('product_quantity_field')
    console.log(product, quantity)
    /* Display product on UI */
    displayProducts(product, quantity)

    /* Set value to localStorage: Simle Way */
    // localStorage.setItem(product, quantity)
    saveItemToLocalStorage(product, quantity)
}

const getShoppingCartFromLocalstorage = () => {
    let savedCart = localStorage.getItem('cart')
    let cart = {}
    if (savedCart) {
        cart = JSON.parse(savedCart)
    }
    return cart
}

const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalstorage()
    // Add product to the object as property
    cart[product] = quantity
    const cartStringified = JSON.stringify(cart)

    // Save to local storage
    localStorage.setItem('cart', cartStringified)
}


const displayProducts = (product, quantity) => {
    const productContainer = document.getElementById('product_container')
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`
    productContainer.appendChild(li)
}

const displayStoredProducts = () => {
    const cart = getShoppingCartFromLocalstorage()
    for (const product in cart) {
        const quantity = cart[product]
        console.log(product, quantity)
        displayProducts(product, quantity)
    }
}

displayStoredProducts()