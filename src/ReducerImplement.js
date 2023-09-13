import React, {useState} from 'react';

const ReducerImplement = () => {

    const [counter, setCounter] = useState(0);

    return (
        <div>
            <div>Use Reducer functionality</div>
            <p>Counter: {counter} </p>
            <div>
                <button onClick={() => setCounter(counter + 1) } >Increase</button>
                <button onClick={() => setCounter(counter - 1)} >Decrease</button>
            </div>
        </div>
    )
        
    
}

export default ReducerImplement;