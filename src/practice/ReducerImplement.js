import React from 'react';
// import {useState} from 'react';
import {useReducer} from 'react';

const initialState = 0;

const ReducerImplement = () => {
    const reducer = (state, action) => {
        if(action.type === 'INCREMENT'){
            // console.log(state, action)
            return state + 1;
            
        }
        if(action.type ==='DECREMENT'){
            return state - 1;
        }

    }

    // const [state, setState] = useState(initialState);
    const [state, dispatch] = useReducer(reducer, initialState);



    return (
        <div>
            <div>Use Reducer functionality</div>
            <p>Counter: {state} </p>
            <div>
                {/* <button onClick={() => setState(state + 1) } >Increase</button> */}
                <button onClick={() => dispatch({type: 'INCREMENT'}) } >Increase</button>

                {/* <button onClick={() => setState(state - 1)} >Decrease</button> */}
                <button onClick={() => dispatch({type: 'DECREMENT'})} >Decrease</button>
            </div>
        </div>
    )
        
    
}

export default ReducerImplement;