const { Comments } = require('../models')
const BaseControllers = require('./BaseController')

class CommentsController extends BaseControllers {
    constructor() {
        super(Comments, '/comments');
    }

    async customFind() {

    }
    routes() {
        const routes = super.routes();

        routes.get('/comments/customfind', this.customFind)

        return routes
    }
}

module.exports = CommentsController;