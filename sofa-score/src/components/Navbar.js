import React, { Component } from 'react';
import '../CSS/navbar.css';
import {Route, Link} from "react-router-dom";



export default class Navbar extends Component {
    render() {
        return (
            <header>
                <div className="navbar">
                    <Link to={{
                        pathname: '/football',
                        state: { event: this.props.event }
                    }}>
                            <p>Football</p>
                    </Link>
                    <Link to={{
                        pathname: '/basketball',
                        state: { event: this.props.event }
                    }}>
                            <p>Basketball</p>
                    </Link>
                    <Link to={{
                        pathname:'/volleyball',
                        state: { event: this.props.event }
                    }}>
                            <p>Volleyball</p>
                    </Link>
                    <Link to={{
                        pathname: '/rugby',
                        state: { event: this.props.event }
                    }}>
                            <p>Rugby</p>
                    </Link>
                    <Link to={{
                        pathname: '/handball',
                        state: { event: this.props.event }
                    }}>
                            <p>Handball</p>
                    </Link>
                </div>
            </header>
        )
    }
}
