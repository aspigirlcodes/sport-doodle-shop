import React, { useContext } from "react"
import { BasketContext } from "./BasketContext"
import Canvas from "./Canvas"
import MenuBar from "./MenuBar"
import Title from "./Title"


function Basket(){
    const {basket, removeItem, clear} = useContext(BasketContext)

    return(
        <div>
            <MenuBar/>
            <h1>Basket</h1>
            <div className="basketContainer">
                <table>
                    {basket.map(basketItem =>(
                        <tr key={basketItem.id} className="basketLi">
                            <td><Canvas {...basketItem} size={100}/></td>
                            <td><Title {...basketItem}/></td>
                            <td>Chf {basketItem.price}</td>
                            <td><button className="deleteButton" onClick={()=>removeItem(basketItem.id)}>Remove</button></td>
                        </tr>
                    ))}
                    <tr key="total"><td></td><td></td><td className="total">Chf {basket.reduce((acc, basketItem) => acc + basketItem.price, 0)}</td></tr>
                </table>
                <p>Glad You like my products, however, this is just a React exercise that got out of hand a bit.</p>
                <p> 
                    I do sell those designs <a href="https://www.spreadshirt.ch/shop/user/sarascribbles/">over at Spreadshirt</a> if you like them! 
                </p>
            </div>
        </div>
    )

}

export default Basket
