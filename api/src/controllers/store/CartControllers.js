const { Cart, User, Product, CartProduct } = require("../../db");

// put /carts
exports.createCart = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    // Verificar si el usuario existe
    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);

    if (!user || !product) {
      return res.status(404).json({ message: "User or product not found" });
    }

    // Buscar el carrito existente del usuario
    let cart = await Cart.findOne({ where: { userId } });

    if (!cart) {
      // Si el carrito no existe, crear uno nuevo y relacionarlo con el usuario
      cart = await Cart.create({ userId, quantity: 1 }); // Set initial quantity to 1
      await cart.addProduct(product); 
      res.status(201).json(cart);
    } else {
      // Incrementar la cantidad del carrito
      cart.quantity += 1;
      await cart.save();
      await cart.addProduct(product); // Associate the product with the carts
      res.status(201).json(cart);
    }
  } catch (error) {
    console.error("Error creating cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /carts/:cartId
exports.getCartById = async (req, res) => {
  const { id } = req.params;
  try {
    // Obtener el carrito por su ID, incluyendo la información del usuario y el producto relacionados
    const cart = await Cart.findOne({
      where: { userId: id },
      include: [
        {
          model: User,
        },
        {
          model: Product,
          through: { attributes: [] },
        },
      ],
    });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error getting cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE /carts/:cartId
exports.deleteCartItem = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findByPk(userId);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Eliminar el registro del carrito (borrado lógico)
    await cart.destroy();

    res.status(200).json({ message: "Cart item deleted" });
  } catch (error) {
    console.error("Error deleting cart item:", error);
    res.status(500).json({ message: "Server error" });
  }
};
