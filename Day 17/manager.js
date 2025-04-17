console.log("Manager Loading.....");

const obj=require("./teamA.js");
const sum=require("./teamB.js");

console.log(`Our Current Revenue is ${obj.REVENUE} with 
    ${obj.PROFIT} as profit and ${obj.EXPENSES} as expenses.`);

const REVENUE=sum(100,200);
console.log(REVENUE);

console.log("Manager Done");

// Team A will be loaded only once and the values will be cached
