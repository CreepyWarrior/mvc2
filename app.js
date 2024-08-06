import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {test} from './backend/controllers/Aprobado.controller.js';
import {test2} from './backend/controllers/Reprobado.controller.js';
import { test3 } from "./backend/controllers/Remediales.controllers.js";
dotenv.config();

mongoose.connect(process.env.url)

.then(()=>{
    console.log("La base de datos jala")
})
.catch(()=>{
    console.log("No funciono la conexion")
})

const app = express();
app.use(cors())

app.listen(4000,() =>{
    console.log("Funciona server")
})

test()
test2()
test3()