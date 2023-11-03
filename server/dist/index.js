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
const express_1 = __importDefault(require("express"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const img_1 = __importDefault(require("./img"));
const DB_1 = require("./DB");
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(/.+\.js$/, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = path_1.default.resolve(__dirname, '..', '..', 'frontend', `dist${req.originalUrl}`);
    try {
        yield promises_1.default.access(result);
        res.sendFile(path_1.default.basename(result), {
            root: path_1.default.dirname(result)
        });
    }
    catch (err) {
        next();
    }
}));
app.get('/mail', (req, res) => {
    res.sendFile('/mail.html', {
        root: path_1.default.resolve(__dirname, '..', '..', 'frontend/dist/login')
    });
});
app.get('/favicon.ico', (req, res) => {
    res.sendFile('favicon.ico', {
        root: path_1.default.resolve(__dirname, '..', '..', 'frontend/img')
    });
});
app.use('/img', img_1.default);
app.get('/login', (req, res) => {
    res.clearCookie('id');
    res.clearCookie('hash'); //전에 남아있을 쿠키 지우기
    res.sendFile('login.html', {
        root: path_1.default.resolve(__dirname, '..', '..', 'frontend/dist/login')
    });
});
app.use('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, hash } = req.cookies;
    if (id && hash) {
        const check = yield (0, DB_1.checkUser)(id, hash);
        console.log(`[메인 페이지 접근 시도] id : ${id}, 여부 : ${check}`);
        if (check) {
            console.log(hash);
            next();
            return false;
        }
    }
    res.redirect('/login');
}));
app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: path_1.default.resolve(__dirname, '..', '..', 'frontend/dist')
    });
});
app.listen(80, () => {
    console.log('listening on *:80');
});
//# sourceMappingURL=index.js.map