import './Button.css'
import '../Bootstrap.css'
import React from 'react'

export default function Button(props){
    return (
        <button className={`btn btn-${props.color} mt-1 w-100`} onClick={e => props.click && props.click(props.label)}>{props.label}</button>
    )
}