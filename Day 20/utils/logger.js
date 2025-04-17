const fsPromises=require('fs/promises');

const saveLogs=(req)=>{
    fsPromises.appendFile("logs.txt",req);
};

const requestLog=async(req)=>{
    const {method,url}=req;
    const date=new Date();
    saveLogs(`${date.toLocaleString()} - ${method} - ${url}\n`);
    // saveLogs(JSON.stringify(req.body)+"\n");
};

module.exports={
    requestLog
};