import React, { Component } from 'react'
import CategoryListPage from './CategoryListPage'
import Navbar from './Navbar'

export default class HomePage extends Component {
    render() {
        return (
            <div>   
                <div className="homepage-header">
                    <Navbar></Navbar>
                </div>
                <div className="homepage-body">
                    <CategoryListPage></CategoryListPage>
                </div>
            </div>

        )
    }
}
