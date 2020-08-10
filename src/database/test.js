const database = require('./db.js')
const createProffy = require('./createProffy.js')

database.then(async (db) => {
    proffyValue = {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "0123456789", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }
    classValue = {
        // proffy id vai vir pelo banco de dados
        subject: "Química", 
        cost: "20",
    }
    classScheduleValues = [
        // class_id virá pelo banco de dados, após cadastrar class
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 5, 
            time_from: 520, 
            time_to: 1220
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})
})