import {modelo} from '../models/Aprobado.model.js'

export const test = () => {
    console.log("Servidor A jala ")
}

modelo.create({
    nombre:"Diego",
    apellidoP:"Palos",
    apellidoM:"Padilla",
    promedio:"10"
})
