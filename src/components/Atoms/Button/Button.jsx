
import { useState } from 'react'
import { Button as AntButton } from 'antd'
import classes from './Button.module.css'




export default function Button({ type  ='primary',title,onClick }){
   
    

    return(
    <AntButton  type={type}
    onClick={onClick}>
  
   {title}
   
    </AntButton>


    )
}