// Var Keyword (function Scope)

const tmp=()=>{
    if(true)
        var username="Devyani";
    console.log(username);
    function printText(a)
    {
        console.log(a);
    }
    printText("Devyani");
}
tmp();
// console.log(username);