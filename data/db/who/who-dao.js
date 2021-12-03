const model = require('../who/who-model');

const findAllWho = () =>
    model.find();

module.exports = {
    findAllWho
};