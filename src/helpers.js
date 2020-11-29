const margin = 20
const items = {
    tshirt: drawTshirt,
    mug: drawMug,
    bag: drawBag,
    coaster: drawCoaster,
}

const colors = {
    blue: ['cadetblue', 'aliceblue'],
    coral: ['coral', 'cornsilk'],
    orchid: ['darkslateblue', 'darkorchid'],
    sea: ['darkslategrey', 'darkseagreen'],
    fire: ['maroon', 'orange']
}

const designs = require("./designs.json");

function drawTshirt(ctx, size, colorName, designName){
    
    const drwSize = size - 2 * margin
    const design = {centerX: margin + drwSize/2, centerY:margin + drwSize*6/10, maxWidth: drwSize/2, maxHeight: drwSize/1.5}
    ctx.beginPath()
    ctx.moveTo(margin,margin)
    ctx.lineTo(margin + drwSize / 3, margin)
    ctx.arc(margin + drwSize / 2, margin, drwSize/6, Math.PI, 0, true)
    ctx.lineTo(margin+drwSize, margin)
    ctx.lineTo(margin + drwSize, margin + drwSize / 4)
    ctx.lineTo(margin + 5/6*drwSize, margin + drwSize / 4)
    ctx.lineTo(margin + 5/6*drwSize, margin + drwSize)
    ctx.lineTo(margin + 1/6*drwSize, margin + drwSize)
    ctx.lineTo(margin+ 1/6*drwSize, margin+drwSize/4)
    ctx.lineTo(margin, margin + drwSize / 4)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle = colors[colorName][0]
    ctx.fill()
    ctx.fillStyle = colors[colorName][1]
    drawDesign(ctx, designName, design)
}

function drawMug(ctx, size, colorName, designName){
    const drwSize = size - 2 * margin
    const design = {centerX: margin + drwSize*2/3, centerY:margin + drwSize/2, maxWidth: drwSize/2, maxHeight: drwSize/1.5}
    ctx.fillStyle = colors[colorName][0]
    ctx.fillRect(margin + 1/3 * drwSize, margin, 2/3 * drwSize, drwSize)
    ctx.strokeRect(margin + 1/3 * drwSize, margin, 2/3 * drwSize, drwSize)
    ctx.beginPath()
    ctx.moveTo(margin + 1/3 * drwSize, margin + 3/4 * drwSize)
    ctx.arc(margin + 1/3* drwSize, margin + drwSize/2, drwSize/4, Math.PI/2, 3/2*Math.PI)
    ctx.arc(margin + 1/3* drwSize, margin + drwSize/2, drwSize/6, Math.PI*3/2, 1/2*Math.PI, true)
    ctx.stroke()
    ctx.fill()

    ctx.fillStyle = colors[colorName][1]
    drawDesign(ctx, designName, design)

}

function drawBag(ctx, size, colorName, designName){
    const drwSize = size - 2 * margin
    const delta = drwSize / 80
    const alpha = 0.1
    const design = {centerX: margin + drwSize/2, centerY:margin + drwSize/2, maxWidth: drwSize/4, maxHeight: drwSize/3}
    ctx.fillStyle = colors[colorName][0]
    ctx.fillRect(margin + 1/3 *drwSize, margin + 1/4* drwSize, 1/3 * drwSize, 1/2 * drwSize)
    ctx.strokeRect(margin + 1/3 *drwSize, margin + 1/4* drwSize, 1/3 * drwSize, 1/2 * drwSize)
    ctx.beginPath()
    ctx.moveTo(margin + 1/3*drwSize, margin + 1/4 *drwSize + delta)
    ctx.arc(margin + 1/3 * drwSize, margin + drwSize / 2, drwSize/4 - delta, 3/2* Math.PI, Math.PI /2 - alpha, true)
    ctx.moveTo(margin + 2/3*drwSize, margin + 1/4 *drwSize + delta)
    ctx.arc(margin + 2/3 * drwSize, margin + drwSize / 2, drwSize/4 - delta, 3/2* Math.PI, Math.PI /2 + alpha)
    ctx.moveTo(margin + 1/3 * drwSize, margin + 1/4 * drwSize + 2* delta)
    ctx.lineTo(margin + 2/3 * drwSize, margin + 1/4* drwSize + 2* delta)
    ctx.moveTo(margin + 1/3 * drwSize, margin + 3/4 * drwSize - 2*delta)
    ctx.arc(margin + 1/3 * drwSize, margin + 3/4 * drwSize, 2*delta, 3/2*Math.PI, 0)
    ctx.moveTo(margin + 2/3 * drwSize, margin + 3/4 * drwSize - 2*delta)
    ctx.arc(margin + 2/3 * drwSize, margin + 3/4 * drwSize, 2*delta, 3/2*Math.PI, Math.PI, true)
    ctx.stroke()

    ctx.fillStyle = colors[colorName][1]
    drawDesign(ctx,designName, design)
}

function drawCoaster(ctx, size, colorName, designName){
    const drwSize = size - 2 * margin
    const design = {centerX: margin + drwSize/2, centerY:margin + drwSize/2, maxWidth: drwSize*4/5, maxHeight: drwSize*4/5}
    ctx.beginPath()
    ctx.moveTo(margin, margin + 1/10 * drwSize)
    ctx.arc(margin + 1/10 * drwSize, margin + 1/10 * drwSize, drwSize/10, Math.PI, 3/2 *Math.PI)
    ctx.lineTo(margin + 9/10 * drwSize, margin)
    ctx.arc(margin + 9/10 * drwSize, margin + 1/10 * drwSize, drwSize/10, 3/2*Math.PI, 0)
    ctx.lineTo(margin + drwSize, margin + 9/10 * drwSize)
    ctx.arc(margin + 9/10 * drwSize, margin + 9/10 * drwSize, drwSize/10, 0, 1/2*Math.PI)
    ctx.lineTo(margin + 1/10*drwSize, margin + drwSize)
    ctx.arc(margin + 1/10 * drwSize, margin + 9/10 * drwSize, drwSize/10, 1/2*Math.PI, Math.PI)
    ctx.closePath()
    ctx.stroke()
    ctx.fillStyle = colors[colorName][0]
    ctx.fill()
    ctx.fillStyle = colors[colorName][1]
    drawDesign(ctx, designName, design)
    
}

function drawDesign(ctx, designName, designParams){
    const widthfactor = designParams.maxWidth / designs[designName].width
    const heightfactor = designParams.maxHeight / designs[designName].height
    const scalefactor = Math.min(widthfactor,heightfactor)
    const transX = designParams.centerX - (designs[designName].width *scalefactor/2 ) 
    const transY = designParams.centerY - (designs[designName].height *scalefactor/2 )
    ctx.save()
    ctx.translate(transX , transY ) 
    ctx.scale(scalefactor,scalefactor)
    const path = new Path2D(designs[designName].path);
    ctx.fill(path);
    ctx.restore()
}

function drawItem(ctx, itemName, size, colorName, designName){
    items[itemName](ctx, size, colorName, designName)
    
}

export {drawItem, colors, items, designs}
