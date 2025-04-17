// const http=require("http")
// const server=http.createServer((req,res)=>
// {
//     console.log(req);
// })
// server.listen(1200);

// const http=require("http");
// const port=1200;

// const server=http.createServer(req,res)=>{
//     console.log(req);
// };

// server.listen(port,()=>{
//     console.log(`Server is running on ${port}`);
//     console.log(`http://localhost:${port}`);
// })

// const http=require("http");
// const port=1200;

// const server=http.createServer((req,res)=>{
//     console.log(req);
//     console.log(req.url);
//     res.setHeader('Content-Type','text/html');
//     res.setHeader('my-name','John Doe');
//     res.end(`
//         <div style="border: 1px solid black; padding: 10px; margin: 10px; width: 200px;">
//             <h2>Product 1</h2>
//             <p>Price: $10</p>
//             <p>Description: A great product.</p>
//         </div>
//         <div style="border: 1px solid black; padding: 10px; margin: 10px; width: 200px;">
//             <h2>Product 2</h2>
//             <p>Price: $20</p>
//             <p>Description: Another great product.</p>
//         </div>    
//     `);
// })

// server.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// })

const http=require("http");
const port=1200;

const server=http.createServer((req,res)=>{
    console.log(req);
    console.log(req.url);
    res.setHeader('Content-Type','text/html');
    res.setHeader('my-name','John Doe');
    res.end(`
         
    `);
})

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})