import {modelo} from '../models/Reprobados.model.js'

export const test2 = () => {
    console.log("Servidor X jala")
}

modelo.create({
    nombre:"Diego",
    apellidoP:"Palos",
    apellidoM:"Padilla",
    promedio:"5"
})
