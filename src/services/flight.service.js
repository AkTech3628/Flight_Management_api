const Flight = require('../models/flight.models');

// Real world flight data fetch from AviationStack API and save to DB



const fetchAndSaveFlights = async () => { 
  try { 
    const apiKey = process.env.AVIATION_API_KEY; 
    const url = `http://api.aviationstack.com/v1/flights?access_key=${e37abd64d8a56c31af9c48af0a0688da}&limit=20`; 
 
    const response = await fetch(url); 
    const data = await response.json(); 
    const flights = data.data || []; 
 
    const savedFlights = []; 
 
    for (const f of flights) { 
      if (!f.flight || !f.flight.iata) continue; 


      const flightData = { 
        flightNumber: f.flight.iata, 
        airline: f.airline?.name || 'Unknown', 
        departureAirport: f.departure?.airport || 'Unknown', 
        arrivalAirport: f.arrival?.airport || 'Unknown', 
        departureTime: f.departure?.scheduled || new Date(),//use beacause when api couldnot provide data 
        // then it will save current time as default value

        arrivalTime: f.arrival?.scheduled || new Date(), 
        status: f.flight_status || 'scheduled', 
        
        price: Math.floor(Math.random() * 500) + 100, 
      }; 
 
       
      const saved = await Flight.findOneAndUpdate( 
        { flightNumber: flightData.flightNumber }, 
        flightData, 
        { upsert: true, new: true } 
      ); 
 
      savedFlights.push(saved); 
    } 
 
    return savedFlights; 
  } catch (error) { 
    console.error('Error in fetching flights:', error.message); 
    throw error; 
  } 
}; 
 
const getAllFlights = async () => { 
  return await Flight.find().sort({ departureTime: 1 }); 
}; 

 
const getFlightById = async (id) => { 
  return await Flight.findById(id); 
}; 
 
const createFlight = async (data) => { 
  const flight = new Flight(data); 

  return await flight.save(); 
}; 
 
module.exports = { 
  fetchAndSaveFlights, 
  getAllFlights, 
  getFlightById, 
  createFlight, 
};





