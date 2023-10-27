import { Router } from 'express';
import {MongoClient, Collection } from 'mongodb'
import secretobj from './secret' 

const dbName:string = 'spark';
const client = new MongoClient(secretobj.url, { useUnifiedTopology: true });

const map = new Map<string, Collection<any>>();

client.connect(async (err) => { // 서버에 연결
    if(err){ //에러나면
        console.error(err);
        return false; //에러 출력후 함수 종료
    } else {
        const db = client.db(dbName); //dbName 명의 db 생성
        const col = await db.collections(); //
        for(let i of col){
            map.set(i.collectionName, i);
        }
        
        console.log('DB Ready');
        
        // const data = await col.findOne({hash:'2+J70h+B6j178b4fAk0Iys3keRixA0AZXnoX5U3v7bWtjtb6NlWSLm6v2dHspBtaEDEvHtIkkMgeMNlPqpuVXw=='});
    }
});

