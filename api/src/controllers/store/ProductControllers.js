const { Product } = require('../../db');

// POST /products
exports.createProduct = async (req, res) => {
    try {
      const {
        name,
        price,
        description,
        sku,
        stock,
        category,
        brand,
        image_path
      } = req.body;
  
      // Crear el producto en la base de datos
      const product = await Product.create({
        name,
        price,
        description,
        sku,
        stock,
        category,
        brand,
        image_path
      });
  
      res.status(201).json(product);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  

  exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
      // Obtener el producto por su ID
      const product = await Product.findByPk(id);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json(product);
    } catch (error) {
      console.error('Error getting product:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  

// PUT /products/:productId
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, description,stock } = req.body;
    try {
      const product = await Product.findByPk(id);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Actualizar los campos del producto
      await product.update({ name, price, description,stock });
  
      res.status(200).json(product);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
 

  
// DELETE /products/:productId
exports.deleteProduct = async (req, res) => {
    const { productId } = req.params;
    try {
      const product = await Product.findByPk(productId);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Establecer el campo "deleted" en true en lugar de eliminar físicamente el producto
      await product.update({ deleted: true });
  
      res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  
