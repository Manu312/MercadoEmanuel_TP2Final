import express from 'express';
import router from './routes/routes.js';

//Initializations
const app = new express();


//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use(router);

//Listener
app.listen(8080,()=>{
    console.log(`Servidor corriendo ok en el puerto ${8080}`);
});