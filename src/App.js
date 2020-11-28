import React, { useEffect, useRef } from "react"
import {drawItem} from "./helpers"

function App() {
  const canvasRef = useRef()
  
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d")
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawItem(ctx, "coaster", 400)
  })

  return (
    <div className="App">
      <canvas width={400} height={400} ref={canvasRef}></canvas>
    </div>
  );
}

export default App;
