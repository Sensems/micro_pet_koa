const router = require('koa-router')()

router.post('/', async (ctx, next) => {
  console.log(ctx.request.body)
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
