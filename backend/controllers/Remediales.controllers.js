import { modelo3 } from '../models/RemedialesPagados.model.js'

export const test3 = () => {
    console.log("Servidor B jala ")
}
modelo3.create({
    Alumno:"Diego Josue",
    Estatus:"Reprobado"
})