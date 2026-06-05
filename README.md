# Flight_Management_api
A Node.js and Express-based flight management API that integrates with external aviation data, synchronizes flight information into MongoDB, and exposes RESTful endpoints for flight retrieval and management. Built using a layered MVC architecture with services, controllers, routes, and centralized error handling.

This project is a backend service built with Node.js, Express, and MongoDB that demonstrates how to design a structured REST API using a layered architecture. The system fetches live flight data from an external aviation provider, normalizes and stores it in MongoDB, and exposes endpoints for querying and managing flight records.

## Key Features

* Flight synchronization from an external aviation API
* MongoDB data persistence using Mongoose
* RESTful API design
* MVC-inspired architecture (Routes → Controllers → Services → Models)
* Environment-based configuration
* Centralized error handling
* Duplicate-safe flight synchronization using upsert operations

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Fetch 
* Dotenv

## What I Learned

While building this project, I focused on backend architecture fundamentals including API design, service-layer abstraction, database modeling, external API integration, and maintaining a clean separation of concerns.


## Environment Variables

Create a `.env` file in the project root and add:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
AVIATION_API_KEY=your_api_key
NODE_ENV=development
```



## High Level Architecture Diagram 
<img width="1408" height="768" alt="Flight_Mangement_api" src="https://github.com/user-attachments/assets/cb153eee-375e-415c-b9cb-2572e3c9bfc0" />

