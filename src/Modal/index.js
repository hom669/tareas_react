import React from 'react';
import PortalReactDOM from 'react-dom'
import './Modal.css';

function Modal({children}){
    return PortalReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById("modal"),
    );
}

export {Modal}