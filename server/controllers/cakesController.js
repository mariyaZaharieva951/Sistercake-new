const express = require("express");
const router = express.Router();

const Cake = require('../models/cake');

const createCake = async (req, res) => {
    try {
        const { price } = req.body;
        const cake = new Cake({ price });
        await cake.save();
        res.status(201).json(cake);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { createCake };
// const getAllCakes = async (req,res) => {
//     try {
//         const allCakes = await Cake.find();
//         console.log(allCakes);
//         res.json(allCakes)
//     } catch(err) {
//         console.error(err)
//         res.status(500).json({error: 'Internal server error'})
//     }
// }

// router.get('/', async (req,res) => {
//     const allCakes = await Cake.find();
//     console.log(allCakes);
//     res.json(allCakes);
// })


