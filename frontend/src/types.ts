export interface status{
    status:'good' | 'bad',
    url?:'/',
    reason?:string
}

export interface query{
    share:string,
    title:string
}