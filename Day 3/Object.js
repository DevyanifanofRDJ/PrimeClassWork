// const obj={
//     name:"Devyani", 
//     "city":"Ghaziabad"
// };
// if there is only one word in key then we don't need inverted commas (if we want we can still use them)

// console.log(obj);

// const obj={
//     name:"Devyani",
//     name:"Tyagi",   /*Overrides previous key*/ 
//     "city":"Ghaziabad"
// };
// console.log(obj);

// Access the value

const obj={
        name:"Devyani",
        name:"Tyagi",   
        "city":"Ghaziabad"
    };
const username=obj.name;
console.log(username);

// How to add the key value pair

obj.country="India";
console.log(obj);

// If you try to access a key which is not present

console.log(obj.address); /*Gives Undefined*/

// Access a value dynamically

const key="city";
console.log(obj[key]);

// using prompt
const i=prompt("Please Enter a Key");
console.log(obj[i]);

// Update a value

obj.city="Mumbai"; /*Static*/

const x="city";
obj[x]="Delhi";
console.log(obj);

// Delete a key value pair

delete obj.city;
console.log(obj);