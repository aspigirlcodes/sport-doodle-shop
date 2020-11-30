import React from "react"
import Canvas from "./Canvas"
import { designs } from "./helpers"


function DesignSelector({design, onDesignChange}){

    
    return(
        <fieldset className="designs-container">
            { Object.keys(designs).map(designKey => (
                <label key={designKey} className={`designOption ${design===designKey ? "selected" : ""}`}>
                    <input type="radio" value={designKey}
                    checked={
                        design === designKey
                          ? "checked"
                          : ""
                      }
                    onChange={() => onDesignChange(designKey)}/>
                    <div className="designSelectPreview">
                        <Canvas design={designKey} size={100} />
                    </div>
                    {designKey}
                </label>
            ))
            }
        </fieldset>
    )
}

export default DesignSelector
