const express = require("express");
const router = express.Router();

const cakesController = require('../controllers/cakesController')
//const authContoller = require('../controllers/authController')


    router.get('/', (req, res) => {
        res.send('Server is running!');
    });


    router.post('/cakes', cakesController.createCake);
    router.get('/cakes', cakesController.getAllCakes);

    router.get('/menu', async (req, res) => {
        try {
            const birthdayCakes = await cakesController.getAllBirthdayCakes(req, res);
            const weddingCakes = await cakesController.getAllWeddingCakes(req, res);
            const kidsCakes = await cakesController.getAllKidsCakes(req, res);
            const individualCakes = await cakesController.individualCakes(req, res);
    
            res.status(200).json({
                birthdayCakes,
                weddingCakes,
                kidsCakes,
                individualCakes
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

module.exports = router;