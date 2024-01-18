import express from 'express';
const app = express();
app.use(express.json()); // middleware to parse req.body to json body

import tiendaRouter from './routes/tienda';

const port = 3000;

app.get('/ping', (_req, res) => {// no se pueden dejar parametros en any 
    console.log('somoene pinged here'+ " " + new Date().toDateString())
    res.send('pong');
    }
);

app.use('/api/tienda', tiendaRouter);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
    }
);
