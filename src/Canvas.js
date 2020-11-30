import React, { useContext, useEffect, useRef } from "react"
import {drawItem, drawDesign} from "./helpers"

function Canvas({item, size, color, design}) {
  //console.log(item, size, color, design)  
  const canvasRef = useRef()
  
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d")
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    item ? 
    drawItem(ctx, item, size, color, design) : 
    drawDesign(
      ctx, 
      design, 
      {centerX: size/2, centerY:size/2, maxWidth: size, maxHeight:size}
    )
  })

  return (
    
    <canvas width={size} height={size} ref={canvasRef}></canvas>
    
  );
}

export default Canvas;
