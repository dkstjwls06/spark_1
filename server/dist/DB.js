"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOverlap = exports.newData = exports.deleteData = exports.insertData = exports.checkUser = exports.findOne = void 0;
const mongodb_1 = require("mongodb");
const secret_1 = __importDefault(require("./secret"));
const dbName = 'spark';
const client = new mongodb_1.MongoClient(secret_1.default.url, { useUnifiedTopology: true });
const map = new Map();
client.connect((err) => __awaiter(void 0, void 0, void 0, function* () {
    if (err) { //에러나면
        console.error(err);
        return false; //에러 출력후 함수 종료
    }
    else {
        const db = client.db(dbName); //dbName 명의 db 생성
        const col = yield db.collections(); //
        for (let i of col) {
            map.set(i.collectionName, i);
        }
        console.log('DB Ready');
        // const data = await col.findOne({hash:'2+J70h+B6j178b4fAk0Iys3keRixA0AZXnoX5U3v7bWtjtb6NlWSLm6v2dHspBtaEDEvHtIkkMgeMNlPqpuVXw=='});
    }
}));
const findOne = (obj, type = 'users') => __awaiter(void 0, void 0, void 0, function* () {
    try { // 해당 데이터 찾아서 반환
        const data = yield map.get(type).findOne(obj);
        return data;
    }
    catch (err) { // 에러나면 에러 표시 null 반환
        console.log(err);
        return null;
    }
});
exports.findOne = findOne;
const checkUser = (id, hash, isAdmin = false) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield map.get('users').findOne({ hash }); // 유저가 입력한 해시랑 같은 것이 존재하는지 확인
    if (data) { // 있는 경우
        if (isAdmin) { //어드민인경우
            if (data.isAdmin && id === data.id) { // 아이디 일치, 어드민
                return true;
            }
        }
        else {
            if (data.id === id) { //아이디 일치
                return true;
            }
        }
    }
    return false; //여기까지 온 경우 - 무엇이든 하나 이상 틀림 / 함수 종료
});
exports.checkUser = checkUser;
const insertData = (obj, type = 'users') => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield map.get(type).insertOne(obj); // obj(유저정보) 객체에 추가
        return true;
    }
    catch (err) {
        console.log(err);
        return false; // 에러 발생시 함수 종료
    }
});
exports.insertData = insertData;
const deleteData = (obj, type = 'users') => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield map.get(type).deleteOne(obj); // 해당 유저 정보 객체 삭제
        return true; // 함수 종료
    }
    catch (err) { // 에러 시 함수 종료
        console.log(err);
        return false;
    }
});
exports.deleteData = deleteData;
const newData = (path, type, newdata, userdata) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield map.get(path).updateOne({ _id: userdata._id }, // 해당 _id의
        {
            $set: { [`${type}`]: newdata }
        } // 아이디나 해시(비번)을 새 데이터로 바꿈
        );
        return true;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.newData = newData;
const checkOverlap = (name, value, type = "users") => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield map.get(type).findOne({
        [name]: value
    });
    if (data) { // 중복되는 아이디가 있을 시
        return false; // 거짓 반환
    }
    else { // 없을 시
        return true; //허가 반환 (ID생성 허락)
    }
});
exports.checkOverlap = checkOverlap;
//# sourceMappingURL=DB.js.map