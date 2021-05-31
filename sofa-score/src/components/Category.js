import React from 'react'
import '../CSS/category.css';



const Category = props => {
    return (
        // display-flex... jc-between
        <div className="category-card">
            <div className="category-logo"> 
                 <p>Here will be the image</p>
            </div>
            <div className="category-data">
                <h2>Lorem ipsum</h2>
            </div>
        </div>
    )
}

export default Category
