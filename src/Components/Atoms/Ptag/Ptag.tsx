import React from 'react'
import style from "./Ptag.module.css"
export const Ptag:React.FC <{text : string; classname : string }> = ({text, classname}) => {
  
  
    return (
    <p className={style[classname]}>{text}</p>
  )
}
