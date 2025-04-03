import React from 'react'
import ReactDOM from 'react-dom/client'

const ele2 = <h1>laxmiiii wagh  inside</h1>
// console.log(ele2)

const NewComponent = () => (
    <div>
       <h2>I am headinggggg </h2>
       {ele2 }     
    </div>
)
console.log(NewComponent())
console.log(<NewComponent/>)
console.log(<NewComponent></NewComponent>)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<NewComponent></NewComponent>)