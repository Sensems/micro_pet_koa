const UserModule = require('../models/user');

class userController {
    static async create(ctx) {
        let req = ctx.request.body;
        console.log(req);
        if(req.username && req.password){
            try {
                let data = {
                    username: req.username,
                    password: req.password,
                }
                let ret = await UserModule.createUser(data);
                let userData = await UserModule.getUserDetail(ret.id);
                ctx.response.status = 200;
                ctx.response.body = {
                    code: '200',
                    msg: '注册成功',
                    data: userData
                } 
            } catch (error) {
                ctx.response.status = 412;
                ctx.response.body = {
                    code: '412',
                    msg: '注册失败',
                    error
                } 
            }
        }else{
            ctx.response.status = 416;
            ctx.response.body = {
                code: '416',
                msg: '注册信息不全',
            } 
        }
    }

    static async userDetail(ctx) {
        let id = ctx.params.uid

        if(id) {
            try {
                let data = await UserModule.getUserDetail(id);
                console.log(data,'asd')
                ctx.response.status = 200;
                ctx.response.body = {
                    code: '200',
                    msg: '查询成功',
                    data: data
                } 
            } catch (error) {
                ctx.response.status = 412;
                ctx.response.body = {
                    code: '412',
                    msg: '没有此用户',
                    error
                } 
            }
        }
    }
}

module.exports = userController;