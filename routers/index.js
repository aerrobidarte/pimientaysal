const express=require('express');
const indexController=require('../controllers/indexController.js');
const routers=express.Router();

routers.get('/',indexController.index);

module.exports=routers;