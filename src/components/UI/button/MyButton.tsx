import React, {ButtonHTMLAttributes, PropsWithChildren} from 'react';
import cl from './MyButton.module.css'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    props?: PropsWithChildren
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const MyButton: React.FC<IButton> = ({props, children, onClick}) => {
    return (
        <button onClick={onClick} className={cl.buttonUse} {...props}>
            {children}
        </button>
    );
};

export default MyButton;