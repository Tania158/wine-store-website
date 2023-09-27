import { products } from "./products.js";

function renderProduct(products) {
  const productsContainer = document.querySelector(".craft-wines__list");
  productsContainer.innerHTML = "";
  for (const product of products) {
    productsContainer.innerHTML += `<div class="craft-wines__item">
                <div class="craft-wines__image-container">
                  <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="craft-wines__image"
                  />
                </div>
                <p class="craft-wines__name wine-name">${product.name}</p>
                <p class="craft-wines__price wine-price">${product.price} ${product.currency}</p>
                <button
                  id="add-to-cart"
                  class="craft-wines__button button-primary"
                  type="button"
                >
                  Add to cart
                </button>
              </div>`;
  }
}

renderProduct(products);
