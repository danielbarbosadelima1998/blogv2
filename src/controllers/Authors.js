const {Authors} = require('../models')
const BaseController = require('./BaseController');

class AuthorsController extends BaseController {
    constructor() {
        super(Authors, '/authors');
    }

    async login() {

    }
    routes() {
        const route = super.routes();

        route.post('/authors/login',this.login);

        return route;
    }
}

module.exports = AuthorsController;