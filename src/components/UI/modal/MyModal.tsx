import React from 'react';
import cl from './MyModal.module.css'

interface IModal{
    children?: React.ReactNode
    visible: boolean
    setVisible: Function
}
const MyModal: React.FC<IModal> = ({children, visible, setVisible}) => {

    let rootClasses = [cl.myModal]
    if (visible){
        rootClasses.push(cl.active)
    } else {

    }
    return (
        // Join склеивает по пробелу и возвращает строку
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            {/*stopPropagation - предотвращает всплытие события, чтобы форма не закрывалась при клике на неё*/}
            <div className={cl.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;