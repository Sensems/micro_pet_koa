const UserModule = require('../models/user');

class userController {
    //创建用户
    static async create(ctx) {
        let req = ctx.request.body;
        console.log(req);
        if(req.username && req.password){
            try {
                let data = {
                    username: req.username,
                    password: req.password,
                }
                let isExist = await UserModule.findOfUsername(data.username);
                if(isExist) {
                    ctx.response.status = 200;
                    ctx.response.body = {
                        code: '412',
                        msg: '用户名已存在',
                        data: {}
                    } 
                }else{
                    let ret = await UserModule.createUser(data);
                    let userData = await UserModule.getUserDetail(ret.id);
                    ctx.response.status = 200;
                    ctx.response.body = {
                        code: '200',
                        msg: '注册成功',
                        data: userData
                    } 
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

    //用户登录
    static async userLogin(ctx) {
        let dataBody = ctx.request.body;
        if(dataBody.username && dataBody.password) {
            try {
                let data = await UserModule.userLogin(dataBody)
                ctx.response.code = 200;
                if(data) {
                    ctx.response.body = {
                        code: 200,
                        data: data,
                        msg: '登录成功'
                    }
                }else {
                    ctx.response.body = {
                        code: 200,
                        data: data,
                        msg: '用户名或密码错误'
                    }
                }
               
            } catch (error) {
                ctx.response.status = 412;
                ctx.response.body = {
                    code: '412',
                    msg: '登录失败',
                    error
                }
            }
        }else {
            ctx.response.status = 416;
                ctx.response.body = {
                    code: '416',
                    msg: '登录信息不完整',
                    error
                }
        }
    }

    //根据用户id查询用户详情
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