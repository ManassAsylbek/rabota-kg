import React, {FC} from 'react';

import "./Modal.scss"

interface ILayout {
    children: React.ReactNode,
}

const Modal: FC<ILayout> = ({children}) => {
    return (
        <div className="modal">
            {children}
        </div>
    );
};

export default Modal;