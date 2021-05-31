import React, { Component } from 'react'
import '../CSS/category.css';
import globeIcon from'../files/globe-icon.png';

export default class Tournament extends Component {
    constructor(props){
        super();

        this.state = {
            category : props.category,
            uniqueTournament : '',
            uniqueTournamentId : props.uniqueTournamentId,
            imgUrl : "https://www.sofascore.com/static/images/flags/"+(props.category.alpha2 || '').toString().toLowerCase() +".png",
             
        }
    }

    
   
    async GetTournament() {

        //https://master.dev.sofascore.com/api/v1/unique-tournament/17
        const response = await fetch('https://master.dev.sofascore.com/api/v1/unique-tournament/'+ this.props.uniqueTournamentId);

        // fetch all categories
        const data = await response.json();

        this.setState({ uniqueTournament:  data.uniqueTournament });
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
                        <p>{this.state.category.name} - {this.state.uniqueTournament.name} </p>
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