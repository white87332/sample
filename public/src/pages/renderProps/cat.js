import React from 'react';

function Cat(props)
{
    const { mouse } = props;
    return (
        <img alt="cat" src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
}

export default Cat;
