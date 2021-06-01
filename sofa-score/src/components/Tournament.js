import React, { Component } from 'react'
import '../CSS/category.css';
import globe from '../files/globe-icon.png'
import Event from './Event';

export default class Tournament extends Component {
    constructor(props){
        super();

        this.state = {
            category : props.category,
            events : props.events,
            uniqueTournament : '',
            uniqueTournamentId : props.uniqueTournamentId,
            imgUrl : (props.category.alpha2) ? ("https://www.sofascore.com/static/images/flags/"+(props.category.alpha2).toString().toLowerCase() +".png") : ('') ,
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
        const imgUrl = this.state.imgUrl;
        return (
            <div className="category-container"> 
                <div className="category-card-header">
                    <div className="left-wrapper">
                        <div className="category-logo"> 
                             {(imgUrl) ? (
                                <img src={this.state.imgUrl} alt=''/>
                               ) : (
                                <img src={globe} alt=''/>
                               )}
                        </div>
                        <div className="tournament-name" title="See more information about this tournament">
                            <p>{this.state.category.name} - {this.state.uniqueTournament.name} </p>
                        </div>
                    </div>
                
                    <div className="right-wrapper">
                        
                    </div>
                </div>
                <div className="category-card-body">
                    {
                         this.props.events.map(event => (
                            <Event event={event} />
                          ))
                    }
                </div>
            </div>
       
        )
    }
}