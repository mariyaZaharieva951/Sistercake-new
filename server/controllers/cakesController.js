const express = require("express");
const router = express.Router();

const Cake = require('../models/cake');
const CakeMenu = require('../models/cakeMenu');

const createCake = async (req, res) => {
    try {
        const cakesData = req.body.cakes; 
        const cakes = await Promise.all(Object.keys(cakesData).map(async (key) => {
            const cakeData = cakesData[key];
            const cake = new Cake(cakeData);
            console.log(cakes)
            return await cake.save(); // Записваме тортата в базата данни
        }));

        res.status(201).json(cakes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getAllCakes = async (req,res) => {
    try {
        const allCakes = await Cake.find();
        res.json(allCakes)
    } catch(err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

const getAllBirthdayCakes = async (req,res) => {
    try {
        const allBirthdayCakes = await CakeMenu.find();
        res.json(allBirthdayCakes)
        console.log(allBirthdayCakes)
    } catch(err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

const getAllWeddingCakes = async (req,res) => {
    try {
        const allWeddingCakes = await CakeMenu.find();
        res.json(getAllWeddingCakes)
        console.log(allWeddingCakes)
    } catch(err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

const getAllKidsCakes = async (req,res) => {
    try {
        const allKidsCakes = await CakeMenu.find();
        res.json(allKidsCakes)
        console.log(allKidsCakes)
    } catch(err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

const getAllIndividualCakes = async (req,res) => {
    try {
        const allIndividualCakes = await CakeMenu.find();
        res.json(allIndividualCakes)
        console.log(allIndividualCakes)
    } catch(err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

module.exports = { 
    createCake,
    getAllCakes,
    getAllBirthdayCakes,
    getAllWeddingCakes,
    getAllKidsCakes,
    getAllIndividualCakes
};


// router.get('/', async (req,res) => {
//     const allCakes = await Cake.find();
//     console.log(allCakes);
//     res.json(allCakes);
// })


