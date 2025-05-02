const { Mongoose } = require("mongoose");
const {ProductModel}=require("../../../../models/product-schema.js");

const getProductsController=async(req,res)=>{
    // const productList=await ProductModel.find();
    const {page=1,limit=6,q=""}=req.query;
    let mongooseQuery=ProductModel.find();
    const regexMatch=new RegExp(q,"i");
    mongooseQuery=mongooseQuery.where('title').regex(regexMatch);
    const queryClone=mongooseQuery.clone();
    const totalProducts=await queryClone.countDocuments();
    mongooseQuery=mongooseQuery.sort("_id");
    mongooseQuery=mongooseQuery.skip((page-1)*limit);
    mongooseQuery=mongooseQuery.limit(limit);
    const productsList=await mongooseQuery;
    // const totalProducts=await ProductModel.countDocuments();
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },5000);
    });
    res.send({
        status:"Success",
        data:{
            products:productsList,
            page:page,
            limit:limit,
            total:totalProducts
        },
    });
};

module.exports={
    getProductsController,
};