import { useState } from "react";

const SignupPage=()=>{
    const [sendingOtp,setSendingOtp]=useState(false);
    const [isOtpSent,setIsOtpSent]=useState(false);
    const [email,setEmail]=useState("");
    const handleSendOtp=async (e)=>{
        try{
            setSendingOtp(true);
            e.preventDefault();
            const email=e.target.email.value;
            setEmail(email);
            const resp=await fetch("http://localhost:2200/api/v1/auth/otp",{
                method:"POST",
                body:JSON.stringify({email}),
                headers:{
                    "content-type": "application/json",
                },
            });
            const data=await resp.json();
            console.log("Data:",data);
            setIsOtpSent(true);
        }catch(err){
            console.log("Error Sending OTP",err.message);
        }finally{
            setSendingOtp(false);
        }
    };

    if(isOtpSent){
        return (
            <div>
                <form>
                    <input value={email} disabled/>
                </form>
            </div>
        )
    }

    return (
        <div>
        <h1>Signup Page</h1>
        <form onSubmit={handleSendOtp}>
            <div>
                <input type="email" name="email" placeholder="Email" />
            </div>
            <div>
                <button type="submit" disabled={sendingOtp} className="">{sendingOtp ? "Sending...":"Send OTP"}</button>
            </div>
        </form>
        </div>
    );  
};

export {SignupPage};