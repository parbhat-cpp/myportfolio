const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const PORT = 80

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.status(200).render("home")
})

app.get('/about', (req, res) => {
    res.status(200).render("about")
})

app.get('/contact', (req, res) => {
    res.status(200).render("contact")
})

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})