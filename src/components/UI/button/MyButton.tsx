import React, {ButtonHTMLAttributes, PropsWithChildren} from 'react';
import cl from './MyButton.module.css'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    props?: PropsWithChildren
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    style?: any
}
const MyButton: React.FC<IButton> = ({props, children, onClick, style}) => {
    return (
        <button style={style} onClick={onClick} className={cl.buttonUse} {...props}>
            {children}
        </button>
    );
};

export default MyButton;