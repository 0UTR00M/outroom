document.querySelectorAll('.product-images').forEach(container => {
    let currentIndex = 0;
    const images = container.querySelectorAll('img');
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');

    // Initialize by showing the first image
    images[currentIndex].classList.add('active');

    // Function to show the image at the specified index
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    // Event listeners for the navigation buttons
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    });
});
/*
document.addEventListener("DOMContentLoaded", function () {
    const basketCount = document.getElementById("basket-count");
    const basketItems = document.getElementById("basket-items");
    const totalPriceDisplay = document.getElementById("total-price");
    const undoButton = document.getElementById("undo-button"); // Add this line
    let totalPrice = 0;
    let lastAddedItem = null; // Stack to keep track of the last added item

    // Add event listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.closest('.product');
            const productName = productElement.dataset.name;
            const productPrice = parseFloat(productElement.dataset.price);
            const size = productElement.querySelector('.size').value;
            const quantity = parseInt(productElement.querySelector('.count').textContent);

            // Calculate total price for this product
            const itemTotalPrice = productPrice * quantity;

            // Update basket count and total price
            totalPrice += itemTotalPrice;
            basketCount.textContent = parseInt(basketCount.textContent) + quantity;
            totalPriceDisplay.textContent = `Total: TND${totalPrice.toFixed(2)}`;

            // Add product details to basket
            lastAddedItem = { name: productName, size: size, quantity: quantity, totalPrice: itemTotalPrice }; // Store last added item
            const basketItem = document.createElement('div');
            basketItem.textContent = `${productName} (Size: ${size}, Quantity: ${quantity}) - TND${itemTotalPrice.toFixed(2)}`;
            basketItems.appendChild(basketItem);
        });
    });

    // Add event listener for the Undo button
    /*
    undoButton.addEventListener('click', () => {
        if (lastAddedItem) {
            const itemTotalPrice = lastAddedItem.totalPrice;
            totalPrice -= itemTotalPrice; // Decrease total price
            basketCount.textContent = parseInt(basketCount.textContent) - lastAddedItem.quantity; // Decrease basket count

            // Remove the last added item from the display
            const basketItemsDisplay = [...basketItems.children];
            basketItemsDisplay[basketItemsDisplay.length -1].remove(); // Remove last item in basket

            totalPriceDisplay.textContent = `Total: TND${totalPrice.toFixed(2)}`;
            lastAddedItem = null; // Clear the last added item
        }
    });
*//*


    // Add event listener for the Undo button
    undoButton.addEventListener('click', () => {
        if (lastAddedItem) {
            const basketItemsDisplay = [...basketItems.children]; // Get all items in the basket display
            basketItemsDisplay.forEach(item => item.remove());
            totalPrice = 0; // Reset total price to 0
            basketCount.textContent = 0; // Reset basket count to 0
            totalPriceDisplay.textContent = `Total: TND${totalPrice.toFixed(2)}`;
            lastAddedItem = null;
            console.log('All items removed from the basket!');
        }
    });



    // Add event listeners for increment and decrement buttons
    document.querySelectorAll('.increment').forEach(button => {
        button.addEventListener('click', () => {
            const countDisplay = button.previousElementSibling;
            countDisplay.textContent = parseInt(countDisplay.textContent) + 1;
        });
    });

    document.querySelectorAll('.decrement').forEach(button => {
        button.addEventListener('click', () => {
            const countDisplay = button.nextElementSibling;
            const currentCount = parseInt(countDisplay.textContent);
            if (currentCount > 1) {
                countDisplay.textContent = currentCount - 1;
            }
        });
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
    const basketCount = document.getElementById("basket-count");
    const basketItems = document.getElementById("basket-items");
    const totalPriceDisplay = document.getElementById("total-price");
    const undoButton = document.getElementById("undo-button");

    let totalPrice = 0;
    let lastAddedElement = null;
    let lastAddedItem = null;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.closest('.product');
            const productName = productElement.dataset.name;
            const productPrice = parseFloat(productElement.dataset.price);
            const size = productElement.querySelector('.size').value;
            const quantity = parseInt(productElement.querySelector('.count').textContent);

            const itemTotalPrice = productPrice * quantity;
            totalPrice += itemTotalPrice;
            totalPriceDisplay.textContent = `Total: ${totalPrice.toFixed(2)} TND`;

            const currentBasketCount = parseInt(basketCount.textContent);
            basketCount.textContent = currentBasketCount + quantity;

            const basketItem = document.createElement('div');
            basketItem.classList.add('basket-item');
            basketItem.textContent = `${productName} | Size: ${size} | Qty: ${quantity} - ${itemTotalPrice.toFixed(2)} TND`;
            basketItems.appendChild(basketItem);

            lastAddedElement = basketItem;
            lastAddedItem = { quantity, itemTotalPrice };
        });
    });

    undoButton.addEventListener('click', () => {
        const confirmClear = confirm("Voulez-vous vraiment vider le panier ?");
        if (confirmClear) {
            // Vider tous les éléments du panier
            basketItems.innerHTML = '';
            totalPrice = 0;
            totalPriceDisplay.textContent = `Total: 0.00 TND`;
            basketCount.textContent = '0';
            lastAddedElement = null;
            lastAddedItem = null;
    
            // 👉 Affiche le message de confirmation
            document.getElementById("order-message").textContent = "Votre panier a été vidé.";
            setTimeout(() => {
                document.getElementById("order-message").textContent = "";
            }, 10000);
        }
    });
    

    

    // Quantity adjustment
    document.querySelectorAll('.increment').forEach(button => {
        button.addEventListener('click', () => {
            const countDisplay = button.previousElementSibling;
            countDisplay.textContent = parseInt(countDisplay.textContent) + 1;
        });
    });

    document.querySelectorAll('.decrement').forEach(button => {
        button.addEventListener('click', () => {
            const countDisplay = button.nextElementSibling;
            const currentCount = parseInt(countDisplay.textContent);
            if (currentCount > 1) {
                countDisplay.textContent = currentCount - 1;
            }
        });
    });
});


document.querySelector('.pay-now').addEventListener('click', function() {
    const fullName = document.getElementById('full-name').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const address = document.getElementById('address').value.trim();
    const kelmahlowa = document.getElementById('kelmahlowa').value.trim();
    const email = document.getElementById('email').value.trim();
    const basketItems = document.getElementById('basket-items');
    const payNowButton = document.querySelector('.pay-now');

    // Display message area
    const messageEl = document.getElementById('order-message');
    if (!messageEl) {
        const newMessageEl = document.createElement('p');
        newMessageEl.id = 'order-message';
        newMessageEl.style.color = 'red';
        newMessageEl.style.marginTop = '10px';
        basketItems.parentElement.appendChild(newMessageEl);
    }

    // Validate inputs
    if (!fullName || !phoneNumber || !address || !kelmahlowa || !email) {
        messageEl.textContent = "Please fill in all fields before proceeding.";
        return;
    }

    // Gather cart items
    const cartItems = [];
    basketItems.childNodes.forEach(item => {
        if (item.nodeType === Node.ELEMENT_NODE) {
            cartItems.push(item.innerText);
        }
    });

    if (cartItems.length === 0) {
        messageEl.textContent = "Your cart is empty. Add items before placing an order.";
        return;
    }

    // Disable button to prevent multiple clicks
    payNowButton.disabled = true;
    payNowButton.textContent = "Processing...";

    // Prepare data for EmailJS
    const emailContent = {
        fullName: fullName,
        phoneNumber: phoneNumber,
        address: address,
        kelmahlowa: kelmahlowa,
        email: email,
        cartItems: cartItems.join(', ')
    };

    // Send email via EmailJS
    emailjs.send('service_rq8j508', 'template_uvq9lah', emailContent)
        .then(function(response) {
            alert("Order placed successfully! BE PATIENT FOR YOUR MASTERPIECE.");
            
            // Reset form & cart after successful order
            document.getElementById('customer-details-form').reset();
            basketItems.innerHTML = "";
            document.getElementById('basket-count').textContent = "0";

        }, function(error) {
            messageEl.textContent = "There was an issue placing your order. Please try again.";
            console.error('EmailJS Error:', error);
        })
        .finally(() => {
            // Re-enable button
            payNowButton.disabled = false;
            payNowButton.textContent = "Command-Now";
        });

    // Optional: Show confirmation message
    alert(`Order placed for ${fullName}. We will contact you at ${phoneNumber}. The products will be delivered to ${address}.`);
});


// Toast notification function
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}
// Example usage in add-to-cart button event listener
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.closest('.product').dataset.name;
        showToast(`${productName} added to cart!`);
        // Add additional logic to update cart items...
    });
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les données du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Préparer le contenu à envoyer via EmailJS
    const emailContent = {
        name: name,
        email: email,
        message: message
    };

    // Envoyer via EmailJS
    emailjs.send('service_jww15id', 'template_wztnfyk', emailContent)
        .then(function (response) {
            alert('Message sent successfully!');
        }, function (error) {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS Error:', error);
        });
});




document.addEventListener('DOMContentLoaded', () => {
    fetch('stock.php')
        .then(response => response.json())
        .then(stockData => {
            window.stockData = stockData; // Store globally
            updateUI();
        })
        .catch(err => console.error('Error loading stock:', err));

    function updateUI() {
        document.querySelectorAll('.product').forEach(product => {
            const productName = product.getAttribute('data-name');
            const sizeSelect = product.querySelector('.size');
            const sizes = sizeSelect.querySelectorAll('option');
            const productStock = window.stockData[productName.toLowerCase()];

            if (productStock) {
                sizes.forEach(option => {
                    const size = option.value;
                    const quantity = productStock[size];
                    if (quantity === 0) {
                        option.disabled = true;
                        option.textContent = `${size} (Out of Stock)`;
                    } else {
                        option.disabled = false;
                        option.textContent = size;
                    }
                });
            }
        });
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const productName = product.getAttribute('data-name').toLowerCase();
            const selectedSize = product.querySelector('.size').value;

            fetch('update_stock.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ product: productName, size: selectedSize })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    window.stockData[productName][selectedSize] = data.newQty;
                    updateUI();

                    // Affiche le compteur après ajout au panier
                    const countElement = document.querySelector('.count');
                    if (countElement) {
                        countElement.style.visibility = 'visible';
                    }
                } else {
                    alert(data.message || 'Error updating stock');
                }
            });
        });
    });

    // Cacher le compteur au chargement
    const countElement = document.querySelector('.count');
    if (countElement) {
        countElement.style.visibility = 'hidden';
    }
});


document.querySelector('.count').style.visibility = 'hidden'; // To hide