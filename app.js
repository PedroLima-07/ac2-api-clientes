const express = require('express');
const app = express();

// Middleware que converte o corpo JSON da requisição em objeto (request.body)
app.use(express.json());

// Rotas de clientes: tudo que começa com /clientes vai para este router
const clientesRouter = require('./routes/clientes');
app.use('/clientes', clientesRouter);

app.listen(3001, () => console.log('server running on port 3001'));
