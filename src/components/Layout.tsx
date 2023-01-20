import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import  './Layout.css'
import MyButton from "./UI/button/MyButton";
const Layout = () => {
    return (
        <div className={'mainRoot'}>
            <div className={'appMain'}>
                <header>
                    <h1>FlexMess</h1>
                    <nav className={'nav'}>
                        <NavLink to={'/'} >Main page</NavLink>
                        <NavLink to={'/blog'} >Blog page</NavLink>
                    </nav>
                    <div className={'logIn'}>
                        <a href="#s">log In</a>
                        <MyButton  >Getting Started</MyButton>
                    </div>
                </header>
                <main className={'container'}>
                    <Outlet/>
                </main>
            </div>
        </div>



    );
};

export default Layout;