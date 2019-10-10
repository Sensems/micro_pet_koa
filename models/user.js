const Sequelize  = require('../dataBase/db');
const User = Sequelize.import('../schema/user');

//创建表，默认是false，true则是删除原有表，再创建
User.sync({force: false});

class UserModel {
    // 创建用户
    static async createUser(data) {
        return await User.create({
            username: data.username,
            password: data.password
        })
    }

    //查询用户
    static async getUserDetail(id) {
        return await User.findOne({
            where: {id,},
        })
    }
}

module.exports = UserModel;

