import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './Store';

const Counter = () => {
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Aplikasi Counter</h1>
            <p>Counter: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;
