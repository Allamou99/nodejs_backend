const http = require('http');
var express = require('express');
var defaultRouter = require('./Routes/defaultRouter');
var studentRouter = require('./Routes/studentsRouter');
var app = express();
//service web par defaut :  localhost:3000/

app.use(defaultRouter);
app.use(studentRouter);


const port = 3000;
const hostname = 'localhost'
var server = http.createServer(app)
server.listen(3000,hostname,()=>{
    console.log('Server is running on port ' + port);
})





