import React, { Component } from 'react'
import '../CSS/category.css';
import globeIcon from'../files/globe-icon.png';

export default class Tournament extends Component {
    constructor(props){
        super();

        this.state = {
            category : props.category,
            tournamentId : props.uniqueTournamentId,
            imgUrl : "https://www.sofascore.com/static/images/flags/"+(props.category.alpha2 || '').toString().toLowerCase() +".png",
            tournaments: [],
        }
    }

    // https://master.dev.sofascore.com/api/v1/category/1/scheduled-events/2021-05-07
    
    async GetTournament() {

        const response = await fetch('https://master.dev.sofascore.com/api/v1/category/'+this.state.category.id+'/scheduled-events/2021-05-07');

        // fetch all categories
        const data = await response.json();

        this.setState({ tournaments:  data.events });
    }

    componentDidMount() {
      this.GetTournament();
    }

    render() {
        return (
            <div className="category-container"> 
                <div className="category-card-header">
                    <div className="left-wrapper">
                        <div className="category-logo"> 
                            <img src={this.state.imgUrl} alt={globeIcon}/>
                        </div>
                        <p>{this.state.category.name} -  </p>
                    </div>
                
                    <div className="right-wrapper">
                        
                    </div>
                </div>
                <div className="category-card-body">
                    
                </div>
            </div>
       
        )
    }
}