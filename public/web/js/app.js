/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Sahil Sandhu
 *      Student ID: 117526210
 *      Date:       07/21/2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
function createProductCard(product) {
  // Create a <div> to hold the card
  const card = document.createElement("div");
  // Add the .card class to the <div>
  card.classList.add("card");

  // Create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.classList.add("card-image");
  card.appendChild(productImage);
  const info = document.createElement("div");
  info.classList.add("info");
  card.appendChild(info);
  const productTitle = document.createElement("h3");
  productTitle.innerText = product.title;
  info.appendChild(productTitle);
  const productPrice = document.createElement("span");
  productPrice.innerText = `Price: $${product.price / 100}`;
  if (product.discontinued == true) {
    productPrice.innerText += " (Discontinued)";
  }
  info.appendChild(productPrice);
  const productDesc = document.createElement("p");
  productDesc.innerText = `Specs: ${product.description}`;
  info.appendChild(productDesc);

  // ... rest of your card building code here

  // Return the card’s <div> element to the caller
  return card;
}

function generate_table(cat) {
  const productContainer = document.getElementById("container");
  productContainer.innerText = "";
  for (let prod of window.products) {
    for (let c of prod.categories) {
      if (cat == c) {
        productContainer.appendChild(createProductCard(prod));
      }
    }
  }
}
window.addEventListener("load", generate_table("c1"));
