
const express = require('express');
const studentsRouter = express.Router();

var tableau = [{
    id:'489392',
    nom :'soufiane',
    prenom:'allamou'
},
{
    id:'849494030',
    nom:'ali',
    prenom:'bouzobaa'
}]

//service web des etudiants : localhost:3000/students
studentsRouter.route('/students')
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
});


studentsRouter.route('/students/:id')
.get((req,res)=>{
    tableau.filter(element=>{
        if(element.id == req.params.id)
        {console.log(element)}
    else{
        console.log('Letudiant que vous cherchez nexiste pas');
    }})
})


module.exports = studentsRouter;