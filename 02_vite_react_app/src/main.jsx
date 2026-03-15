import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

function Myapp(){
    return(
        <h1>Hi I am My App</h1>
    )
}
// const reactElement = {
//     type: 'a',
//     props : {
//         href : "https://google.com",
//         target : "_blank",
//     },
//     children: "click me to visit google"
// }

const anotherElement = (
        <a href="https://google.com" target= "_blank">visit Google</a>
    )
const reactuser = "Bhakti Panchal"
const reactElement = React.createElement(
    'a',
    {href: "https://google.com" , target: "_blank"},
    "click me to visit google",
    reactuser

)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
    // <Myapp/>
    //{/*  Myapp()*/} // only run without strict mode
    //{/*<reactElement/>*/} // not run
    //{/*reactElement*/} // not run
    //{/*anotherElement*/} // this will work without strict mode
    reactElement
)
