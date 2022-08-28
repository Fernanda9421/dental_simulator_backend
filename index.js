const express = require('express');

const payment = require('./src/routes/payments.router');
const errorMiddleware = require('./src/middlewares/error.middleware');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.use('/payment', payment);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Api rodando na porta ${PORT}`));