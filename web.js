const express = require('express')
const app = express()
const PORT = 8001

app.use(express.static(__dirname + '/build'))

app.get('/', (req, res) => {
    res.render('index.html')
})

app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})