const express=require('express');
const app=express();
const {requestLog}=require('./utils/logger.js');
const {saveProducts}=require('./Database/db.js');
const port=1200;

// app.use((req,res,next)=>{
//     console.log(Object.keys(req));
//     requestLog(req);
//     next();
// });

app.use(express.json()); //This creates the body property in the request object. This is used to parse the incoming request body.

app.get("/",(req,res)=>{
    // res.send("Hello");
    console.log(req.url,req.method);
    requestLog(req);
    res.json({
        status:"Success",
        message: `Server is running on port ${port}`
    });
});

//create a route for creating product
// add the logic to store product in file

// app.use((req,res,next)=>{
//     res.status(404);
//     res.json({
//         status: "Fail",
//         message: "You are trying to access a route which is not defined yet."
//     });
// });

// this will not fetch the post route. The above middleware will get always get executed.

app.post("/products",(req,res)=>{
    try{
        const data=req.body;
        saveProducts(data);
        res.json({
            status: "Success",
            message: "Product stored"
        });
    // requestLog(req);
    // res.json({
    //     status: "fail",
    //     message: "Work in progress"
    // });
    }
    catch(err)
    {
        console.log("/products",err.message);
        res.status(500);
        res.json({
            status: "Fail",
            message: "Something went wrong"
        });
    }
});

app.use((req,res,next)=>{
    res.status(404);
    res.json({
        status: "Fail",
        message: "You are trying to access a route which is not defined yet."
    });
});


app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
});