 function customRender(reactelement,container){
  // const domElement=document.createElement(reactelement.type)
  // domElement.innerHTML=reactelement.textinside
  // domElement.setAttribute('href',reactelement.props.href)
  // domElement.setAttribut('target',reactelement.props.target)
  // container.appendChild(domElement)
 const domElement=document.createElement(reactelement.type)
 domElement.innerHTML=reactelement.textinside
 for (const prop in reactelement.props) {
  if(prop==='textinside') continue
domElement.setAttribute(prop,reactelement.props[prop])
 }
container.appendChild(domElement)
 }

const reactelement={
  type:'a',
  props:{
    href:"https://google.com",
    target:'_blank'
  },
  textinside:'click me to visit google'
}

const mainContainer =document.getElementById('root')

customRender(reactelement,mainContainer)