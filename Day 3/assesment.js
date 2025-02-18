let username=prompt("Enter your name ");
const subjects={};
let n=parseInt(prompt("Enter the number of subjects "));
let sum=0;
for(let i=0;i<n;i++)
{
    let key=prompt("Enter the Subject name ");
    subjects[key]=parseInt(prompt("Enter the marks of "));
    sum+=subjects[key];
}
let total=n*100;
console.log("Final Percentage ",(sum/total)*100);

let sub;
let maxMarks=0;
for(let i in subjects)
{
    if(subjects[i]>maxMarks)
    {
        maxMarks=subjects[i];
        sub=i;
    }
}
console.log("Highest Scoring subject",sub);

for(let i in subjects)
{
    if(subjects[i]>=90)
        console.log("A");
    else if(subjects[i]>=80)
        console.log("B");
    else if(subjects[i]>70)
        console.log("C");
    else if(subjects[i]>60)
        console.log("D");
    else if(subjects[i]>50)
        console.log("E");
    else
        console.log("F");
}