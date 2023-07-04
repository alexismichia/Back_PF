const express = require("express");
const { getProductById, createProduct, updateProduct, deleteProduct, getProducst } = require("../controllers/store/ProductControllers");
const { createCart, deleteCartItem, getCartById, deleteAllCartItems} = require("../controllers/store/CartControllers");


const storeRouter = express.Router();
//ALL PRODUCTS
storeRouter.get("/products", getProducst);


// Obtener un producto por su ID
storeRouter.get("/products/:id", getProductById);

// Crear un nuevo producto
storeRouter.post("/products", createProduct);

// Actualizar un producto existente
storeRouter.put("/products/:id", updateProduct);

// Eliminar un producto
storeRouter.delete("/products/:id", deleteProduct);

// Agregar un producto al carrito
storeRouter.put("/cart/add", createCart);

// Eliminar un producto del carrito

storeRouter.put("/cart/delete", deleteCartItem);

// Obtener los artículos del carrito
storeRouter.get("/cart/items/:id", getCartById);

storeRouter.delete('/cart/empty/:userId', deleteAllCartItems);


module.exports = storeRouter;
