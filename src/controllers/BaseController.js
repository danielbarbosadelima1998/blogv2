const express = require('express')

class BaseController {
    constructor(model, path) {
        this.model = model;
        this.path = path;
    }

    async index(req, res) {
        try {
            const response = await this.model.findAll();
            return res.status(200).json({
                response,
                request: {
                    type: "GET"
                }
            });
        } catch (error) {
            return res.status(500).json({
                error,
                request: {
                    type: "GET"
                }
            });
        }
    }

    async store(req, res) {
        try {
            const response = await this.model.create({ ...req.body });
            req.io.emit('create.author', response)
            return res.status(200).json({
                response,
                request: {
                    type: "POST"
                }
            });
        } catch (error) {
            return res.status(500).json({
                error, request: {
                    type: "POST"
                }
            });
        }
    }

    async show(req, res) {
        try {
            const response = await this.model.findByPk(req.params.id);
            return res.status(200).json({
                response,
                request: {
                    type: "GET"
                }
            })
        } catch (error) {
            return res.status(500).json({
                error,
                request: {
                    type: "GET"
                }
            });
        }
    }

    async destroy(req, res) {
        try {
            const Exists = await this.model.findByPk(req.params.id)
            if (!Exists) {
                return res.status(500).json({
                    error: 'Entity dont exist',
                    request: {
                        type: "DELETE"
                    }
                })
            }
            await this.model.destroy({ where: { id: req.params.id } })
            return res.status(200).json({
                response: 'Deleted with success',
                request: {
                    type: "DELETE"
                }
            })
        } catch (error) {
            return res.status(500).json({
                error,
                request: {
                    type: "DELETE"
                }
            })
        }
    }

    async update(req, res) {
        try {
            const response = await this.model.update(req.params.id, req.body);
            return res.status(200).json({
                response,
                request: {
                    type: "PUT"
                }
            })
        } catch (error) {
            return res.status(500).json({
                error,
                request: {
                    type: "PUT"
                }
            })
        }
    }

    routes() {
        const route = express.Router();

        route.get(this.path, this.index.bind(this))
        route.post(this.path, this.store.bind(this))
        route.get(`${this.path}/:id`, this.show.bind(this))
        route.delete(`${this.path}/:id`, this.destroy.bind(this))
        route.put(this.path, this.update.bind(this))

        return route
    }

}
module.exports = BaseController;