import { Link } from "@reach/router"
import React, { useState } from "react"
import {designs, items, designTitles, itemTitles} from "./helpers"
import "./MenuBar.css"

function MenuBar(){
    const [designColapse, setDesignColapse] = useState(true)
    const [productColapse, setProductColapse] = useState(true)
    return(
        <div className="menubar">
            <div className="menuItem">
                <Link to="/">Sport Doodle Shop </Link>
            </div>
            
            <div className="dropdown">
                <button className="dropdownTitle" onClick={()=>setProductColapse(productColapse => !productColapse)}> 
                    By Product
                </button>
                {!productColapse &&
                <div className="dropdownContent">
                    {Object.keys(items).map(itemKey => (
                        <Link key={itemKey} to={`/product/${itemKey}`}>{itemTitles[itemKey][1]}</Link>
                    ))}
                </div>}
            </div>
            <div className="dropdown">
                <button className="dropdownTitle" onClick={()=>setDesignColapse(designColapse => !designColapse)} > 
                    By Design
                </button>
                {!designColapse &&
                <div className="dropdownContent">
                    {Object.keys(designs).map(designKey => (
                        <Link key={designKey} to={`/design/${designKey}`}>{designTitles[designKey]}</Link>
                    ))}
                </div>
                }
            </div>
        </div>
    )
}


export default MenuBar
