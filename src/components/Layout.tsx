import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import  './Layout.css'
import MyButton from "./UI/button/MyButton";
import {FaTelegramPlane, FaTwitter, FaVk} from "react-icons/fa";
const Layout = () => {
    return (
        <div className={'mainRoot'}>
            <div className={'appMain'}>
                <header>
                    <h1>BlogIn</h1>
                    <nav className={'nav'}>
                        <NavLink to={'/'} >Main page</NavLink>
                        <NavLink to={'/blog'} >Blog page</NavLink>
                    </nav>
                    <div className={'logIn'}>
                        <NavLink to="login">log In</NavLink>
                        <MyButton  >Getting Started</MyButton>
                    </div>
                </header>
                <main className={'container'}>
                    <Outlet/>
                </main>
                <footer>
                    <FaVk className={'icon'}/>
                    <FaTwitter className={'icon'}/>
                    <FaTelegramPlane className={'icon'}/>
                </footer>
            </div>
        </div>



    );
};

export default Layout;