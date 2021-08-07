import React from 'react'
import { menuData } from "../store/db"

function Header() {

    const MenuList = () => {
        return (
            <>
            {menuData[0].menu.map((data, key) => {
                return (
                    <li key={key}><a href="">{ data }</a></li>
                );
            })}
            </>
        )
    }

    return (
        <>
        <header id="header">
            <div className="container">
                <div id="logo" className="pull-left">
                    <h1><a href="#" className="scrollto">React Web</a></h1>
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <MenuList />
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Header
