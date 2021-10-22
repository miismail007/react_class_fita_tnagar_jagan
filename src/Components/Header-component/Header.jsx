import React from 'react'
// import './Header.css';

const Header = (param) => {
    console.log(param);
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">{param.logo}</a>
            <ul className="navbar-nav">
                {param.menu.map((element)=>(
                    <li className="nav-item">
                        <a className="nav-link" href="#">{element}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Header
