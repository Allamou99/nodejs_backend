const express = require('express');
const defaultRouter = express.Router();

defaultRouter.route('/')
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

module.exports = defaultRouter;