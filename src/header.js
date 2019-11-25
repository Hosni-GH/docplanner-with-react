import React, { Component } from 'react';
class Header extends Component {
    render() { 
        return (
            <header>
                <div className="header-container">
                    <div className="logo-container">
                        <a href="#">
                            <img className="logo-docplanner" src="./img/logo-docplanner-group.svg" alt="Docplanner Group"/>
                        </a>
                    </div>
                    <div className="navbar-container">
                        <nav className="main-navbar">
                            <ul className="menu-list-items">
                                <li className="menu-item menu-item1"><a href="#">About us</a></li>
                                <li className="menu-item menu-item2"><a href="#">Career</a></li>
                                <li className="menu-item menu-item3"><a href="#">Departments</a>
                                    <div className="dropdown-content">
                                        <ul>
                                            <li><a href="#">Marketing &amp; PR</a></li>
                                            <li><a href="#">Customer Success &amp; Sales</a></li>
                                            <li><a href="#">IT, Product, Design &amp; UX</a></li>
                                            <li><a href="#">Finance &amp; Administration</a></li>
                                            <li><a href="#">HR &amp; more</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
          );
    }
}
export default Header;