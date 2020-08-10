// DATA
const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "0123456789", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [729], 
        time_to: [1220]
    },
    {
        name: "Mayk Brito", 
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
        whatsapp: "51999082779", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [729], 
        time_to: [1220]
    },
    {
        name: "Daniele Evangelista", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "0123456789", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [729], 
        time_to: [1220]
    }
]

const subjects = [
    "Biologia",
    "Artes",
    "Ciências",
    "Educação",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

// FUNCTIONS
function pageLanding(req, res) {
    // sem nunjucks: return res.sendFile(__dirname + "/views/index.html")
    return res.render("index.html")
}

function pageStudy(req, res) {
    filters = req.query
    return res.render("study.html", {proffys, subjects, weekdays, filters})
}

function giveClasses(req, res) {
    data = req.query
    // Object.keys(data) é um array com as chaves -> [name, avatar, bio, ..]
    // se data veio vazio, é [] e seu length é 0 e isEmpty=True
    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
        res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays, data})
}

function getSubject(subjectNumber) {
    return subjects[+subjectNumber - 1]
}

// SERVER
const express = require('express')
const server = express()

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
.get("/give-classes", giveClasses)
// server start
.listen(5500)
// console.log(__dirname)