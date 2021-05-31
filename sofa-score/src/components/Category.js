import React, { Component } from 'react'
import '../CSS/category.css';



class Category extends Component {
    
    constructor(props){
        super();

        this.state = {
            category : props.category,
            imgUrl : "https://www.sofascore.com/static/images/flags/"+(props.category.alpha2 || '').toString().toLowerCase() +".png"
        }
    }

    //https://www.sofascore.com/static/images/flags/en.png

    render() {
        return (
        <div className="category-card">
            <div className="category-logo"> 
                <img src={this.state.imgUrl} alt=""/>
            </div>
            <div className="category-data">
                <h2></h2>
            </div>
        </div>
        )
    }
}

export default Category;