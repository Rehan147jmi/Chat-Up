import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import route from './routes/route.js';

const app = express();
 
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',route)

Connection();


app.listen(8000,()=> {
    console.log("server started on port 8000")
})