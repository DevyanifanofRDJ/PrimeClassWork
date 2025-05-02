const express=require('express');

const { getProductsController } = require('../controller/getProductsController.js');
const { createProductController } = require('../controller/postProductController.js');
const { validateCreateProductdto } = require('../dto/validateCreateProductdto.js');

const productRouter=express.Router();

productRouter.get('/',getProductsController);
productRouter.post('/',validateCreateProductdto,createProductController);

module.exports={
    productRouter,
}