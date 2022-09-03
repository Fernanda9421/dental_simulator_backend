const express = require('express');
const cors = require('cors');

const payment = require('./src/routes/payments.router');
const appointment = require('./src/routes/appointments.router');
const treatment = require('./src/routes/treatments.router');
const errorMiddleware = require('./src/middlewares/error.middleware');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/payment', payment);
app.use('/appointment', appointment);
app.use('/treatment', treatment);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Api rodando na porta ${PORT}`));
