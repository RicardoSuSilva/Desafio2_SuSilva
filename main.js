import { Product } from "./Product.js";
import { ProductManager } from "./ProductManager.js";

const producto1 = new Product("Camisa Vestir", "70% Algodon 30%Poplin", 12000, 20, "A123"  )
const producto2 = new Product("Remera", "100% Algodon", 8000, 25, "L123"  )
const producto3 = new Product("Pantalon Denim", "Tela Denim 6 ozs.", 15000, 22, "A458"  )
const producto4 = new Product("Traje Vestir", "70% Algodon 30%Poliester", 120000, 20, "Y234"  )
const producto5 = new Product("Zapatillas Urbanas", "Adidas", 30000, 20, "B963"  )
const producto6 = new Product("Gorra Urbana", "Denim 4 ozs.", 8000, 20, "Z789"  )
const producto7 = new Product("Botines Urbanos", "Todoterreno cuero negro", 80000, 20, "D654"  )

const productManager =new ProductManager('./products.json')

productManager.addProduct(producto1)
//productManager.addProduct(producto4)
//productManager.getProducts()
//productManager.getProductById('014407cd7c708762593b')
//productManager.updateProduct('014407cd7c708762593b', product1version2)
//productManager.deleteProduct('014407cd7c708762593b')