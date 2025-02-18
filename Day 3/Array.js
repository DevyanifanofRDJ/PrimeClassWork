const arr=["hello","world","hehe","bye"];
console.log(arr);
console.log(arr.length);

const obj={
    1:"hello",
    2:"world",
    3:"hehe",
    4:"bye"
};
console.log(obj);

// Add in array (correct way)

arr.push("world");
console.log(arr);

// How to access

console.log(arr[2]);

// How to update

arr[3]="amazon";
console.log(arr);

//Wrong way (We do not have array out of bounds here in JS)
arr[8]=32;
console.log(arr); // this is wrong because this creates undefined spaces in between the array
console.log(arr[7]);

// Incorrect Syntax for delete

delete arr[8];  // this is wrong because this creates undefined spaces in between the array
console.log(arr);

