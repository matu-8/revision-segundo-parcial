import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import routerBook from './src/routes/book.routes.js';
import inicioDB from './src/config/db.js';

const app = express();
const PORT = process.env.PORT

// middlewares
app.use(express.json());
app.use('/api', routerBook)


const connectDB = async () => {
    await inicioDB();
    app.listen(PORT, () =>{
        console.log(" >>> Servidor inicializado en", PORT)
    });
}
connectDB();

// 
// inicioDB().then(()=>{
//     app.listen(PORT, () => { 
//         console.log(" >>> Servidor inicializado en", PORT)
//     });
// })


// app.listen(PORT, async () => {
//     await startDb();
//     console.log(SERVIDOR CORRIENDO EN: http://localhost:${PORT}/characters)
// });