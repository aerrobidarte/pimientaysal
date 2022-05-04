const express=require('express');
const detalleMenuController=require('../controllers/detalleMenuController.js');
const routers=express.Router();

routers.get('/',detalleMenuController.index);

module.exports=routers;