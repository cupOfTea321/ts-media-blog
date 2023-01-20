import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to={'/'} >Main page</NavLink>
                    <NavLink to={'/todo'} >Todos page</NavLink>
                </nav>
            </header>
            <main className={'container'}>
                <Outlet/>
            </main>
        </>


    );
};

export default Layout;