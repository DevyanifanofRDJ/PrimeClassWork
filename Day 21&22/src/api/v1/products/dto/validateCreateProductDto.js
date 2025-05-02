const validateCreateProductdto=(req,res,next)=>{
    try{
        console.log("Validating Create Product Request");
        const {title,price,stock}=req.body;
        if(title===undefined||title===null||title.length<2||typeof title!=="string"){
        // res.status(400);
        // res.json({
        //     status: "Fail",
        //     message: "Invalid Title"
        // });
        throw new Error("Invalid Title");
        }    
        if(price===undefined||price===null||typeof price!=="number"||price<0){
        // res.status(400);
        // res.json({
        //     status: "Fail",
        //     message: "Invalid Price"
        // });
        throw new Error("Invalid Price");
        }
        if(stock!==undefined&&stock!==null)
            if(Number(stock)===NaN||Number(stock)<0){
        // res.status(400);
        // res.json({
        //     status: "Fail",
        //     message: "Invalid Stock"
        // });
        throw new Error("Invalid Stock");
        }
        next();
    }
    catch(err){
        res.status(400);
        res.json({
            status: "Fail",
            message: err.message
        });
    }
};

module.exports={
    validateCreateProductdto,
};