const router = require('koa-router')()
const userController = require('../controllers/user')

router.post('/register', userController.create);
router.post('/register', async (ctx) => {
    console.log(ctx.request.body)
});

router.get('/getUserDetail/:uid', userController.userDetail);

module.exports = router
