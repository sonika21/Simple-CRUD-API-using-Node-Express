import express from 'express'
import bodyParser from 'body-parser'

import usersRoutes from "./routes/users.js"

const app= express(); //initialize express
const PORT = 5000;

app.use(bodyParser.json()); //initialize bodyParser- says using json data in app

app.use('/users', usersRoutes); //use users routes

app.get('/', (req, res)=> res.send('Hello from Home Page'));

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`)); //listen to port 5000

