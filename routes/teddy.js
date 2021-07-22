const express = require('express');
const router = express.Router();
var cors = require('cors')
var app = express()

app.use(cors())

const teddyCtrl = require('../controllers/teddy');

router.get('/', teddyCtrl.getAllTeddies);
router.get('/:id', teddyCtrl.getOneTeddy);
router.post('/order', teddyCtrl.orderTeddies);

module.exports = router;