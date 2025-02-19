// console.dir(document);
// console.dir(document.children);
// console.dir(document.children[0]);
// console.dir(document.children[0].children[1].children[0]);
// document.children[0].children[1].children[0].style.color="red";

// document.querySelector("div").style.color="blue";
const obj=document.querySelectorAll("div div");
obj.forEach((d,i)=>{
    if(i==0)
        d.style.color="blue";
    else
        d.style.color="yellow";
})

const mappings={
    Invitation:"You are invited for event",
    Reminder:"You are reminded for task",
    Notice:"You have a notice from college",
    Message:"You have 7 messages"
};

obj.forEach((d)=>{
    d.querySelector("p").innerText=mappings[d.children[0].textContent];
});

// Insert an element

const newEle=document.createElement("div");
const root=document.querySelector("body");
newEle.innerText="Hi From Other Side";
root.appendChild(newEle);

// Object.entries(mappings).forEach(()=>{
//     const newDiv=document.createElement("div");
//     newDiv.innerText="Work Only!";
//     newEle.appendChild(newDiv);
// });

// With back-tick we can have multiple lines.
 
Object.entries(mappings).forEach((d)=>{
    const newDiv=document.createElement("div");
    newDiv.style.border="1px solid lime";
    newDiv.innerHTML=`
    <h4 style="color: orange">${d[0]}</h4>
    <p>${d[1]}</p>
    `;
    newEle.appendChild(newDiv);
});
