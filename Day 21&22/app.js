require("dotenv").config();
const cors=require('cors');
require("./src/config/db.js");

const express=require('express');
const morgan=require('morgan');
const {productRouter}=require('./src/api/v1/products/routes/product-routes.js');
const {authRouter} = require("./src/api/v1/auth/routes/authRoutes.js");


const port=2200;

const app=express();
app.use(cors());
app.use(express.json());

// Application level middleware
// app.use((req,res,next)=>{
//     console.log("Hello");
// });
app.use(morgan('dev')); // logging middleware

app.use('/api/v1/products',productRouter);
app.use('/api/v1/auth',authRouter);


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});