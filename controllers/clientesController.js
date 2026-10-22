const { randomUUID } = require('crypto');

// Dados armazenados em memória (enquanto a aplicação estiver em execução)
const clientes = [
    {
        id: 1,
        nome: 'Ana Souza',
        idade: 28,
        cidade: 'Sorocaba',
        pedidos: [
            { codigo: randomUUID(), produto: 'Notebook', quantidade: 1 },
            { codigo: randomUUID(), produto: 'Mouse', quantidade: 2 }
        ]
    },
    {
        id: 2,
        nome: 'Bruno Lima',
        idade: 35,
        cidade: 'São Paulo',
        pedidos: [
            { codigo: randomUUID(), produto: 'Teclado', quantidade: 1 }
        ]
    },
    {
        id: 3,
        nome: 'Carla Mendes',
        idade: 22,
        cidade: 'Sorocaba',
        pedidos: []
    },
    {
        id: 4,
        nome: 'Diego Alves',
        idade: 41,
        cidade: 'Campinas',
        pedidos: [
            { codigo: randomUUID(), produto: 'Monitor', quantidade: 2 }
        ]
    }
];

// Lógica para listar todos os clientes
exports.getAll = (request, response) => {
    return response.json(clientes);
};

// Lógica para buscar um cliente pelo id
exports.getById = (request, response) => {
    const { id } = request.params;
    const cliente = clientes.find((c) => c.id === Number(id));
    if (!cliente) {
        return response.status(404).json({ mensagem: 'Id não existente' });
    }
    return response.json(cliente);
};

// Lógica para listar os pedidos de um cliente
exports.getPedidos = (request, response) => {
    const { id } = request.params;
    const cliente = clientes.find((c) => c.id === Number(id));
    if (!cliente) {
        return response.status(404).json({ mensagem: 'Id não existente' });
    }
    return response.json(cliente.pedidos);
};

// Lógica para atualizar os dados de um cliente
exports.update = (request, response) => {
    const { id } = request.params;
    const { nome, idade, cidade } = request.body;
    const index = clientes.findIndex((c) => c.id === Number(id));
    if (index < 0) {
        return response.status(404).json({ mensagem: 'Id não existente' });
    }
    clientes[index] = {
        ...clientes[index],
        nome,
        idade,
        cidade
    };
    return response.json(clientes[index]);
};

// Lógica para adicionar um pedido a um cliente
exports.addPedido = (request, response) => {
    const { id } = request.params;
    const { produto, quantidade } = request.body;
    const cliente = clientes.find((c) => c.id === Number(id));
    if (!cliente) {
        return response.status(404).json({ mensagem: 'Id não existente' });
    }
    const pedido = {
        codigo: randomUUID(),
        produto,
        quantidade
    };
    cliente.pedidos.push(pedido);
    return response.status(201).json(cliente);
};

// Lógica para listar os clientes de uma cidade
exports.getByCidade = (request, response) => {
    const { cidade } = request.params;
    const resultado = clientes.filter(
        (c) => c.cidade.toLowerCase() === cidade.toLowerCase()
    );
    return response.json(resultado);
};

// Lógica para remover um cliente
exports.remove = (request, response) => {
    const { id } = request.params;
    const index = clientes.findIndex((c) => c.id === Number(id));
    if (index < 0) {
        return response.status(404).json({ mensagem: 'Id não existente' });
    }
    clientes.splice(index, 1);
    return response.json({ mensagem: 'Cliente removido com sucesso' });
};
