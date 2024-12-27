import React from 'react'

const ResetCounter = (props) => {

  const {setCount} = props

  function reset(){
    setCount(0)
  }

  return (
    <div>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ResetCounter
