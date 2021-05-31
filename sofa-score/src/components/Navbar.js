import React, { Component } from 'react';
import '../CSS/navbar.css';


export default class Navbar extends Component {
    render() {
        return (
            <header>
                <div className="navbar">
                    <a href="">Football</a>
                    <a href="">Basketball</a>
                    <a href="">Tennis</a>
                </div>
            </header>
        )
    }
}
