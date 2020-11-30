import React from "react"
import { colors } from "./helpers"


function ColorSelector({color, onColorChange}){
    return(
        <fieldset className="colors-container">
            { Object.keys(colors).map(colorKey => (
                <label key={colorKey} className={`colorOption ${color===colorKey ? "selected" : ""}`}>
                    <input type="radio" value={colorKey}
                    checked={
                        color === colorKey
                          ? "checked"
                          : ""
                      }
                    onChange={() => onColorChange(colorKey)}/>
                    <div className="colorSelectPreview" style={{backgroundColor: colors[colorKey][0], color: colors[colorKey][1]}}>
                        D
                    </div>
                    {colorKey}
                </label>
            ))
            }
        </fieldset>
    )
}

export default ColorSelector
