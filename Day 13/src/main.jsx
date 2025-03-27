import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(   //This can be written as //const domRoot=document.getElementById("root");  //const reactRoot=createRoot(domRoot);  //reactRoot.render()
   <StrictMode>                                          
    <App />                                             
  </StrictMode>,                                        
)
