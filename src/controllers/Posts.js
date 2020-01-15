const BaseController = require('./BaseController')
const Posts = require('../models/Posts')

class PostsController extends BaseController {
    constructor() {
        super(Posts, '/posts');
    }

    async customFind() {

    }

    routes() {
        const routes = super.routes();

        routes.get('/posts/customfind', this.customFind)

        return routes;
    }
}

module.exports = PostsController;