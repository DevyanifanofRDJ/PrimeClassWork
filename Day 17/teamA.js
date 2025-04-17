console.log("Team A Loading.....");

const add=require('./teamB.js');

const PROFIT=100;
const EXPENSES=20;

// const a1=add(1,2);
// const a2=add(3,4,5);
// const a3=add(6,7,8,9,10);
// const a4=add(11,12,13,14,15,16,17,18,19,20);
// const a5=add(21,22,23,24,25,26,27,28,29,30);

// console.log(a1,a2,a3,a4,a5);

const REVENUE=add(PROFIT,EXPENSES);
module.exports={
    PROFIT,
    EXPENSES,
    REVENUE
};

console.log("Team A Done");