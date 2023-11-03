import express from 'express' 
import fs from 'fs/promises'
import path from 'path'
import cookieParser from 'cookie-parser'
import img from './img'
import {findOne, checkUser, insertData, deleteData} from './DB'
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

app.get('/mail', (req, res) => {
    res.sendFile('/mail.html', {
        root: path.resolve(__dirname,'..','..', 'frontend/dist/login')
    })
})

app.get('/favicon.ico',(req,res)=>{
    res.sendFile('favicon.ico',{
        root: path.resolve(__dirname,'..','..', 'frontend/img')
    })
})

app.use('/img',img)



app.get('/login', (req, res) => {
    res.clearCookie('id');
    res.clearCookie('hash');//전에 남아있을 쿠키 지우기
    res.sendFile('login.html', { //로그인 페이지 보내기
        root:path.resolve(__dirname, '..', '..', 'frontend/dist/login')
    });
});

app.use('/', async (req, res, next) => { 
    const { id, hash } = req.cookies; 
    if(id && hash){
        const check:boolean = await checkUser(id, hash);
        console.log(`[메인 페이지 접근 시도] id : ${id}, 여부 : ${check}`) ; 
        if(check){ 
            console.log(hash);
            next(); 
            return false;
        }
    }
    res.redirect('/login'); 
});



app.get('/', (req, res) => {
    
    res.sendFile('index.html', {
        root:path.resolve(__dirname,'..','..', 'frontend/dist')
    });
});

app.listen(80,()=>{
    console.log('listening on *:80');
});