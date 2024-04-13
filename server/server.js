const express = require('express');
const { PORT }  = require('./config/index');
const database = require('./config/database');
const expressConfig = require('./config/express')
const routesConfig = require('./config/routes');

// const userService = require('./services/user'); //test
// const authMiddleware = require('./middlewares/auth'); //test

start();

async function start() {

    const app = express();

    await database(app);
    expressConfig(app);
    //routesConfig(app);

    app.use('/', routesConfig);
    app.use('/Sister', routesConfig);

    app.listen(PORT, () => {
        //testAuth(),
        console.log(`Application started at http://localhost:${PORT}`)});
}