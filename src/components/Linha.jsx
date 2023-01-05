import React from "react";
import '../Bootstrap.css'
import Button from "./Button";

export default function Linha(props){
    return (
        <div className={`col-${props.size}`}>
            <Button label={props.value} color={props.color} click={props.click}/>
        </div>
    )
}