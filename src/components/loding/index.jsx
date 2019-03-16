import React, { Component } from 'react'
import Mask from '../mask';
import './index.css';

function LoadingMask() {
    return (
        <Mask>
            <div className="loading">
              loading
            </div>                
        </Mask>
    );
}

export default LoadingMask;
