const express = require('express');
const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');


start();

async function start() {
    const app = express();


    expressConfig(app);
    await databaseConfig(app);
    routesConfig(app);

    app.get("/api", (req,res) => {
        res.json({"users": ["It work"]})
    })

    app.listen(5000, () => console.log('Server listening on port 5000'))
}