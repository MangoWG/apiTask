import app from "./app.js";
import { connectdb } from "./db.js";
const port=4000


await connectdb()


app.listen(port,()=>{
    console.log('La aplicacion esta en el puerto '+port)
})