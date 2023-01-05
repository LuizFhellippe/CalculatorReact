import './Calculator.css'
import '../Bootstrap.css'
import React, { useState } from 'react'
import Linha from './Linha'
import Display from './Display'

export default function Calculator(){

    const [display, setDisplay] = useState('0')
    const [clear, setClear] = useState(true)
    const [values, setValues] = useState([0, 0])
    const [indice, setIndice] = useState(0)
    const [operacao, setOperacao] = useState(null)

    function ClearMemory(){
        setDisplay('0')
    }
    function SetOperation(operation){
        console.log(operation)
        if(indice === 0){
            setOperacao(operation)
            setIndice(1)
            setClear(true)
        }else{
            const equals = operation === '='
            const currentOperation = operacao

            const valores = [...values]
            try{
                values[0] = eval(`${valores[0]} ${currentOperation} ${values[1]}`)
            }catch(e){
                valores[0] = values[0]
            }
            values[1] = 0
            setDisplay(values[0])
            setOperacao(equals ? null : operation)
            setIndice(equals ? 0 : 1)
            setClear(!equals)
            setValues(valores)
        }
    }
    function AddDigit(value){
        console.log(value)
        if(value === '.' && display.includes('.')){
            return
        }
        const clearDisplay = display === '0' || clear
        const currentValue = clearDisplay ? '' : display
        const displayValue = currentValue + value
        if(value !== '.'){
            const i = indice
            const newValue = parseFloat(displayValue)
            const valores = [...values]
            valores[i] = newValue
            setValues(valores)
            console.log(valores)
        }
        setDisplay(displayValue)
        setClear(false)
    }

    return (
        <div className={`container d-flex justify-content-center`}>
            <div>
                <h1>Calculadora</h1>
                <Display value={display}/>
                <div>
                    <div className={`row`}>
                        <Linha size={`6`} value={`AC`} color={`primary`} click={() => ClearMemory()}/>
                        <Linha size={`3`} value={`%`} color={`primary`} click={SetOperation}/>
                        <Linha size={`3`} value={`/`} color={`primary`} click={SetOperation}/>
                    </div>
                    <div className={`row`}>
                        <Linha size={`3`} value={`7`} color={`warning`} click={AddDigit}/>
                        <Linha size={`3`} value={`8`} color={`warning`} click={AddDigit}/>
                        <Linha size={`3`} value={`9`} color={`warning`} click={AddDigit}/>
                        <Linha size={`3`} value={`*`} color={`primary`} click={SetOperation}/>
                    </div>
                    <div className={`row`}>
                        <Linha size='3' value='4' color={`warning`} click={AddDigit}/>
                        <Linha size='3' value='5' color={`warning`} click={AddDigit}/>
                        <Linha size='3' value='6' color={`warning`} click={AddDigit}/>
                        <Linha size='3' value='-' color={`primary`} click={SetOperation}/>
                    </div>
                    <div className={`row`}>
                        <Linha size={`3`} value={`1`} color={`warning`} click={AddDigit}/>
                        <Linha size={`3`} value={`2`} color={`warning`} click={AddDigit}/>
                        <Linha size={`3`} value={`3`} color={`warning`} click={AddDigit}/>
                        <Linha size={`3`} value={`+`} color={`primary`} click={SetOperation}/>
                    </div>
                    <div className={`row`}>
                        <Linha size={`6`} value={`0`} color={`warning`} click={AddDigit}/>
                        <Linha size={`3`} value={`.`} color={`primary`} click={AddDigit}/>
                        <Linha size={`3`} value={`=`} color={`success`} click={SetOperation}/>
                    </div>
                </div>
            </div>
        </div>
    )
}