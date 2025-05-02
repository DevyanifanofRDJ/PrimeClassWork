const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    price: Number,
    stack: {
        type: Number,
        default: 1,
        min:0,
    },
});

const ProductModel=mongoose.model("product",productSchema);
module.exports={
    ProductModel,
};