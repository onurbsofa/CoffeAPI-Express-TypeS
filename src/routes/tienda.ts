import  express  from "express"; //ESmodules syntax

const router = express.Router();

router.get('/' , (_req, res) => {
    res.send('Menu cafe');
}
);

router.post('/' , (_req, res) => {
    res.send('Pedido de cafe');
    }
);

export default router;