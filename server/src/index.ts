import express from 'express' 
import fs from 'fs/promises'
import path from 'path'
import cookieParser from 'cookie-parser'
import http from 'http'
import { Server, Socket } from 'socket.io'
const app = express();

const server = http.createServer(app);
const io = new Server(server);

app.use(cookieParser());
app.use(express.json());
app.use(/.+\.js$/, async (req, res, next) => {
    const result = path.resolve(__dirname, '..', '..', 'frontend', `dist${req.originalUrl}`);
    try{
        await fs.access(result);
        res.sendFile(path.basename(result), {
            root:path.dirname(result)
        });
    } catch(err){
        next();
    }
});

app.get('/', (req, res) => {
    
    res.sendFile('index.html', {
        root:path.resolve(__dirname,'..','..', 'frontend/dist')
    });
});

server.listen(80,()=>{
    console.log('listening on *:80');
});