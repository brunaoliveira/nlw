const database = require('./database/db.js')
const {subjects, weekdays, getSubject } = require('./utils/format.js')

// FUNCTIONS
function pageLanding(req, res) {
    // sem nunjucks: return res.sendFile(__dirname + "/views/index.html")
    return res.render("index.html")
}

function pageStudy(req, res) {
    filters = req.query

    if (!filters.subjects || !filters.weekdays || !filters.time) {
        return res.render("study.html", {subjects, weekdays, filters})

    }
    console.log('não tem campos vazios')
    const query = `
            SELECT classes.*, proffys.*
            FROM proffys
            JOIN classes ON (classes.proffy_id = proffys.id)
            WHERE EXISTS (
                SELECT class_schedule.*
                FROM class_schedule
                WHERE class_schedule.class_id = classes.id
                AND class_schedule.weekday = ${filters.weekday}
                AND class_schedule.time_from <= ${filters.time_from}
                AND class_schedule.time_to > ${filters.time_to}
            );
        `
}

function pageGiveClasses(req, res) {
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

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}