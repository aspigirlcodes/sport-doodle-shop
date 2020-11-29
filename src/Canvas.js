import React, { useContext, useEffect, useRef } from "react"
import {drawItem} from "./helpers"

function Canvas({item, size, color, design}) {
  console.log(item, size, color, design)  
  const canvasRef = useRef()
  
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d")
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawItem(ctx, item, size, color, design)
  })

  return (
    
    <canvas width={size} height={size} ref={canvasRef}></canvas>
    
  );
}

export default Canvas;
