import React from "react"
import {colors, designTitles, items} from "./helpers"
import Canvas from "./Canvas"
import Title from "./Title"
import ProductConfig from "./ProductConfig"
import MenuBar from "./MenuBar"

function ByDesign({designKey}){
    const featuredItems = Object.keys(items).map(item => {return{
        item: item,
        color: Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)],
        design: designKey,
      }})
    
    return (
        <div className="designs">
          <MenuBar/>
          <h1>{designTitles[designKey]} Products</h1>
          <div className="featuredItems">
          {featuredItems.map((item, i) => 
          <ProductConfig key={i} {...item} size={250}>
            {function (props){
              return (
                <div className="featuredProduct" style={{width:props.size}}>
                  <Canvas {...props}/>
                  <Title {...props}/>
                </div>
              )
            }
            }
          </ProductConfig>)}
            
          </div>
          
        </div>
    );
    
}

export default ByDesign
