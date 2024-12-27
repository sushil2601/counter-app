import React from 'react'

const DecrementCounter = (props) => {

const {count,setCount} = props

  function decrement(){
    setCount(count - 1)
  }

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default DecrementCounter
