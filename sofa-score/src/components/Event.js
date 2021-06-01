import React, { Component } from 'react';
import '../CSS/event.css';


export default class Event extends Component {

    constructor(props){
        super();

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="event-container">
                
                <p>{this.props.event.homeTeam.name}</p>
                <div className="versus"><p>-</p></div> 
                <p>{this.props.event.awayTeam.name}</p>
            </div>
        )
    }
}
