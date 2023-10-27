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
//# sourceMappingURL=DB.js.map