import express from 'express';
const app = express();
app.use(express.json()); // middleware to parse req.body to json body

const port = 3000;

app.get('/ping', (_req, res) => {// no se pueden dejar parametros en any 
    console.log('somoene pinged here')
    res.send('pong');
    }
);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
    }
);
