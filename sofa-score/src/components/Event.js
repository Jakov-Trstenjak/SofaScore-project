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
                
                <p>{this.props.event.homeTeam.name} - {this.props.event.awayTeam.name}</p>
            </div>
        )
    }
}
