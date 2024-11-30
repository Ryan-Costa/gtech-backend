const { generateSlug } = require("../functions/generate-slug");
const { Product } = require("../models");

class ProductService {
  async createProduct({
    name,
    price,
    price_with_discount,
    enabled = false,
    use_in_menu = false,
    stock = 0,
    description = null,
  }) {
    try {
      const generatedSlug = generateSlug(name);

      const product = await Product.create({
        name,
        slug: generatedSlug,
        price,
        price_with_discount,
        enabled,
        use_in_menu,
        stock,
        description,
      });
      return product;
    } catch (error) {
      throw new Error("Erro ao criar produto: " + error.message);
    }
  }

  async getProductById(id) {
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        throw new Error("Produto não encontrado");
      }
      return product;
    } catch (error) {
      throw new Error("Erro ao buscar produto: " + error.message);
    }
  }

  async updateProduct(id, updatedData) {
    try {
      const product = await Product.findByPk(id);

      if (!product) {
        throw new Error("Produto não encontrado");
      }

      if (updatedData.name) {
        updatedData.slug = generateSlug(updatedData.name);
      }

      await product.update(updatedData);
      return product;
    } catch (error) {
      throw new Error("Erro ao atualizar produto: " + error.message);
    }
  }

  async deleteProduct(id) {
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        throw new Error("Produto não encontrado");
      }

      await product.destroy();
      return { message: "Produto deletado com sucesso" };
    } catch (error) {
      throw new Error("Erro ao deletar produto: " + error.message);
    }
  }

  async getAllProducts() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      throw new Error("Erro ao listar produtos: " + error.message);
    }
  }
}

module.exports = ProductService;
