const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flight.controller');

router.get('/', flightController.getFlights);
router.get('/:id', flightController.getFlight);
router.post('/', flightController.addFlight);
router.post('/sync', flightController.syncFlights);

module.exports = router;