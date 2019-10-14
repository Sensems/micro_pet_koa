const router = require('koa-router')();
const IndexCarouselControllers = require('../controllers/index_carousel');
router.prefix('/index');

router.post('/getAllCarousel', IndexCarouselControllers.getAllCarousel)


module.exports = router
