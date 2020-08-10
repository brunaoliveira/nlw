// SERVER
const express = require('express')
const server = express()
const {pageLanding, pageStudy, pageGiveClasses} = require('./pages.js')


// TEMPLATE ENGINE (connfigura nunjucks)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// SERVER CONFIG
server
// configura arquivos estáticos (css, scripts, imgs)
.use(express.static("public"))
//  rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// server start
.listen(5500)
// console.log(__dirname)