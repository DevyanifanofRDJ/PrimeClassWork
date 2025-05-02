const { OtpModel } = require("../../../../models/otp.js");
const { sendOtpMail } = require("../../../../utils/emailHelper.js");
const bcrypt = require("bcryptjs");

const sendOtpController=async(req,res)=>{
    try{
        const {email}=req.body;
        // only send otp when there is no otp sent earlier or it was sent more than 10 minutes ago
        const otp=Math.floor(Math.random()*9000+1000);
        await sendOtpMail({otp,email});
        const salt=await bcrypt.genSalt(14);
        console.log("Salt",salt);
        const hash=await bcrypt.hash(otp+"",salt);
        console.log("Hash",hash);
        OtpModel.create({
            email:email,
            otp:hash,
        });
        res.status(201);
        res.json({
            status: "Success",
            message: "OTP sent successfully",
        });
    }catch(err){
        console.log("Error in sendOtpController",err.message);
        res.status(500);
        res.json({
            status: "Fail",
            message: "Internal Server error",
        })
    }
};

module.exports={
    sendOtpController,
};