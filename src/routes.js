const { Authors, Comments, Posts } = require('./controllers')

module.exports = [
    new Authors().routes(),
    new Posts().routes(),
    new Comments().routes(),
]