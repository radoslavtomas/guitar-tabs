console.log('hello')
const express = require('express')
const bodyPareser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyPareser.json())
app.use(cors())

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! You have been registered. Have fun!`
    })
})

app.listen(process.env.PORT || 8081)
