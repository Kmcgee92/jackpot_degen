const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { State, City } = require('../../models')

router.post('/', asyncHandler(async function (req, res, next) {
    const { theState } = req.body
    const cities = await City.findAll({
        attributes: ['id','name'], order: ['name'], 
        where: {stateId: theState}
    });
    const citiesArr = cities.map(city => [city.dataValues.name, city.dataValues.id])
    res.json({ citiesArr });
}));


module.exports = router;