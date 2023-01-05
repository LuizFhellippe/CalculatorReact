import '../Bootstrap.css'
import React from 'react'

export default function Display(props){
    return (
        <input type="number" readOnly className={`form-control mt-1`} value={props.value} />
    )
}