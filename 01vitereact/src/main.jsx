
import React from 'react'

import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom APP</h1>
    </div>
  )
}
// const reactElement = {
//     type:'a',
//     props:{
//         href :"https://google.com",
//         target:'_blank'
//     },
//     children:'Click me to visit Google'
// }

const anotherElement = (
  <a href='https.//google.com' target='_blank'>visit Google</a>
)
const anotherUser="chai aur react";

const reactElement=React.createElement(
  'a',
  {
    href:"https://google.com",target:"_blank"
  },
  "click me to visit google",anotherUser
)

createRoot(document.getElementById('root')).render(
  // MyApp will parse div in object just like reactElement but we cant pass reactElement directly as it would expect a function in render function

    // <MyApp />
    // MyApp() ->works but not to use 
    // anotherElement
    reactElement

    // <App/>
  
)
