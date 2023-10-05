const addToCartBtn = document.querySelectorAll("#add-to-cart");
const basketBtn = document.querySelector(".basket");
const shoppingCartModal = document.querySelector("#shopping-cart");
const closeModalBtn = document.querySelector(".shopping-cart__button-close");

basketBtn.addEventListener("click", () => {
  shoppingCartModal.classList.add("active-cart");
});
closeModalBtn.addEventListener("click", () => {
  shoppingCartModal.classList.remove("active-cart");
});

addToCartBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const productElement = button.closest(".craft-wines__item");
    const productName = productElement.querySelector(".wine-name").textContent;
    const productPrice = parseFloat(
      productElement.querySelector(".wine-price").textContent
    );
    const productImage = productElement.querySelector(
      ".craft-wines__image"
    ).src;

    const product = {
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1,
    };

    addToCart(product);
  });
});

const cart = [];

function addToCart(product) {
  const existingCartItem = cart.find((item) => item.name === product.name);

  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    cart.push(product);
  }

  displayCart();
}

function displayCart() {
  const cartList = document.getElementById("cart");
  const totalElement = document.getElementById("total");
  const totalCount = document.querySelector(".basket__total-count");

  if (cart.length > 0) {
    basketBtn.classList.add("active-basket");
  } else {
    if (basketBtn.classList.contains("active-basket")) {
      basketBtn.classList.remove("active-basket");
    }
  }

  cartList.innerHTML = "";

  let total = 0;
  let count = 0;

  cart.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<div class="shopping-cart__item">
              <div class="shopping-cart__img-container">
                <img style="width: 46px;" src="${product.image}" alt="${
      product.name
    }">
              </div>
              <div class="shopping-cart__options">
                <p class="shopping-cart__name text">${product.name}</p>
                <input type="number" class="shopping-cart__counter" min="1" value="${
                  product.quantity
                }">
              </div>
              <div class="shopping-cart__amount">${(
                product.price * product.quantity
              ).toFixed(2)} USD</div>
              <button class="shopping-cart__remove">
                <svg width="14" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2h3.6c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H.4C.2 4 0 3.9 0 3.6V2.4c0-.2.2-.4.4-.3h3.7V2L4.9.3c.1-.2.2-.3.4-.3h3.5c.1 0 .3.1.4.2l.8 1.7V2zM1.8 16.1c.1 1 1 1.9 2 1.9h6.3c1.1 0 1.9-.8 2-1.9l1-11.1H1l.8 11.1zM12 6l-.8 10.1c0 .5-.5.9-1 .9H3.8c-.5 0-1-.4-1-.9L2 6h10zM5 8.1h1v6H5v-6zm4 0H8v6h1v-6z" fill="#9199AB"></path></svg>
              </button>
            </div>`;
    cartList.appendChild(listItem);

    total += product.price * product.quantity;
    count += product.quantity;
  });

  totalElement.innerHTML = `Total amount: ${total.toFixed(2)} USD`;
  totalCount.textContent = count;

  getCardItems();
}

function removeFromCart(productName) {
  const index = cart.findIndex((item) => item.name === productName);

  if (index !== -1) {
    cart.splice(index, 1);
  }

  displayCart();
}

function updateCartItem(productName, quantity) {
  if (isNaN(quantity) || quantity < 1) {
    alert("Будь ласка, введіть дійсне число більше 0.");
    const previousQuantity = getItemQuantity(productName);
    document.querySelector(
      `.shopping-cart-item input[value="${previousQuantity}"]`
    ).value = previousQuantity;
    return;
  }

  const cartItem = cart.find((item) => item.name === productName);

  if (cartItem) {
    cartItem.quantity = quantity;
    cartItem.totalPrice = quantity * cartItem.price;
  }

  displayCart();
}

function getItemQuantity(productName) {
  const cartItem = cart.find((item) => item.name === productName);
  return cartItem ? cartItem.quantity : 1;
}

function getCardItems() {
  const cartItems = document.querySelectorAll(".shopping-cart__item");

  cartItems.forEach((item) => {
    const quantityInput = item.querySelector("input[type='number']");
    const deleteButton = item.querySelector(".shopping-cart__remove");

    deleteButton.addEventListener("click", () => {
      const productName = item.querySelector(
        ".shopping-cart__name"
      ).textContent;
      removeFromCart(productName);
    });

    quantityInput.addEventListener("change", () => {
      const productName = item.querySelector(
        ".shopping-cart__name"
      ).textContent;
      const newQuantity = parseInt(quantityInput.value);

      if (!isNaN(newQuantity) && newQuantity >= 1) {
        updateCartItem(productName, newQuantity);
      } else {
        alert("Будь ласка, введіть дійсне число більше 0.");
        quantityInput.value = getItemQuantity(productName);
      }
    });
  });
}
