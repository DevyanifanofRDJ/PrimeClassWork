// const root=document.getElementById("list");
// const l=document.createElement("ul");
// const li1=document.createElement("li");
// li1.innerText="Item 1";
// const li2=document.createElement("li");
// li2.innerText="Item 2";
// const li3=document.createElement("li");
// li3.innerText="Item 3";
// l.appendChild(li1);
// l.appendChild(li2);
// l.appendChild(li3);
// root.appendChild(l);

// console.log(React);
// console.log(ReactDOM);

// const domRoot=document.getElementById("list");
// const reactRoot=ReactDOM.createRoot(domRoot);

// const li1=React.createElement("li",{
//     style:{
//         color:"red"
//     }
// },"Item 1");
// const li2=React.createElement("li",{
//         className:"text-big"
// },"Item 2");
// const li3=React.createElement("li",{},"Item 3");

// const ul=React.createElement("ul",{},[li1,li2,li3]);
// reactRoot.render(ul);

const domRoot=document.getElementById("list");
const reactRoot=ReactDOM.createRoot(domRoot);

const title=React.createElement("h1",{},"Hello from other Side!!");

console.log("type of title",typeof title);
console.log("title: ",title);
//Symbol data type cannot be copied....

const title2=<h1>Hello form other Side!!</h1>

const title3=()=>{
    return <h1>Hello from Other Side!!</h1>;
};

const Title3=()=>{
    return <h1>Hello from other Side!!</h1>;
};

reactRoot.render(title2);
reactRoot.render(title3());
reactRoot.render(<Title3/>);