import React, { useState } from "react"

function ProductConfig(props) {
  const [color, setColor] = useState(props.color)
  const [item, setItem] = useState(props.item)
  const [design, setDesign] = useState(props.design)
    
  return (
    <React.Fragment>
      {props.children(
        {
          item, 
          design, 
          size: props.size , 
          color, 
          onColorChange: (value) => setColor(value),
          onItemChange: (value) =>  setItem(value),
          onDesignChange: (value) => setDesign(value)
        } 
      )}
    </React.Fragment>
  );
    
}

export default ProductConfig
