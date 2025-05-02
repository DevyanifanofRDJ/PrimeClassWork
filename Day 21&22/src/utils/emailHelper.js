// afptqiroyugorllf

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
// secure: false, true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_SERVICE_USER,
    pass: process.env.EMAIL_SERVICE_PASSWORD,
  },
});

const sendMail= async ({emails,subject,html})=>{
    try{
        const info = await transporter.sendMail({
            from: '"Admin App 👻" <devyani@gmail.com>', // sender address
            to: emails, // list of receivers
            subject: subject, // Subject line
            html: html, // html body
        });
    }catch(err){
        console.log("--------------------------");
        console.log("Could Not Send Email");
        console.log(err.message);
        console.log("--------------------------");
        throw err;
    }
};

const sendOtpMail=async ({otp,email})=>{
    await sendMail({
        subject: "OTP verification @ Admin App",
        emails: [email],
        html: `
            <html>
                <body>
                    <div style="display: flex; align-items: center; justify-content: center; backgroung: #f0f0f0; padding: 20px;">
                        <div style="padding: 2rem;">
                            <h2>OTP Verification</h2>
                            <p>Your OTP for verification is <strong>${otp}</strong></p>
                        </div>
                    </div>
                </body>
            </html>
        `,
    });
};

module.exports={
    sendOtpMail,
};