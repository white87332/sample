import React from 'react';

function Child({ number })
{
    console.log('Child re-render');
    return (
        <p>
            number is :
            {number}
        </p>
    );
}

export default Child;
