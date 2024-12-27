import React from 'react'

const IncrementCounter = (props) => {

    const {count,setCount} = props;


  function increment(){
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default IncrementCounter
