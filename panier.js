document.addEventListener("DOMContentLoaded", function() {
    var cart = document.querySelector('.cart');
    var isActive = sessionStorage.getItem('cartActive');
    if (isActive === 'true') {
        open_cart();
    }
    function open_cart() {
        cart.classList.add('active');
        sessionStorage.setItem('cartActive', 'true');
    }
    function close_cart() {
        cart.classList.remove('active');
        sessionStorage.setItem('cartActive', 'false');
    }
    var basketIcon = document.querySelector('.fa-bag-shopping');
    basketIcon.addEventListener('click', open_cart);

    var closeIcon = document.querySelector('.close_cart');
    closeIcon.addEventListener('click', close_cart);
    function addToCart() {
        var product = this.closest('.product');
        var title = product.querySelector('.title').innerText;
        var priceText = product.querySelector('.price').textContent;
        var ch = priceText.trim();
        var chiffresSeulement = ch.replace("TND", "").trim();
        var x = parseInt(chiffresSeulement);

        var cartItem = document.createElement('div');
        cartItem.classList.add('item-cart');
        cartItem.innerHTML = `
            <img src="${product.querySelector('.impro').src}" alt="">
            <div class="content">
                <h4>${title}</h4>
                <p class="price">${x} TND</p>
                <p>Ryzen 5 5600G - Radeon Vega 7 Graphics - 16Gb - 512 Gb - BLACK</p>
                <button class="del"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        var cartContent = document.querySelector('.items-in-cart');
        cartContent.appendChild(cartItem);
        updateTotal(x);
    }
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    if (!addToCartButtons[0].hasAttribute('data-add-to-cart-listener')) {
        addToCartButtons.forEach(function(button) {
            button.addEventListener('click', addToCart);
        });
        addToCartButtons[0].setAttribute('data-add-to-cart-listener', true);
    }
    function updateTotal(amount) {
        var totalPriceElement = document.querySelector('.price_cart_total');
        var currentTotal = parseFloat(totalPriceElement.innerText.replace('TND', ''));
        var newTotal = currentTotal + amount;
        totalPriceElement.innerText = newTotal + ' TND';
    }
    var cartContent = document.querySelector('.items-in-cart');
    cartContent.addEventListener('click', function(event) {
        if (event.target.classList.contains('fa-trash')) {
            var itemToRemove = event.target.closest('.item-cart');
            var priceElement = itemToRemove.querySelector('.price');
            var price = parseFloat(priceElement.innerText.replace('TND', ''));
            itemToRemove.remove();
            updateTotal(-price/2);
        }
    });
    document.querySelector('.price_cart_total').innerText = '0 TND';
});
