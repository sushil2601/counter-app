import React, { useState } from 'react'
import IncrementCounter from './counter/IncrementCounter';
import DecrementCounter from './counter/DecrementCounter';
import ResetCounter from './counter/ResetCounter';

const Counter = () => {

  const [count,setCount] = useState(0);

  return (
    <div>
      <h1>Count - {count}</h1>
      <IncrementCounter count = {count} setCount = {setCount}/>
      <DecrementCounter count = {count} setCount = {setCount}/>
      <ResetCounter count = {count} setCount = {setCount}/>
    </div>
  )
}

export default Counter
