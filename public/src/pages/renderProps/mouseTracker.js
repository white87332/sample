import React from 'react';
import Mouse from './mouse';
import Cat from './cat';

function MouseTracker()
{
    return (
        <div>
            <h1>Move the mouse around!</h1>
            <Mouse
                renderProps={(mouse) => {
                    return <Cat mouse={mouse} />
                }}
            />
        </div>
    );
}

export default MouseTracker;
