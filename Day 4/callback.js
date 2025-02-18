// const sum=(a,b)=>
// {
//     const ans=a+b;
//     return ans;
// };

// const printPretty=(txt)=>
// {
//     console.log("Print");
//     console.log(txt);
//     console.log("Pretty");
// };

// printPretty(sum(2,3)); // This i not callBack because sum is actually been called

// const sum1=(a,b,c)=>
// {
//     const ans=a+b;
//     c(ans);
// };

// sum1(20,30,printPretty); //This is a callback because printPretty is not directly called, it is actually called by the sum1 function

// Problem
const getMetaData=()=>
{
    const name=prompt("Enter YOur Name ");
    if(name!=null)
        console.log("Hello",name);
    const n=parseInt(prompt("Please enter the number of subjects "));
    return n;
};

const getSubjects=(num)=>
{
    const subjects={};
    for(let i=0;i<num;i++)
    {
        const subject=prompt(`Enter the name of the subject ${i+1}`);  //this is called template literal(String interpolation)
        const marks=parseInt(prompt(`Please Enter the marks of ${subject}`));
        subjects[subject]=marks;
    }
    return subjects;
}

const getpercentage=(obj)=>
{
    const marks=Object.values(obj);
    let totalMarks=0;
    let totalSubjects=0;
    // const tmp=(a)=>
    // {
    //     totalMarks+=a;
    //     totalSubjects++;
    // };
    // marks.forEach(tmp);
    //This can also be done as follows,
    marks.forEach((a)=>
        {
            totalMarks+=a;
            totalSubjects++;
        });
    return (totalMarks/totalSubjects);
};

const getMaxSubject=(obj)=>
{
    let maxScore=0;
    let maxSub;
    const Marks=Object.entries(obj);
    Marks.forEach((ele)=>{
        const subName=ele[0];
        const subMArks=ele[1];
        if(maxScore<subMArks)
        {
            maxScore=subMArks;
            maxSub=subName;
        }
    });
    return maxSub;
};

const getGrade=(percent)=>
{
    const grades=[
        [60,"B"],
        [70,"B+"],
        [80,"A"],
        [90,"A+"]
    ];
    let grade;
    // grades.forEach((arr)=>
    // {
    //     if(arr[0]<=percent)
    //     {
    //         grade=arr[1];
    //     }
    // });
    const idx=grades.findIndex((arr)=>
    {
        if(arr[0]>percent)
            return true;
        return false;
    });
    if(idx==-1)
        console.log(grades[3][1]);
    else if(idx==0)
        console.log("Fail");
    else
        console.log(grades[idx][1]);
};

let num=getMetaData();
let obj=getSubjects(num);
console.log(getpercentage(obj,num));
console.log(getMaxSubject(obj));
const per=getpercentage(obj,num);
getGrade(per);

//For Each Method calls a function (a callback function) once for each element of the array

// const arr=[10,20,30];
// const printPretty=(a,b)=>
// {
//     console.log(a,b); //a=index of array & b=element of array
// }

