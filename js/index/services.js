const services = document.getElementById('services');
const products = document.getElementById('products');
const card = document.getElementById('card');

function hideBlockItems(block) {
  for (let i=0, child; child = block.children[i]; i++) {
    child.classList.remove('visible')
  }
}

function showBlockItems(block, prefix, key) {
  const items = block.querySelectorAll(`div[data-${prefix}="${key}"]`);
  
  for (let i=0, child; child = items[i]; i++) {
    child.classList.add('visible')
  }
}

services.addEventListener('click', (event) => {
  hideBlockItems(products);
  hideBlockItems(card);
  showBlockItems(products, 'cat', event.target.dataset.cat)
});

products.addEventListener('click', (event) => {
  hideBlockItems(card);
  showBlockItems(card, 'prod', event.target.dataset.prod)
});

// Категории
const servicesList = document.querySelector('.services__сategory');
const activeClass = "active-element";
servicesList.addEventListener("click", function(event) {
    const element = event.target.closest(".category-item");
    if (!element) return;
    const activeElement = element.parentElement.querySelector(".active-element");
    activeElement?.classList?.remove(activeClass);
    element.classList.add(activeClass);
});

// Продукт
const productsList = document.querySelector('.services__products');
const activesClass = "active-element";
productsList.addEventListener("click", function(event) {
    const element = event.target.closest(".category-item");
    if (!element) return;
    const activeElement = element.parentElement.querySelector(".active-element");
    activeElement?.classList?.remove(activesClass);
    element.classList.add(activesClass);
});

