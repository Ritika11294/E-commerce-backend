const express = require('express');
const cors = require('cors');
const connect = require('./src/configs/db');
const port = process.env.PORT || 3001;

const menController = require('./src/controllers/men.controller');
const womenController = require('./src/controllers/women.controller');
const cartController = require('./src/controllers/cart.controller');

const {register, login} = require('./src/controllers/auth.controller')

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", register);
app.post("/login", login)
app.use("/menProducts", menController);
app.use("/womenProducts", womenController);
app.use("/cart", cartController);


app.get('/', (req, res) => {
    res.send("hello world")
})


app.listen(port, async function () {
    try{
        await connect();
        console.log(`listening on port ${port}`)
    }catch (error) {
        console.log('error: ', error)
    }
})
