import React, { useState } from "react"

function ProductConfig(props) {
  const [color, setColor] = useState(props.color)
  
    
  return (
    <React.Fragment>
      {props.children(
        {item: props.item, design: props.design, size: props.size , color, onColorChange: (value) => setColor(value)} 
      )}
    </React.Fragment>
  );
    
}

export default ProductConfig
