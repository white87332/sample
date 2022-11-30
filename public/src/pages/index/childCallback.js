import React, { memo } from 'react';

function ChildCallback({ reset })
{
    console.log('ChildCallback render');
    return (
        <>
            <p>child component which resets count</p>
            <button onClick={reset}>Reset Count</button>
        </>
    );
}

export default memo(ChildCallback);
