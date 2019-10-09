var express = require('express')
var cors = require('cors')
var route_mysql = require('./router/route_mysql.js')
var route_upload = require('./router/route_upload.js')

var app = express()
app.use(cors())
app.use('/file', express.static('file'));
app.use(route_mysql)
app.use(route_upload)

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/templates/app.html')
})

app.listen(1234, ()=>{
    console.log('Server aktif di port 1234')
})