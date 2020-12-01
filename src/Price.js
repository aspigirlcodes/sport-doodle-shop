import React, { useContext } from "react"
import { BasketContext } from "./BasketContext"

const prices = {
    tshirt: 20,
    bag: 15,
    mug: 10,
    coaster: 15,
}


function Price({item}){
    return(
        <div className="priceDisplay">
            Chf {prices[item]}
        </div>
    )
}

function BuyButton({item, color, design}){
    const {addItem} = useContext(BasketContext)
    return(
        <button className="buyButton" onClick={() => addItem({item, color, design, price: prices[item]})}>Buy</button>
    )
}

export {Price, BuyButton}
