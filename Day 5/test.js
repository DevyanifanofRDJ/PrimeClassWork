function change(){
    document.querySelector("div").addEventListener('click',(d)=>{
    if(d.target.style.backgroundColor=="white")
    {
        d.target.style.backgroundColor="black";
        d.target.style.color="white";
    }
    else
    {
        d.target.style.backgroundColor="white";
        d.target.style.color="black";
    }
}
)};