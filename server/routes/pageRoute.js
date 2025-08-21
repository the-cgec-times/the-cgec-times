const express= require('express');
const pageRouter=express.Router();
const pageControll=require('../controller/pageControll');



pageRouter.get('/',pageControll.getHome);

module.exports= pageRouter;