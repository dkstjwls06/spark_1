export interface Userinfo{
    id:string,
    pass:string
}

export interface makeuser{ // 유저정보
    '_id'?:string,
    id?:string,
    hash?:string,
    mail?:string,
    isAdmin?:boolean,
    status?:Object,
    banned?:boolean
};

export interface mailsec{
    mail:string,
    address:string
}