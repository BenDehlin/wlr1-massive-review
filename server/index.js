// REQUIRE PACKAGES
require('dotenv').config()
const express = require('express')
const massive = require('massive')

// CONTROLLERS
const pieCtrl = require('./controllers/pieController')

// ENV VARIABLES
const {SERVER_PORT, CONNECTION_STRING} = process.env

// SET UP SERVER INSTANCE
const app = express()

// MIDDLEWARE
app.use(express.json())

// DATABASE CONNECTION
massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
})
.then((db) => {
  app.set('db', db)
  console.log("Database connected successfully")
  app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
})
.catch((err) => console.log(err))



// ENDPOINTS
app.get('/api/pie/:id', pieCtrl.getPie)
app.get('/api/pies', pieCtrl.getPies)
app.post('/api/pies', pieCtrl.addPie)
app.delete('/api/pies/:id', pieCtrl.deletePie)
app.put('/api/pies/:id', pieCtrl.editPie)

// Create the endpoint
// Create the action in the controller for the endpoint
// Create the query for the controller to call
// actually call the endpoint on the frontend