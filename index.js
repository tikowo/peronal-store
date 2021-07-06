const express = require('express');
const _ = require('./src/utils/expressCallback');

const { shopController } = require('./src/controllers')

const app = express();
app.use(express.json());

app.post('/shop', _(shopController.store))
app.get('/shop/:id', _(shopController.show))
app.get('/shop', _(shopController.index))
app.put('/shop/:id', _(shopController.update))

app.listen(3000, () => {
    console.log('Listening on port 3000')
})