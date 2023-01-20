import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import  './Layout.css'
const Layout = () => {
    return (
        <div className={'mainRoot'}>
            <div className={'appMain'}>
                <header>
                    <h1>FlexMess</h1>
                    <nav className={'nav'}>
                        <NavLink to={'/'} >Main page</NavLink>
                        <NavLink to={'/todo'} >Todos page</NavLink>
                    </nav>
                    <div className={'logIn'}>
                        <a href="#s">log In</a>
                        <button value="log In" className="buttonUse">Getting Started</button>
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