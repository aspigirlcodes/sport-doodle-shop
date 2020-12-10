import React from "react"
import {colors, designs, items} from "./helpers"
import Canvas from "./Canvas"
import Title from "./Title"
import ProductConfig from "./ProductConfig"
import MenuBar from "./MenuBar"
import ColorSelector from "./ColorSelector"
import ProductSelector from "./ProductSelector"
import DesignSelector from "./DesignSelector"
import { BuyButton, Price } from "./Price"

function ProductConfigurator(props){
    let configurator = {}
    if (props["*"]){
      const [item, design, color] = props["*"].split("/")
      configurator = {item, design,color}
    }else {
      configurator = {
        item: Object.keys(items)[0],
        color: Object.keys(colors)[0],
        design: Object.keys(designs)[0],
      }
    }
    
    
    return (
        <div className="designs">
          <MenuBar/>
          <h1>ProductConfigurator</h1>
            <ProductConfig {...configurator} size={300}>
            {function (props){
              return (
                <div className="productConfigurator">
                  <Title {...props}/>
                  <div class="row">
                    
                    <div>
                      <h3>Select a product</h3>
                      <ProductSelector {...props}/>
                      <h3>Select a color</h3>
                      <ColorSelector {...props}/>
                    </div>
                    <div>
                      <h3>Product Preview:</h3>
                      <Canvas {...props}/>
                    </div>
                    
                    <div>
                      <h3>Select a design</h3>
                      <DesignSelector {...props}/>
                      <div className="row centered margin-top">
                        <Price {...props}/>
                        <BuyButton {...props}/>
                      </div>
                    </div>
                  </div>
                  
                </div>
              )
            }
            }
          </ProductConfig>
          
        </div>
    );
    
}

export default ProductConfigurator
