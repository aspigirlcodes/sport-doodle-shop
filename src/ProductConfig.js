import React, { useState } from "react"

function ProductConfig(props) {
  const productProps = useProductprops(props.color, props.item,props.design)
    
  return (
    <React.Fragment>
      {props.children(
        {
          ...productProps,
          size: props.size 
        } 
      )}
    </React.Fragment>
  );
    
}


function useProductprops(initialColor, initialItem, initialDesign){
  const [color, setColor] = useState(initialColor)
  const [item, setItem] = useState(initialItem)
  const [design, setDesign] = useState(initialDesign)
  return {color, item, design, 
    oncolorChange: setColor, 
    onItemChange: setItem, 
    onDesignChange: setDesign}
}

export default ProductConfig
