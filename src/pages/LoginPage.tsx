import React from "react";
import MyButton from "../components/UI/button/MyButton";
import cl from './Login.module.css'

const Login = () => {


    return (
        <div className={cl.container}>
            <h1>Логин</h1>
            <form >
                <input className={'blogInput'} type="text" placeholder={"Введите логин"}/>
                <input className={'blogInput'} type="password" placeholder={"Введите пароль"}/>
                <MyButton style={{width: 100, fontSize: 20}}>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;