const obj=[
    {name:"Devyani",city:"Mumbai",email:"hello1@gmai.com"},
    {name:"Keshav",city:"Noida",email:"hello2@gmai.com"},
    {name:"Jay",city:"Hyserabad",email:"hello3@gmai.com"},
    {name:"Garima",city:"Ghaziabad",email:"hello4@gmai.com"} 
];

const root=document.getElementById('parent');               //How to give class name to HTML names:

const handleByChange=()=>{
    console.log("Button Clicked!")
    obj.forEach((ele)=>                                             //1. setAttribute('class','className')
    {                                                               //2. classList.add('className')
        const newCard=document.createElement('div');                //3. element.className='className'
        newCard.className="card";
        newCard.addEventListener('click',()=>
        {
            console.log("Card Clicked!");
            newCard.style.backgroundColor=getRandomColor();
        });       
        newCard.innerHTML=`
        <h4>${ele.name}</h4>
        <h6>${ele.city}</h6>
        <p class="text">${ele.email}</p>
        <button onclick="DeleteDiv(event,${ele.name})">Delete</button>
        `;                       
        newCard.style.color="#FFF2DB";   
        root.appendChild(newCard);
    });
    const card=document.getElementsByClassName('card');
    for(let i=0;i<card.length;i++)
    {
        card[i].style.backgroundColor=getRandomColor();
        card[i].style.color=getRandomColor();
    }
}

const getRandomColor=()=>{
    const randomRed=Math.floor(Math.random()*255);
    const randomGreen=Math.floor(Math.random()*255);
    const randomBlue=Math.floor(Math.random()*255);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
}

const textElement=document.querySelector(".text");
textElement.addEventListener("click",(event)=>{
    console.log("Para Clicked ",event);
    event.stopPropagation(); 
    textElement.style.backgroundColor=getRandomColor();
});

const DeleteDiv=(e,name)=>{
    e.target.parentElement.remove();
    const index=obj.findIndex((ele)=>{
        ele.name==name;
    })
    obj.splice(index,1);
}

// const handleSelect=(e)=>{
//     const selectedCity=e.target.value;
//     const newData=obj.filter((ele)=>{
//         if(ele.city===selectedCity)
//             return true;
//         return false;
//     });
//     handleByChange(newData);
// }

handleByChange(obj);