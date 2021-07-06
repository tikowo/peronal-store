const makeShopController = require('./shopController');
const { shopService } = require('../services');

const shopController = makeShopController({ shopService });

module.exports = {
    shopController
}