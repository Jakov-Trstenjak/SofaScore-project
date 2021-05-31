import React, { Component } from 'react'
import CategoryListPage from './CategoryListPage'
import Navbar from './Navbar'

export default class HomePage extends Component {
    render() {
        return (
            <div>   
                <Navbar></Navbar>
                <CategoryListPage></CategoryListPage>
            </div>

        )
    }
}
