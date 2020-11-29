import React from "react"

const itemTitles = {
    tshirt: "T-shirt",
    bag: "sports bag",
    mug: "mug",
    coaster: "coaster (set of 6)"
}

const designTitles = {
    ski: "Skiing",
    bike: "Bicycle", 
    horse: "Horsejumping",
    row: "Rowing",
    gym: "Gymnastics",
    basket: "Basketball",
    foot: "Football", 
    rope: "Rope skipping"
}

function Title({item, color, design}){
    return (
    <h2 className="productTitle">{designTitles[design]} {itemTitles[item]}({color})</h2>
    )

}

export default Title
