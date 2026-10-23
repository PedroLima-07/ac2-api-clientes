const express = require('express');
const app = express();

app.use(express.json());

const clientesRouter = require('./routes/clientes');
app.use('/clientes', clientesRouter);

app.listen(3001, () => console.log('server running on port 3001'));
