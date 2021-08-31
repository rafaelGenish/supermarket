const express = require('express')
const cors = require('cors')
const db = require('./database/db')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to SHEFFA ISSAECHR online store!')
})
app.use('/users', require('./routes/users'))

app.listen(1000, console.log('up and run on port 1000'))