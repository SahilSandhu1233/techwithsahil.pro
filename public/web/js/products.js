/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    title: "Apple MacBook Air 13 (2022)",
    description: "Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM)",
    price: 149999,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./images/macs.jpg"
  },
  {
    id: "P2",
    title: "Apple MacBook Air 13 (Fall 2020)",
    description: "Silver (Apple M1 Chip / 256GB SSD / 8GB RAM)",
    price: 109999,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./images/macs.jpg"
  },
  {
    id: "P3",
    title: "Apple MacBook Pro 16 (2021)",
    description: "Space Grey (Apple M1 Pro Chip / 512GB SSD / 16GB RAM)",
    price: 314999,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./images/macs.jpg"
  },
  {
    id: "P4",
    title: "Apple MacBook Pro 14 (2021)",
    description: "Silver (Apple M1 Pro Chip / 512GB SSD / 16GB RAM)",
    price: 249999,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./images/macs.jpg"
  },
  {
    id: "P5",
    title: "ASUS TUF Gaming F15 15",
    description: "Black (Intel i5-10300H/512GB SSD/8GB RAM/GeForce GTX 1650)",
    price: 79999,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./images/gaming.jpg"
  },
  {
    id: "P6",
    title: "ASUS ROG Strix G15",
    description: "Black (AMD Ryzen 7 4800H/512GB SSD/16GB RAM/GeForce RTX 3050)",
    price: 119999,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./images/gaming.jpg"
  },
  {
    id: "P7",
    title: "ASUS ROG Zephyrus G15",
    description: "White (AMD Ryzen 9 5900HS/1TB SSD/16GB RAM/RTX 3050 Ti)",
    price: 159999,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./images/gaming.jpg"
  },
  {
    id: "P8",
    title: "Acer Nitro 5 15",
    description: "Black (AMD Ryzen R7 5800H/512GB SSD/16GB RAM/GTX 1650/Win 11)",
    price: 99999,
    discontinued: false,
    categories: ["c1", "c2"],
    imageUrl: "./images/gaming.jpg"
  },
  {
    id: "P9",
    title: "MSI GE76 Raider 17",
    description: "Blue (Intel i7-12700H/1TB SSD/32GB RAM/RTX 3070 Ti)",
    price: 269999,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./images/gaming.jpg"
  },
  {
    id: "P10",
    title: "Dell XPS 15 9510 (2021)",
    description: "Silver (Nvidia RTX 3050/i7-11800H/16GB/512GB SSD)",
    price: 169999,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./images/notebook.jpg"
  },
  {
    id: "P11",
    title: "Dell XPS 13 9305 (2021)",
    description: "Silver (Intel i5-1135G7/8GB RAM/256GB SSD)",
    price: 79999,
    discontinued: false,
    categories: ["c2", "c3"],
    imageUrl: "./images/notebook.jpg"
  },
  {
    id: "P12",
    title: "Dell XPS 15 9500 (2020)",
    description: "Silver (Nvidia 1650Ti/Intel i7-10875H/16GB RAM/512GB SSD)",
    price: 159999,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./images/notebook.jpg"
  },
  {
    id: "P13",
    title: "MSI GF63 15 (2020)",
    description: "Black (Intel i5-10500H/256GB SSD/8GB RAM/NVIDIA GTX1650)",
    price: 89999,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./images/gaming.jpg"
  },
  {
    id: "P14",
    title: "HP Victus 16 (2022)",
    description: "Blue (Intel i5-12500H/512GB SSD/16GB RAM/RTX 3050 Ti)",
    price: 139999,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./images/notebook.jpg"
  },
  {
    id: "P15",
    title: "MSI Katana GF66 15 (2021)",
    description: "Black (Intel i5-11400H/512GB SSD/16GB RAM/RTX 3060)",
    price: 124999,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./images/gaming.jpg"
  },
  {
    id: "P16",
    title: "Alienware m15 R5 (2022)",
    description: "Black (Ryzen 7 5800H/512GB SSD/16GB RAM/RTX 3070)",
    price: 229995,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./images/gaming.jpg"
  },
  {
    id: "P17",
    title: "HP x360 14",
    description: "Silver (Intel Celeron N4020/64GB eMMC/4GB RAM/Chrome OS)",
    price: 31999,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./images/entry-level.jpg"
  },
  {
    id: "P18",
    title: "ASUS Flip CM5 15.6",
    description: "Grey (AMD Ryzen 3 3250U/64GB eMMC/8GB RAM/Chrome OS)",
    price: 49999,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./images/entry-level.jpg"
  },
  {
    id: "P19",
    title: "HP 14 Chromebook",
    description: "Silver (Intel Celeron N4500/64GB eMMC/4GB RAM/Chrome OS)",
    price: 39999,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./images/entry-level.jpg"
  },
  {
    id: "P20",
    title: "Dell Chromebook 11 3120",
    description: "Black (Intel Celeron N2840/4GB RAM/16GB SSD)",
    price: 10999,
    discontinued: true,
    categories: ["c2"],
    imageUrl: "./images/entry-level.jpg"
  },
  {
    id: "P21",
    title: "Acer Chromebook 11",
    description: "Gray (Intel Celeron/4GB RAM/16GB SSD)",
    price: 7499,
    discontinued: true,
    categories: ["c2"],
    imageUrl: "./images/entry-level.jpg"
  }
];
