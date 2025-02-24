// console.log("start");
// const handleInnerCall=()=>{
//     console.log("Step Y");
// };
// const handleCall=()=>{
//     console.log("Step M");
//     handleInnerCall();
//     console.log("Step N");
// };
// handleCall();
// console.log("End");

// This above code will execute synchronously.

//In following case the function is executed only when the click event occurs.
// console.log("start");
// const handleInnerCall=()=>{
//     console.log("Step Y");
// };
// const handleCall=()=>{
//     console.log("Step M");
//     handleInnerCall();
//     console.log("Step N");
// };
// document.querySelector("body").addEventListener("click",handleCall);
// console.log("End");

// In following case we are using SetTimeout function to make the function execute after 1 seconds.
// console.log("start");
// const handleInnerCall=()=>{
//     console.log("Step Y");
// };
// const handleCall=()=>{
//     console.log("Step M");
//     handleInnerCall();
//     console.log("Step N");
// };
// setTimeout(handleCall,1000);
// console.log("End");

// console.log("start");
// const handleInnerCall=()=>{
//     console.log("Step Y");
// };
// const handleCall=()=>{
//     console.log("Step M");
//     handleInnerCall();
//     console.log("Step N");
// };
// setTimeout(handleCall,0);   //We have make the time as 0 seconds (This will still have impact on the functions execution)
// console.log("End");
// The set timeout will get executed at the end no matter what because this sends the function to the callback queue and can get executed only when all the 
// functions in the call stack are executed. Even if we write the setTimeout as our first line of our JS code.

// console.log("A");
// const handleCall=()=>{
//     console.log("H");
// };
// setTimeout(()=>{
//     console.log("N");
//     setTimeout(()=>{
//         console.log("P");
//     },0);
//     handleCall();
//     console.log("B");
// },5000);
// console.log("C");

// The output of this code is "ACNHBP"

// Promise: fetch()

// const res=fetch("https://api.github.com/users/DevyaniFanOfRDJ"); //fetch is given to us browser by default. this is not the feature of JS.
// console.log(res); // We can use link form dummyjson website to get any url to fetch the data from.

// When we print the res on console we get the current state of the promise outside but inside it we will see  the actual state.

// const pr=fetch("https://api.github.com/users/DevyaniFanOfRDJ"); 
// // pr only has one single attribute the second attribute is always undefined
// console.log(pr);
// pr.then((a)=>{
//     console.log("a",a);
//     const p2=a.json();
//     p2.then((data)=>{
//         // console.log("data",data);
//         showUI(data);
//     });
// }).catch((b)=>{
//     console.log("b",b);
// });

// function showUI(data)
// {
//     //Responsible for creating visualization.
//     console.log("data",data);
//     const {avatar_url,login,html_url}=data;
//     const card=document.getElementById("card");
//     card.innerHTML=`
//         <h4>${login.toUpperCase()}</h4>
//         <img src='${avatar_url}' alt="Me">
//         <a href='${html_url}'>View Profile</a>`;
// }

const getData=(e)=>{
    const profile=e.target.value;
    const pr=fetch(`https://api.github.com/users/${profile}`); 
// pr only has one single attribute the second attribute is always undefined
    console.log(pr);
    pr.then((a)=>{
        console.log("a",a);
        const p2=a.json();
        p2.then((data)=>{
            // console.log("data",data);
            showUI(data);
     });
    }).catch((b)=>{
        console.log("b",b);
    });
};

function showUI(data)
{
    //Responsible for creating visualization.
    console.log("data",data);
    const {avatar_url,login,html_url}=data;
    const card=document.getElementById("card");
    const newCard=document.createElement("div");
    newCard.id="card";
    card.innerHTML=`
        <h4>${login.toUpperCase()}</h4>
        <img src='${avatar_url}' alt="Me">
        <a href='${html_url}'>View Profile</a>`;

    storeData(data);
}

// View Application tab for storage purposes.
function storeData(data)
{
    // localStorage.setItem("searches",data); //Key value pair
    //We can only store string in local storage.
    const oldData=localStorage.getItem("searches"); //returns a JSON String
    const arr=JSON.parse(oldData||"[]"); //If oldData is null then it will return an empty
    arr.push(data);
    localStorage.setItem("searches",JSON.stringify(data));
}

function showHistory()
{
    const oldData=localStorage.getItem("searches");
    const arr=JSON.parse(oldData||"[]");
    arr.forEach((data)=>{
        showUI(data);
    });
}

showHistory();