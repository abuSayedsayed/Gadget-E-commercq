addItem()

// Fetching  data from the server

async function addItem() {
	const options = document.querySelector('.options')
	const productDisplayContainer = document.querySelector(
		'.product-display-container'
	)
	const getData = await fetch('./assets/products.json')
	const products = await getData.json()
	initDefaultProduct(productDisplayContainer, products)
	options.addEventListener('click', function (event) {
		let userChoiceCategory = event.target.innerText || 'All Products'
		Array.from(options.children).forEach((option) =>
			option.classList.remove('active')
		)
		event.target.classList.add('active')

		if (userChoiceCategory === ' All Products') {
			productDisplayContainer.innerHTML = ''
			products.products.forEach((product) => {
				let singleProduct = createProductItem(product)
				productDisplayContainer.appendChild(singleProduct)
			})
		}
		if (userChoiceCategory === ' Trending Products') {
			productDisplayContainer.innerHTML = ''
			products.products.forEach((product) => {
				if (product.category === 'Trending Products') {
					let singleProduct = createProductItem(product)
					productDisplayContainer.appendChild(singleProduct)
				}
			})
		}
		if (userChoiceCategory === ' Special Products') {
			productDisplayContainer.innerHTML = ''
			products.products.forEach((product) => {
				if (product.category === 'Special Products') {
					let singleProduct = createProductItem(product)
					productDisplayContainer.appendChild(singleProduct)
				}
			})
		}
		if (userChoiceCategory === ' Feature Products') {
			productDisplayContainer.innerHTML = ''
			products.products.forEach((product) => {
				if (product.category === 'Featured Products') {
					let singleProduct = createProductItem(product)
					productDisplayContainer.appendChild(singleProduct)
				}
			})
		}
	})
}
// This function will create item for a single product
function createProductItem(product) {
	let singleProduct = document.createElement('div')
	singleProduct.classList.add('single-product')
	singleProduct.innerHTML = `
                        <div class="img">
                             <img src="${product.image}" alt="">
                        </div>
                        <h3 class="product-name">
                            ${product.title}
                        </h3>
                        <div class="ratings">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half"></i>
                        </div>
                        <h3 class="product-price ">
                          $ ${product.price}
                        </h3>
    
                        <button class="add-to-cart-btn">
                            ADD TO CART
                        </button>  
        `
	return singleProduct
}

function initDefaultProduct(productDisplayContainer, products) {
	productDisplayContainer.innerHTML = ''
	products.products.forEach((product) => {
		let singleProduct = createProductItem(product)
		productDisplayContainer.appendChild(singleProduct)
	})
}
