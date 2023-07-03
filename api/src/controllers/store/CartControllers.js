const { Cart, User, Product } = require('../../db');

// POST /carts
exports.createCart = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    // Verificar si el usuario y el producto existen
    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);

    if (!user || !product) {
      return res.status(404).json({ message: 'User or product not found' });
    }

    // Verificar si el usuario ya tiene un carrito
    const cart = await Cart.findOne({ where: { userId } });

    if (cart) {
      // Si el usuario ya tiene un carrito, agregar solo el producto al carrito existente
      await cart.addProduct(product);
    } else {
      // Si el usuario no tiene un carrito, crear uno nuevo y relacionarlo con el usuario y el producto
      const newCart = await Cart.create({ userId, productId });
      await newCart.addProduct(product);
    }

    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error creating cart:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// GET /carts/:cartId
exports.getCartById = async (req, res) => {
  const { cartId } = req.params;
  try {
    // Obtener el carrito por su ID, incluyendo la información del usuario y la tabla intermedia CartProduct
    const cart = await Cart.findByPk(cartId, { include: [{ model: User }, { model: CartProduct, include: [Product] }] });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error('Error getting cart:', error);
    res.status(500).json({ message: 'Server error' });
  }
};



// DELETE /carts/:cartId
exports.deleteCartItem = async (req, res) => {
    const { cartId } = req.params;
    try {
      const cart = await Cart.findByPk(cartId);
  
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
  
      // Eliminar el registro del carrito (borrado lógico)
      await cart.destroy();
  
      res.status(200).json({ message: 'Cart item deleted' });
    } catch (error) {
      console.error('Error deleting cart item:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  
