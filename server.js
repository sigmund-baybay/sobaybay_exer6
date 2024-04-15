//import statements
import express from 'express';
import mongoose from "mongoose";
import router  from './router.js'

// instantiate the server
const app = express();

//parser in order to read body of incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//uses router
app.use('/', router);

// this tells our server to listen to the port 3000
app.listen(3000, () => { console.log('Server started at port 3000')} );

