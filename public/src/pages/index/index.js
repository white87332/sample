import React, { useState, useMemo } from 'react';
import Child from './child';
import ChildMemo from './childMemo';
import styles from './index.module.css';

export default function Index(props)
{
    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const memoizedValue = useMemo(() => {
        return Math.random();
    }, []);

    console.log('memoizedValue', memoizedValue);

    return (
        <div className={styles.index}>
            <button type="button" onClick={() => setStep(step + 1)}>
                step is :
                {step}
            </button>

            <button type="button" onClick={() => setCount(count + 1)}>
                count is :
                {count}
            </button>

            <button type="button" onClick={() => setNumber(count + step)}>
                number is :
                {number}
            </button>

            <hr />

            <Child step={step} count={count} number={number} />
            <hr />

            <ChildMemo step={step} count={count} number={number} />
        </div>
    );
}
