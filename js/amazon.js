let productHtml = '';

products.forEach((product) =>{
    productHtml +=`
            <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image"
                    src="${product.image}">
                </div>

                <div class="product-name limit-text-to-2-lines">
                    ${product.name}
                </div>

                <div class="product-rating-container">
                    <img class="product-rating-stars"
                    src="images/ratings/rating-${product.rating.stars * 10}.png">
                    <div class="product-rating-count link-primary">
                    ${product.rating.counts}
                    </div>
                </div>

                <div class="product-price">
                    $${(product.priceCents/100).toFixed(2)}
                </div>

                <div class="product-quantity-container">
                    <select class="js-quantity-selector-${product.id}">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>

                <div class="product-spacer"></div>

                <div class="added-to-cart js-added-to-cart-${product.id}">
                    <img src="images/icons/checkmark.png">
                    Added
                </div>

                <button class="add-to-cart-button js-add-to-cart button-primary" data-product-id="${product.id}">
                    Add to Cart
                </button>
                </div>
    `;
})

document.querySelector('.js-product-grid').
innerHTML = productHtml;
const addMessageTimeout ={};

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;

            let matchingItem;

            cart.forEach(item=> {
                if(productId === item.productId){
                    matchingItem = item;
                }
            });

            const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

            const quantity = Number(quantitySelector.value);

            const addMessage = document.querySelector(
                `.js-added-to-cart-${productId}`);
            
            

            document.querySelectorAll('.js-add-to-cart')
            .forEach((button) => {
                button.addEventListener('click', () => {
                    addMessage.classList.add('added-to-cart-visible');
                    const previousTimeoutId = addMessageTimeout[productId];
                    if (previousTimeoutId){
                        clearTimeout(previousTimeoutId);
                    }
                    const timeoutId = setTimeout(() =>{
                        addMessage.classList.remove('added-to-cart-visible');
                    }, 2000) ;
                    addMessageTimeout[productId] = timeoutId;
                })
            })
            
            if(matchingItem){
                matchingItem.quantity += quantity;
            } else{
                cart.push({
                    productId: productId,
                    quantity: 1,
                    quantity: quantity,
                })
            }
            console.log(cart);
        }) 
    })

   