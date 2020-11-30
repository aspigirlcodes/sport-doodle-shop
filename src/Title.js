import React from "react"
import {itemTitles, designTitles} from "./helpers"


function Title({item, color, design}){
    return (
    <h2 className="productTitle">{designTitles[design]} {itemTitles[item][0]}({color})</h2>
    )

}

export default Title
