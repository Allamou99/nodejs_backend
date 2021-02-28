const http = require('http');
var express = require('express');
var router = express.Router();
var app = express();
//service web par defaut :  localhost:3000/
router.route('/')
.get((req,res)=>{
    console.log('Default location : get');
    res.json({'nom':'soufiane'}); // le body de la requette http get, devrait avoir la donnée indiqué , sous format JSON ( dans notre cas la donnée :{'nom':'soufiane'} )
})
.post((req,res)=>{
    console.log('Default location : post');
})
.put((req,res)=>{
    console.log('Default location : put')
})
.delete((req,res)=>{
    console.log('Default location : delete')
})
//service web des etudiants : localhost:3000/students
router.route('/students')
.get((req,res)=>{
    console.log('We are in the student web service and we used GET method');
    res.json({'Service web':'students ','Nom':'Soufiane'});
})
.post((req,res)=>{
    console.log('We are in the student web service and we used POST method');
})
.put((req,res)=>{
    console.log('We are in the student web service and we used PUT method');
})
.delete((req,res)=>{
    console.log('We are in the student web service and we used DELETE method');
})






app.use(router);

const port = 3000;
const hostname = 'localhost'
var server = http.createServer(app)
server.listen(3000,hostname,()=>{
    console.log('Server is running on port ' + port);
})





