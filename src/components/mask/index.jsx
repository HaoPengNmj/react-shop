import React from 'react'
import './index.css';

function Mask(props) {
    //console.log(props);            
    return (
            <div className="mask">
               {props.children}
            </div>
        );
}

export default Mask;
