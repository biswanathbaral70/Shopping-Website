// JavaScript for handling the "Add to Cart" button
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartContent = document.getElementById('cart-content');
const checkoutButton = document.getElementById('checkout');

let cart = [];

addToCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const productName = event.target.previousElementSibling.previousElementSibling.innerText;
    const productPrice = event.target.previousElementSibling.innerText;
    
    cart.push({ name: productName, price: productPrice });
    updateCart();
  });
});

function updateCart() {
  if (cart.length === 0) {
    cartContent.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cartContent.innerHTML = `<ul>${cart.map(item => `<li>${item.name} - ${item.price}</li>`).join('')}</ul>`;
  }
}

checkoutButton.addEventListener('click', () => {
  if (cart.length > 0) {
    alert('Proceeding to checkout...');
  } else {
    alert('Your cart is empty.');
  }
});
