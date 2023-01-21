import React from 'react';
import cl from './MySelect.module.css'

interface ISelect{
    options: Array<any>
    defaultValue: string
    value: string
    onChange: Function

}
const MySelect: React.FC<ISelect> = ({options, defaultValue, value, onChange}) => {
    return (


        <select className={cl.buttonUse} value={value} onChange={event => onChange(event.target.value)}>
            {/*<option  disabled value="defaultValue">{defaultValue}</option>*/}
            {options.map(option =>(
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}
        </select>

    );
};

export default MySelect;