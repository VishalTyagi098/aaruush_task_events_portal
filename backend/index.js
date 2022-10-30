import express from 'express';
import Connection from './database/db.js';
import Route from './routes/Route.js';

const app=express();

// 4. calling routes
app.use('/',Route);

const PORT=8000;

// 1. connects backend to db
Connection();
// 2. starts the backend server
app.listen(PORT,()=>console.log(`Server is running successfully at port ${PORT}`));