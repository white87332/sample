import React, { memo } from 'react';

function ChildMemo({ number })
{
    console.log('ChildMemo re-render');
    return (
        <p>
            number is :
            {number}
        </p>
    );
}

export default memo(ChildMemo, (prevProps, nextProps) => {
    if (prevProps.number !== nextProps.number)
    {
        return false;
    }
    return true;
});
