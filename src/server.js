// SERVER
const express = require('express')
const server = express()
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

// TEMPLATE ENGINE (connfigura nunjucks)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// SERVER CONFIG
server
.use(express.urlencoded({ extended: true }))
// configura arquivos estáticos (css, scripts, imgs)
.use(express.static("public"))
//  rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// server start
.listen(8900)
// console.log(__dirname)