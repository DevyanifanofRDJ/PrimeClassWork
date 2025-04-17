const {ulid}=require('ulid');
const fsPromises=require('fs/promises');

const saveProductArray=async(arr)=>{
    await fsPromises.writeFile(
        "./data.json",JSON.stringify(arr)
    );
};

const saveProducts=(obj)=>{
    obj.id=ulid();
    const oldArray=getProducts();
    oldArray.push(obj);
    saveProductArray(oldArray);
};

const getProducts=async()=>{
    const str=await fsPromises.readFile("./data.json","utf-8");
    const arr=JSON.parse(str);
    return arr;
}

module.exports={
    saveProducts
};