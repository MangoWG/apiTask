import mongoose from "mongoose";
export const connectdb=async ()=>{
    try{
        await mongoose.connect('mongodb://localhost/api-tareas')
        console.log('Conexion exitosa a la base de datos')

    }catch(error){
        console.log(error)
    }
}
