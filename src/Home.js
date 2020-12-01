import React from "react"
import {colors, items, designs, designTitles} from "./helpers"
import Canvas from "./Canvas"
import Title from "./Title"
import ProductConfig from "./ProductConfig"
import MenuBar from "./MenuBar"
import {Price, BuyButton} from "./Price"

function Home() {
  const featuredItems = Array.from(new Array(5), a => {return{
    item: Object.keys(items)[Math.floor(Math.random() * Object.keys(items).length)],
    color: Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)],
    design: Object.keys(designs)[Math.floor(Math.random() * Object.keys(designs).length)],
  }})

  return (
    <div className="home">
      <MenuBar/>
      <h1>Featured Items</h1>
      <div className="featuredItems">
      {featuredItems.map((item, i) => 
      <ProductConfig key={i} {...item} size={250}>
        {function (props){
          return (
            <div className="featuredProduct" style={{width:props.size}}>
              <Canvas {...props}/>
              <Title {...props}/>
              <div className="row centered">
                <Price {...props}/>
                <BuyButton {...props}/>
              </div>
              
            </div>
          )
        }
        }
      </ProductConfig>)}
        
      </div>
      
    </div>
  );
}

export default Home;
