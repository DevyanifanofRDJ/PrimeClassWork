import ReactDOM from "react-dom";
import React from "react";

const DOMRoot=document.getElementById("parent");
const reactRoot=ReactDOM.createRoot(domRoot);

const title=<h1>Hello</h1>

reactRoot.render(title);