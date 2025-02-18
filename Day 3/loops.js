const arr=["Delhi","Ghaziabad","Hola Peeps"];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

for(let i in arr)
{
    console.log(i); //returns Keys
}

for(let i of arr)
{
    console.log(i);  //returns values
}

//While
//Do While