const IndexCarouselModule = require('../models/index_carousel')

class IndexCarouselControllers {
    static async getAllCarousel(ctx) {
        let CarouselList = await IndexCarouselModule.getAllCarousel()
        ctx.response.status = 200
        ctx.response.body = {
            code: 200,
            data: CarouselList,
            msg: '获取成功'
        }
    }
}

module.exports = IndexCarouselControllers;