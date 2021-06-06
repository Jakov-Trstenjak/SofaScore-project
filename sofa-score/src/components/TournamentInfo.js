import React, { Component } from 'react'

export default class TournamentInfo extends Component {
    
    async GetTournament() {

        //https://master.dev.sofascore.com/api/v1/unique-tournament/17
        const response = await fetch('https://master.dev.sofascore.com/api/v1/unique-tournament/'+ this.props.uniqueTournamentId);

        // fetch all categories
        const data = await response.json();

        this.setState({ uniqueTournament:  data.uniqueTournament });
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
