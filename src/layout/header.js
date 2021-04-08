import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from 'pages/index';
class Header extends Component
{
    render(){
        return(
            <header className="header">
                <div className="container">
                    <div className="header__box">
                        <div className="header__box-logo">
                            LOGO
                        </div>
                        <ul>
                            <li>
                                <Link to={'/'}>다른 뷰</Link>
                            </li>
                            <li>
                                <Link to={'/'}>다른 뷰</Link>
                            </li>
                            <li>
                                <Link to={'/'}>다른 뷰</Link>
                            </li>
                        </ul>
                    </div>
                </div>               
            </header>
        )
    }
}

export default Header;