const obj=[
    {name:"Devyani",city:"Mumbai",email:"hello1@gmai.com"},
    {name:"Keshav",city:"Noida",email:"hello2@gmai.com"},
    {name:"Jay",city:"Hyserabad",email:"hello3@gmai.com"},
    {name:"Garima",city:"Ghaziabad",email:"hello4@gmai.com"} 
];

const selectOption=document.getElementsByTagName("select")[0];

function showOptions()
{
    selectOption.innerHTML="";
    const citiesObj={};
    obj.forEach((ele)=>{
        citiesObj[ele.city]=true;   
    });
    const cities=Object.keys(citiesObj);
    cities.forEach((ele)=>{
        const newOption=document.createElement("option");
        newOption.value=ele;
        newOption.innerText=ele;
        selectOption.appendChild(newOption);
    });
};

const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log(e);
    console.log(e.target.email);        //  to acces form tag
    console.log(e.target.name.value);   //the ways to access the form elements
    console.log(e.target[2].value);

    //Add Data
    const isEmailExists=obj.some((ele)=>{
        return ele.email===e.target.email.value;
    });
    if(isEmailExists)
    {
        alert("Email already exists");
        return ;
    }
    const newEle={
        name: e.target.name.value,
        city: e.target.city.value,
        email: e.target.email.value,
    };
    obj.push(newEle);
    console.log(obj);
}