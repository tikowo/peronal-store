const makeShopService = require('./shopService');
const { shopDb } = require('../db');
const { shopValidator } = require('../validators');

const services = Object.freeze({
    shopService: makeShopService({ shopDb, shopValidator })
})

module.exports = services;