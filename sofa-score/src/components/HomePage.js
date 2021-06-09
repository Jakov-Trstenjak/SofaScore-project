import React, { Component } from 'react'
import CategoryListPage from './CategoryListPage'

export default class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sport : 'football'
        };
    }


    render() {
        //sport should be cointained in this.props.match.sport
        return (
            <div>   
                <div className="body">
                    <CategoryListPage sport={this.props.match.params.sport ? this.props.match.params.sport : 'football'}></CategoryListPage>
                </div>
            </div>

        )
    }
}
