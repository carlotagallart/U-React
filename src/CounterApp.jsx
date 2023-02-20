import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {
    const [ counter, setCounter ] = useState( value )
    function handleAdd() { 
        // setCounter(counter +1)
        // console.log('+1') 
        setCounter((c)=> c+1)
}
  
    function handleLess(){
        setCounter((c)=> c-1)
    }
    function handleReset(){
        setCounter(value)
    }
    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleLess }>-1</button>
        <button onClick={ handleReset }>Reset</button>
        </>
    )
}

CounterApp.propTypes ={
    value: PropTypes.number
}
