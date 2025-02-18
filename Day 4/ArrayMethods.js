//For each cannot return anything but Map can

const arr=[10,20,30];

//Using For Each
// const newArr=[];
// arr.forEach((a)=>{
//     newArr.push(a*2);
// });
// console.log(newArr);

//using Map  (Map can do anything that forEach can but its opposite is not true)
// const newArr=arr.map((a)=>{
//     return a*2;
// });
// console.log(newArr);

//reduce method

arr.reduce((accumulator,element,index,array)=>{
    console.log(accumulator,element,index,array); 
    return accumulator; //Undefined is because we are not returning anything inside the reduce method
}); //When no default is given then it considers first element as default and in this case number of iteration is size of array -1(skips first index of array)

//Use Case
//1. Sum

const ans=arr.reduce((acc,ele)=>
{
    return acc+ele;
},0);
console.log(ans);

//2. multiply
const mul=arr.reduce((acc,ele)=>
{
    return acc*ele;
});
console.log(mul);

// Reduce can work as anything(map,forEach,etc) (like a universal gate)
const newArr=arr.reduce((acc,ele)=>{
    acc.push(ele*2);
    return acc; //Accumulator is an array
});
console.log(newArr);