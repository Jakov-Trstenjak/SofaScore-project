import React, { Component } from 'react'
import '../CSS/category.css';
import Tournament from './Tournament';



class Category extends Component {
    
    constructor(props){
        super();

        this.state = {
            category : props.category,
            imgUrl : "https://www.sofascore.com/static/images/flags/"+(props.category.alpha2 || '').toString().toLowerCase() +".png"
        }
    }


    render() {
        return (
            <div>
                {
                     this.props.uniqueTournamentIds.map( uniqueTournamentId => (
                        <Tournament category={this.state.category} uniqueTournamentId={uniqueTournamentId}/>   
                     )
                    )
                }
               
            </div>
            
        )
    }
}

export default Category;