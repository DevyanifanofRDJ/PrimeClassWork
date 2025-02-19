console.dir(window); //Window object represents BOM
console.dir(document);  //document represents DOM

//document is given by Windowa

document.write("hello"); //This will wrte hello on screen but is debricated because this creates node with  neither a opening nor closing tag

// document.getElementById() (This returns either null or element)
// document.getElementsByClassName()  (This returns HTML Collections, which is like an array(iterable))
    // If class does not exists this returns empty html collection.
// document.getElementsByTagName()  (This also returns HTML Collections)
// document.querySelector()
// document.guerSelectorAll()

// const ele=document.getElementById("text");
// console.dir(ele);
// ele.style.color="yellow";

// const e=document.getElementsByClassName("tex");
// console.dir(e);

const e=document.getElementsByTagName("p");
console.dir(e);