const Sequelize  = require('../dataBase/db');
const IndexCarousel = Sequelize.import('../schema/index_carousel');

//创建表，默认是false，true则是删除原有表，再创建
IndexCarousel.sync({force: false});

class IndexCarouselModel {
    static async getAllCarousel() {
        return await IndexCarousel.findAll()
    }
}

module.exports = IndexCarouselModel;

