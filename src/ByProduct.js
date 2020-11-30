import React from "react"
import {colors, designs, itemTitles} from "./helpers"
import Canvas from "./Canvas"
import Title from "./Title"
import ProductConfig from "./ProductConfig"
import MenuBar from "./MenuBar"
import ColorSelector from "./ColorSelector"


function ByProduct({itemKey}){
    const featuredItems = Object.keys(designs).map(design => {return{
        item: itemKey,
        color: Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)],
        design: design,
      }})
    
    return (
        <div className="products">
          <MenuBar/>
          <h1>{itemTitles[itemKey][1]}</h1>
          <div className="featuredItems">
          {featuredItems.map((item, i) => 
          <ProductConfig key={i} {...item} size={250}>
            {function (props){
              return (
                <div className="featuredProduct" style={{width:props.size}}>
                  <Title {...props}/>
                  <Canvas {...props}/>
                  <ColorSelector {...props}/>
                </div>
              )
            }
            }
          </ProductConfig>)}
            
          </div>
          
        </div>
    );
    
}

export default ByProduct
