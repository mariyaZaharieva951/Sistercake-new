const express = require("express");
const router = express.Router();

const Cake = require('../models/cake');
const CakeMenu = require('../models/cakeMenu');
const BirthdayCake = require('../models/birthdayCake');

const createCake = async (req, res) => {
    try {
        const cakesData = req.body.cakes; 
        const cakes = await Promise.all(Object.keys(cakesData).map(async (key) => {
            const cakeData = cakesData[key];
            const cake = new Cake(cakeData);
        
            return await cake.save(); 
        }));

        res.status(201).json(cakes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createBirthdayCake = async (req, res) => {
    try {
        console.log('BODY',req.body)
        const cakesData = req.body.cakes; 
        
        const birthdayCakes = await Promise.all(Object.keys(cakesData).map(async (key) => {
            const cakeData = cakesData[key];
            const birthdayCake = new BirthdayCake(cakeData);
        //console.log(birthdayCakes)
            return await birthdayCake.save(); 
        }));

        res.json(birthdayCakes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createWeddingCake = async (req, res) => {
    try {
        const cakesData = req.body.cakes; 
        const weddingCakes = await Promise.all(Object.keys(cakesData).map(async (key) => {
            const cakeData = cakesData[key];
            const weddingCake = new CakeMenu(cakeData);
        
            return await weddingCake.save(); 
        }));

        res.json(weddingCakes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createKidsCake = async (req, res) => {
    try {
        const cakesData = req.body.cakes; 
        const kidsCakes = await Promise.all(Object.keys(cakesData).map(async (key) => {
            const cakeData = cakesData[key];
            const kidsCake = new CakeMenu(cakeData);
        
            return await kidsCake.save(); 
        }));

        res.json(kidsCakes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createIndividualCake = async (req, res) => {
    try {
        const cakesData = req.body.cakes; 
        const individualCakes = await Promise.all(Object.keys(cakesData).map(async (key) => {
            const cakeData = cakesData[key];
            const individualCake = new CakeMenu(cakeData);
        
            return await individualCake.save(); 
        }));

        res.json(individualCakes);
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
        const allBirthdayCakes = await BirthdayCake.find();
        console.log('all',allBirthdayCakes)
        res.json(allBirthdayCakes)
        
    } catch(err) {
        console.error(err)
        res.status(500).json({error: 'Internal server error'})
    }
}

const getAllWeddingCakes = async (req,res) => {
    try {
        const allWeddingCakes = await CakeMenu.find();
        res.json(allWeddingCakes)
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
    createBirthdayCake,
    createWeddingCake,
    createKidsCake,
    createIndividualCake,
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


