const database = require('../models');

class ProductController {
    static async listProducts(request, response) {
        try {
            const listAll = await database.Produtos.findAll();
            return response.status(200).json(listAll);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    static async listOneProduct(request, response) {
        try {
            const { id } = request.params;
            const listOne = await database.Produtos.findOne({
                where: { id: Number(id) }
            });
            return response.status(200).json(listOne);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    static async addProduct(request, response) {
        try {
            const addInfo = request.body;
            const addNewPreduct = await database.Produtos.create(addInfo);
            return response.status(200).json(addNewPreduct);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    static async updateProduct(request, response) {
        const { id } = request.params;
        const newInfo = request.body;
        try {
            await database.Produtos.update(newInfo, {
                where: { id: Number(id) }
            });
            const updatedInfo = await database.Produtos.findOne({
                where: { id: Number(id) }
            });
            return response.status(200).json(updatedInfo);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    static async deleteProduct(request, response) {
        const { id } = request.params;
        try {
            await database.Produtos.destroy({
                where: { id: Number(id) }
            })
            return response.status(200).json({ message: `id ${id} deletado` })

        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

}

module.exports = ProductController;