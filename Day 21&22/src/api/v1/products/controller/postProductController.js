const {ProductModel}=require("../../../../models/product-schema.js")

const createProductController=async (req,res)=>{
    try{
        const obj=req.body;
        const newProduct=await ProductModel.create(obj);
        res.status(201);
        res.json({
            status:"Success",
            data:{
                product: newProduct
            },
        });
}catch(err){
    res.status(500);
}
};
module.exports={
    createProductController,
};