const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Rota para listar todos os clientes
router.get('/', clientesController.getAll);

// Rota para listar os clientes de uma cidade
// (fica antes de /:id para que "cidade" não seja interpretado como um id)
router.get('/cidade/:cidade', clientesController.getByCidade);

// Rota para buscar um cliente pelo id
router.get('/:id', clientesController.getById);

// Rota para listar os pedidos de um cliente
router.get('/:id/pedidos', clientesController.getPedidos);

// Rota para atualizar os dados de um cliente
router.put('/:id', clientesController.update);

// Rota para adicionar um pedido a um cliente
router.post('/:id/pedidos', clientesController.addPedido);

// Rota para remover um cliente
router.delete('/:id', clientesController.remove);

module.exports = router;
