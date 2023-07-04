const { Cart, User, Product, CartProduct } = require("../../db");
// const CartProduct = require("../../models/CartProduct");

// put /carts
exports.createCart = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    // Verify if the user and product exist
    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);

    if (!user || !product) {
      return res.status(404).json({ message: "User or product not found" });
    }

    // Find the existing cart of the user
    let cart = await Cart.findOne({ where: { userId } });

    if (!cart) {
      // If the cart doesn't exist, create a new one and associate it with the user
      cart = await Cart.create({ userId });
    }

    // Find the cart item for the specific product and user ID
    const cartItem = await CartProduct.findOne({
      where: { cartId: cart.id, productId },
    });

    if (cartItem) {
      // If the product is already in the cart, update the quantity
      cartItem.quantity += 1;
      await cartItem.save();
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      await cart.addProduct(product);
    }

    // Update the cart's quantity and product's stock
    cart.quantity += 1;
    product.stock -= 1;
    await cart.save();
    await product.save();

    res.status(201).json(cart);
  } catch (error) {
    console.error("Error creating cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};



// GET /carts/:userId
exports.getCartById = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findOne({
      where: { userId: id },
      include: [
        {
          model: User,
        },
        {
          model: Product,
          through: {
            attributes: ["quantity"], // Include the quantity attribute from the CartProduct association
          },
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