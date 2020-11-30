import React from "react"
import Canvas from "./Canvas"
import { items } from "./helpers"


function ProductSelector({item, onItemChange}){

    
    return(
        <fieldset className="items-container">
            { Object.keys(items).map(itemKey => (
                <label key={itemKey} className={`itemOption ${item===itemKey ? "selected" : ""}`}>
                    <input type="radio" value={itemKey}
                    checked={
                        item === itemKey
                          ? "checked"
                          : ""
                      }
                    onChange={() => onItemChange(itemKey)}/>
                    <div className="itemSelectPreview">
                        <Canvas item={itemKey} size={100} />
                    </div>
                    {itemKey}
                </label>
            ))
            }
        </fieldset>
    )
}

export default ProductSelector
