import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../../store/counterReducer';

export default function Counter()
{
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>{count}</div>

            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>

            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>

            <button
                aria-label="Decrement value"
                onClick={() => dispatch(reset())}
            >
                reset
            </button>
        </div>
    );
}
