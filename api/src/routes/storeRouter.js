const express = require("express");
const { getProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/store/ProductControllers");
const { createCart, deleteCartItem, getCartById } = require("../controllers/store/CartControllers");


const storeRouter = express.Router();

// Obtener un producto por su ID
storeRouter.get("/products/:id", getProductById);

// Crear un nuevo producto
storeRouter.post("/products", createProduct);

// Actualizar un producto existente
storeRouter.put("/products/:id", updateProduct);

// Eliminar un producto
storeRouter.delete("/products/:id", deleteProduct);

// Agregar un producto al carrito
storeRouter.post("/cart/add", createCart);

// Eliminar un producto del carrito
storeRouter.post("/cart/remove", deleteCartItem);

// Obtener los artículos del carrito
storeRouter.get("/cart/items", getCartById);

module.exports = storeRouter;
