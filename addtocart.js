
    document.addEventListener("DOMContentLoaded", function() {
        var addToCartButton = document.getElementById('add-to-cart-btn');
        addToCartButton.addEventListener('click', function() {
            var productTitle = document.querySelector('.title').innerText;
            var productPrice = document.querySelector('.price').innerText;
            var newItem = document.createElement('div');
            newItem.classList.add('item-cart');
            newItem.innerHTML = `
                <img src="./my product/téléchargement.jpg" alt="${productTitle}">
                <div class="content">
                    <h4>${productTitle}</h4>
                    <p class="price">${productPrice}</p>
                </div>
                <button class="del"><i class="fa-solid fa-trash"></i></button>
            `;
            var itemsInCart = document.querySelector('.items-in-cart');
            itemsInCart.appendChild(newItem);

            newItem.querySelector('.del').addEventListener('click', function() {
                newItem.remove();
            });
        });
    });
