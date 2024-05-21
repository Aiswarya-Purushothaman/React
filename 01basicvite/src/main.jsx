import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Youtube from './youtube.jsx'

// const reactelement={
//   type:'a',
//   props:{
//     href:"https://google.com",
//     target:'_blank'
//   },
//   textinside:'click me to visit google'
// }


 const anotherreact=React.createElement(
  'a',
  {'href':"https://google.com"," target":'_blank'},
  "click here to visit google"
 )


ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
    // <Youtube/>
    // anotherreact  

)
