const router = require('koa-router')()
const userController = require('../controllers/user')
router.prefix('/user')

router.post('/register', userController.create);
router.post('/login', userController.userLogin);

router.get('/getUserDetail/:uid', userController.userDetail);

module.exports = router
