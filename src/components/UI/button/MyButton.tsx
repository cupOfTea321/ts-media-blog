import React, {PropsWithChildren} from 'react';
import cl from './MyButton.module.css'

interface IButton {
    props?: PropsWithChildren
    children?: React.ReactNode
}
const MyButton: React.FC<IButton> = ({props, children}) => {
    return (
        <button className={cl.buttonUse} {...props}>
            {children}
        </button>
    );
};

export default MyButton;