import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

const HOST = "localhost"
const PORT = process.env.PORT || "8080"

const app = express()
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const staticDir = path.join(__dirname, '..', 'dist')
app.use(express.static(staticDir))

app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/../dist/index.html')))

app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)