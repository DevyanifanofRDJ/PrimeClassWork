console.log("Team B is Loading.....");

let count=0;

const sum=(...args)=>{
    count++;
    console.log(count);
    let d=0;
    for(let i=0;i<args.length;i++)
    {
        d=d+args[i];
    }
    return d;
}

// console.log(sum(1,2,3,4,5,5,6,7));

module.exports=sum;

console.log("Team B Done");