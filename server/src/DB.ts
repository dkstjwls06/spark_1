import { Router } from 'express';
import { MongoClient, Collection } from 'mongodb'
import secretobj from './secret' 
import { makeuser } from './types';
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

export const findOne = async <K>(obj:object, type:string = 'users') => { // 유저 찾기 (찾는 객체, 콜렉션 (현재는 users))
    try{ // 해당 데이터 찾아서 반환
        const data:K = await map.get(type).findOne(obj);
        return data;
    } catch(err){ // 에러나면 에러 표시 null 반환
        console.log(err);
        return null;
    }
}

export const checkUser = async (id:string, hash:string, isAdmin:boolean = false) => { //유저 존재 확인
    const data = await map.get('users').findOne({hash}); // 유저가 입력한 해시랑 같은 것이 존재하는지 확인
    if(data){ // 있는 경우
        if(isAdmin){//어드민인경우
            if(data.isAdmin && id === data.id){ // 아이디 일치, 어드민
                return true;
            }
        } else {
            if(data.id === id){ //아이디 일치
                return true;
            }
        }
    }
    return false; //여기까지 온 경우 - 무엇이든 하나 이상 틀림 / 함수 종료
};

export const insertData = async (obj:any, type:string = 'users') => { // 회원가입 - 유저 정보 넣기
    try{
        await map.get(type).insertOne(obj); // obj(유저정보) 객체에 추가
        return true;
    } catch(err){
        console.log(err);
        return false; // 에러 발생시 함수 종료
    }
};

export const deleteData = async (obj:object, type:string='users') => { // 유저 정보 삭제
    try{
        await map.get(type).deleteOne(obj); // 해당 유저 정보 객체 삭제
        return true; // 함수 종료
    } catch(err){ // 에러 시 함수 종료
        console.log(err);
        return false;
    }
};

export const newData = async (path:'users', type:'hash',newdata:string,userdata:makeuser)=>{
    try {
        const res = await map.get(path).updateOne(
            {_id:userdata._id}, // 해당 _id의
            {
                $set:{[`${type}`]:newdata}
            } // 아이디나 해시(비번)을 새 데이터로 바꿈
        )
        return true;
    } catch (err) {
        console.log(err)
        throw err
    }
}

export const checkOverlap = async (name:string, value:string, type:string="users") => { // 아이디 중복확인
    const data = await map.get(type).findOne({ //type(기본은 users) 안에서 해당 아이디 존재하는지 DB에서 찾아보기
        [name]:value 
    });
    if(data){ // 중복되는 아이디가 있을 시
        return false; // 거짓 반환
    } else { // 없을 시
        return true; //허가 반환 (ID생성 허락)
    }
};