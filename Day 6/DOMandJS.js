const obj=[
    {name:"Devyani",city:"Mumbai",email:"hello1@gmai.com"},
    {name:"Keshav",city:"Noida",email:"hello2@gmai.com"},
    {name:"Jay",city:"Hyserabad",email:"hello3@gmai.com"},
    {name:"Garima",city:"Ghaziabad",email:"hello4@gmai.com"} 
];

// const root=document.getElementById('parent');               //How to give class name to HTML names:
// obj.forEach((ele)=>                                             //1. setAttribute('class','className')
// {                                                               //2. classList.add('className')
//     const newCard=document.createElement('div');                //3. element.className='className'
//     newCard.className="card";
//     newCard.addEventListener('click',()=>
//     {
//         console.log("Card Clicked!");
//         newCard.style.backgroundColor=getRandomColor();
//     },useCapture=true);       //useCapture creates the event in the capturing phase
//     newCard.innerHTML=`
//     <h4>${ele.name}</h4>;

//     <h6>${ele.city}</h6>
//     <p class="text">${ele.email}</p>
//     `;                       
//     newCard.style.color="#FFF2DB";                               
//     root.appendChild(newCard);
// });

const root=document.getElementById('parent');               //How to give class name to HTML names:
obj.forEach((ele)=>                                             //1. setAttribute('class','className')
{                                                               //2. classList.add('className')
    const newCard=document.createElement('div');                //3. element.className='className'
    newCard.className="card";
    newCard.addEventListener('click',()=>
    {
        console.log("Card Clicked!");
        newCard.style.backgroundColor=getRandomColor();
    });       //useCapture creates the event in the capturing phase
    newCard.innerHTML=`
    <h4>${ele.name}</h4>;

    <h6>${ele.city}</h6>
    <p class="text">${ele.email}</p>
    `;                       
    newCard.style.color="#FFF2DB";                               
    root.appendChild(newCard);
});

const handleByChange=()=>{
    console.log("Button Clicked!");
    const card=document.getElementsByClassName('card');
    for(let i=0;i<card.length;i++)
    {
        card[i].style.backgroundColor=getRandomColor();
        card[i].style.color=getRandomColor();
    }
}

//getrandomcolor function is getting called before its declaration because this is called by the event handler function
//But if this is called without the event handler then this thing will give error
//getRandomColor() function was alreasdy there in the call stack so when event loop sent the function to the call stack it was alreasdy there, ehich is not the case when we directly call the function without the event handler

const getRandomColor=()=>{
    const randomRed=Math.floor(Math.random()*255);
    const randomGreen=Math.floor(Math.random()*255);
    const randomBlue=Math.floor(Math.random()*255);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
}

//Add event listener creates the events in JS which we were doing using 

// const textElement=document.querySelector(".text");
// textElement.addEventListener("click",()=>{
//     console.log("Para Clicked");
//     textElement.style.backgroundColor=getRandomColor();
// },useCapture=true);

//lets try not to change the color of div when clicled on paragraph
// for this we want to stop the event propogation after the paragraph is clicked

const textElement=document.querySelector(".text");
textElement.addEventListener("click",(event)=>{
    console.log("Para Clicked ",event);
    event.stopPropagation(); //This will stop the event propogation But for this we need to make sure that event porpogation is done during the bubbling phase.
    textElement.style.backgroundColor=getRandomColor();
});
