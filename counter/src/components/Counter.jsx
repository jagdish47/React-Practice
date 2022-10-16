import React, { useState } from 'react';
import styles from "./Counter.module.css";

const Counter = () => {

    const [counter, setCounter] = useState(0);

    // function handleCounter(val){
    //     setCounter(counter + val);
    // }

    // function doubleValue(){
    //     setCounter(counter * 2);
    // }

    return(
        <div>
            <h1>Counter App</h1>
            <h1 className={counter % 2 == 0 ? styles.green : styles.red}>{counter}</h1>

            <button onClick={ () => setCounter(counter + 1)}>Increment</button>
            <button onClick={ () => setCounter(counter - 1)}>Decrement</button>

            <button onClick={ () => setCounter( counter * 2)}>Double</button>
        </div>
    );
};



export default Counter;