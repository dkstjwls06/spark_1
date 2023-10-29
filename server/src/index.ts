import express from 'express' 
import fs from 'fs/promises'
import path from 'path'
import cookieParser from 'cookie-parser'


const app = express();


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

app.get('/login', (req, res) => {
    res.clearCookie('id');
    res.clearCookie('hash');//전에 남아있을 쿠키 지우기
    res.sendFile('login.html', { //로그인 페이지 보내기
        root:path.resolve(__dirname, '..', '..', 'frontend/dist/login')
    });
});





app.get('/', (req, res) => {
    
    res.sendFile('index.html', {
        root:path.resolve(__dirname,'..','..', 'frontend/dist')
    });
});

app.listen(80,()=>{
    console.log('listening on *:80');
});