import React, { useState } from 'react'
import "./Main.css";

const Main = () => {
    const [count, setCount] = useState(0);
    const countDecrement = () =>{ 
        setCount(count - 1)
    };

    const countIncrement = () => {
        setCount(count + 1)
    };
  return (
    <main>
        <div className='counterDisplay'>
            <p>{count}</p>
        </div>
        <div className='buttons'>
            <button className='button' id='decrementBtn' onClick={countDecrement}>
                - Decrement
            </button>
            <button className='button' id='incrementBtn' onClick={countIncrement}>
                + Increment
            </button>
        </div>
    </main>
  )
}

export default Main