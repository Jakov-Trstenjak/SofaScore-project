import React, { Component } from 'react';
import Navbar from './Navbar'
import '../CSS/EventInfo.css';



export default class EventInfo extends Component {

    constructor(props){
        super();

        this.state = {
           event : ''
        }
        this.GetEventInfo = this.GetEventInfo.bind(this)

    }


    async GetEventInfo(){

        const response = await fetch('	https://master.dev.sofascore.com/api/v1/event/'+this.props.match.id);

        const data = await response.json();

        this.setState({ event:  data.event });
    }
        
    componentDidMount(){
        this.GetEventInfo();
    }

    render() {

        console.log("render")
        const startTime = this.state.event.startTimestamp.toLocaleTimeString(navigator.language);

        const homeTeamLogoUrl = 'https://master.dev.sofascore.com/api/v1/team/'+ this.state.event.homeTeam.id+'/image';
        const awayTeamLogoUrl = 'https://master.dev.sofascore.com/api/v1/team/'+ this.state.event.awayTeam.id+'/image';

        const awayScore = this.state.event.awayScore;
        const homeScore = this.state.event.homeScore;

        const eventStatus = this.state.event.status.code;
        let eventStatusDescription = '';
        let isMatchLive='';

        return (
            <div>
                 <div>   
                    <div className="header">
                        <Navbar />
                    </div>
                    <div className="body">
                        <div className="event-info-container">
                            <div className="tournament-information">
                                <div className="logo">
                                    <img src={"https://master.dev.sofascore.com/api/v1/unique-tournament/"+ this.state.event.uniqueTournament.id +"/image"} alt='logo'></img>
                                </div>
                                <div className="name">
                                    <p>{this.state.event.tournament.name}</p>
                                </div>
                                <div className="season">
                                    <p>{this.state.event.season.name}</p>
                                </div>
                            </div>
                            <div className="match-information">
                                <div className="teams">
                                    <table>
                                        <tr>
                                            <td className="team-name text-align-right">
                                                <p>{this.state.event.homeTeam.name}</p>
                                            </td>
                                            <td>
                                                <img className='team-logo ml8' src={homeTeamLogoUrl}></img>
                                            </td>
                                            <td>
                                                {
                                                    (homeScore) ? (
                                                        <p className={'scoreboard ml5 '+isMatchLive}>{homeScore.display}</p>

                                                    ) : (
                                                        <p className={'scoreboard ml5 '+isMatchLive}>{}</p>

                                                    )
                                                }
                                            </td>
                                            <td className="versus">
                                                <p>-</p>
                                            </td>
                                            <td>
                                            {
                                                    (awayScore) ? (
                                                        <p className={'scoreboard mr5 '+isMatchLive}>{awayScore.display}</p>

                                                    ) : (
                                                        <p className={'scoreboard mr5 '+isMatchLive}>{}</p>

                                                    )
                                                }
                                            </td>
                                            <td>
                                            <img className='team-logo mr8' src={awayTeamLogoUrl}></img>
                                            </td>
                                            <td className="team-name text-align-left">
                                                <p>{this.state.event.awayTeam.name}</p>
                                            </td>                   
                                        </tr>
                                    </table>
                                </div>
                                <div className="additional-information">
                                    <div className="event-date">
                                        <p>{startTime}</p>
                                    </div>
                                    <div className="stadium">
                                        <p>{this.state.event.venue.city.name + ', ' + this.state.event.venue.city.stadium.name}</p>
                                    </div>
                                    <div className="attendence">
                                        <p>{'Attendence: ' + this.state.event.attendence}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

        )
    }
}
