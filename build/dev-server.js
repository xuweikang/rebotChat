require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

var router=express.Router();
// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

//对所有的内容数据进行mock
let appData=require('../mockdata.json');
let dialogue=appData.dialogue;
//获得聊天内容 (如果聊天id参数不存在的话就获取所有)
router.get('/dialogue', (req, res) => {
  if(req.query.id){
    for(var i=0;i<dialogue.length;i++){
    if(req.query.id==dialogue[i].id){
       res.json({
          data:dialogue[i]
        })
     }
    }
  }else{
    res.json({
          data:appData.dialogue
        })
  }

})
//获得用户信息
router.get('/user', (req, res) => {
  res.json({
    data:appData.user
  })
})

//接入图灵机器人接口
router.get('/tulingapi', (req, res) => {
  let response=res
  let info = req.query.message
  let userid = req.query.id
  let key = '9857cf36b0bc4a48b8ba3f976e43a4cf'
  superagent.post('http://www.tuling123.com/openapi/api')
  .send({info, userid, key})
  .end((err,res) => {
    if(err){
      console.log(err)
    }
    response.json({
      data: res.text
    })
  })
})

app.use('/api',router);

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
