import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Mouse(props)
{
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPos({
            x: e.clientX,
            y: e.clientY
        });
    };

    return (
        <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
            {/* 用 `render` prop 去動態決定該 render 什麼，而不是將 <Mouse> render 的東西靜態表示出來。 */}
            {props.renderProps(pos)}
        </div>
    );
}

Mouse.propTypes = {
    renderProps: PropTypes.func.isRequired
};

export default Mouse;
