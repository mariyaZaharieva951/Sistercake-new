const express = require("express");
const router = express.Router();

const cakesController = require('../controllers/cakesController')
//const authContoller = require('../controllers/authController')


    router.get('/', (req, res) => {
        res.send('Server is running!');
    });


    router.post('/cakes', cakesController.createCake);


module.exports = router;