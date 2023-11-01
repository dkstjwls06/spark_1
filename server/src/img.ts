import express from 'express'
import fs from 'fs/promises'
import path from 'path'
const router = express.Router();
// router.use(express.static('..../frontend/img')
//이미지 저장

router.get('/:name',async (req,res)=>{
    let query = req.params.name;
    const data = await fs.readFile(path.resolve(__dirname,'..','..', `frontend/img/${query}.png`));
    res.end(data);
});


export default router;