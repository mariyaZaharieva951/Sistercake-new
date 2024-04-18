const express = require("express");
const router = express.Router();

const cakesController = require('../controllers/cakesController')
//const authContoller = require('../controllers/authController')


    router.get('/', (req, res) => {
        res.send('Server is running!');
    });


    router.post('/cakes', cakesController.createCake);
    router.get('/cakes', cakesController.getAllCakes);

    router.post('/birthdayCakes', cakesController.createBirthdayCake);
    router.get('/birthdayCakes', cakesController.getAllBirthdayCakes);

    router.post('/weddingCakes', cakesController.createWeddingCake);
    router.get('/weddingCakes', cakesController.getAllWeddingCakes);
    
    router.post('/kidsCakes', cakesController.createKidsCake);
    router.get('/kidsCakes', cakesController.getAllKidsCakes);

    router.post('/individualCakes', cakesController.createIndividualCake);
    router.get('/individualCakes', cakesController.getAllIndividualCakes);

    

module.exports = router;