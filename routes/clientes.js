const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.getAll);
router.get('/cidade/:cidade', clientesController.getByCidade);
router.get('/:id', clientesController.getById);
router.get('/:id/pedidos', clientesController.getPedidos);
router.put('/:id', clientesController.update);
router.post('/:id/pedidos', clientesController.addPedido);
router.delete('/:id', clientesController.remove);

module.exports = router;
