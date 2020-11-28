const margin = 20
const items = {
    tshirt: drawTshirt,
    mug: drawMug,
    bag: drawBag,
    coaster: drawCoaster,
}

function drawTshirt(ctx, size){
    const drwSize = size - 2 * margin

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
}

function drawMug(ctx, size){
    const drwSize = size - 2 * margin
    ctx.strokeRect(margin + 1/3 * drwSize, margin, 2/3 * drwSize, drwSize)
    ctx.beginPath()
    ctx.moveTo(margin + 1/3 * drwSize, margin + 3/4 * drwSize)
    ctx.arc(margin + 1/3* drwSize, margin + drwSize/2, drwSize/4, Math.PI/2, 3/2*Math.PI)
    ctx.moveTo(margin + 1/3 * drwSize, margin + 4/6 * drwSize)
    ctx.arc(margin + 1/3* drwSize, margin + drwSize/2, drwSize/6, Math.PI/2, 3/2*Math.PI)
    ctx.stroke()
}

function drawBag(ctx, size){
    const drwSize = size - 2 * margin
    ctx.strokeRect(margin + 1/3 *drwSize, margin + 1/4* drwSize, 1/3 * drwSize, 1/2 * drwSize)
    ctx.beginPath()
    ctx.moveTo(margin + 1/3*drwSize, margin + 1/4 *drwSize + 5)
    ctx.arc(margin + 1/3 * drwSize, margin + drwSize / 2, drwSize/4 - 5, 3/2* Math.PI, Math.PI /2 - 0.1, true)
    ctx.moveTo(margin + 2/3*drwSize, margin + 1/4 *drwSize + 5)
    ctx.arc(margin + 2/3 * drwSize, margin + drwSize / 2, drwSize/4 - 5, 3/2* Math.PI, Math.PI /2 + 0.1)
    ctx.moveTo(margin + 1/3 * drwSize, margin + 1/4 * drwSize + 10)
    ctx.lineTo(margin + 2/3 * drwSize, margin + 1/4* drwSize + 10)
    ctx.moveTo(margin + 1/3 * drwSize, margin + 3/4 * drwSize - 10)
    ctx.arc(margin + 1/3 * drwSize, margin + 3/4 * drwSize, 10, 3/2*Math.PI, 0)
    ctx.moveTo(margin + 2/3 * drwSize, margin + 3/4 * drwSize - 10)
    ctx.arc(margin + 2/3 * drwSize, margin + 3/4 * drwSize, 10, 3/2*Math.PI, Math.PI, true)
    ctx.stroke()
}

function drawCoaster(ctx, size){
    const drwSize = size - 2 * margin
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
}

function drawItem(ctx, itemName, size){
    items[itemName](ctx, size)
    
}

export {drawItem}
