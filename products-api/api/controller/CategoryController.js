const database = require('../models');

class CategoryController {

    static async listCategories(request, response) {
        try {
            const listAll = await database.Categorias.findAll();
            return response.status(200).json(listAll);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    static async listOneCategory(request, response) {
        const { id } = request.params;
        try {
            const listOne = await database.Categorias.findOne({
                where: { id: Number(id) }
            });
            return response.status(200).json(listOne);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    static async addCategories(request, response) {
        const bodyInfos = request.body;
        try {
            const addNew = await database.Categorias.create(bodyInfos);
            return response.status(200).json(addNew);
        } catch (error) {
            return response.status(500).json(error.message);

        }
    }

    static async updateCategories(request, response) {
        const { id } = request.params;
        const newBodyInfo = request.body;
        try {
            await database.Categorias.update(newBodyInfo, {
                where: { id: Number(id) }
            })
            const updateNewInfo = await database.Categorias.findOne({
                where: { id: Number(id) }
            });
            return response.status(200).json(updateNewInfo);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    static async deleteCategories(request, response) {
        const { id } = request.params;
        try {
            await database.Categorias.destroy({
                where: { id: Number(id) }
            })
            return response.status(200).json({ message: `id ${id} deletado` })
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

}

module.exports = CategoryController;