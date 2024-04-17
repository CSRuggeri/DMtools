import React from 'react'

export const Ptag:React.FC <{text : string; classname : string }> = ({text, classname}) => {
  
  
    return (
    <p className={classname}>{text}</p>
  )
}
