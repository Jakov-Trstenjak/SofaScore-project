import React, { Component } from 'react'
import '../CSS/category.css';
import Tournament from './Tournament';



class Category extends Component {
    
    constructor(props){
        super();

        this.state = {
            category : props.category,
            tournamentIds : props.uniqueTournamentIds,
            imgUrl : "https://www.sofascore.com/static/images/flags/"+(props.category.alpha2 || '').toString().toLowerCase() +".png"
        }
    }

    //https://www.sofascore.com/static/images/flags/en.png

    render() {
        return (
            <div>
                {
                     this.state.tournamentIds.map( id => (

                        <Tournament category={this.state.category} uniqueTournamentId={id}/>   

                     )
                    )
                }
               
            </div>
            
        )
    }
}

export default Category;