import React, { Component } from 'react';
import '../CSS/event.css';


export default class Event extends Component {

    constructor(props){
        super();

        this.state = {
            
        }
    }

    render() {
        const homeTeamLogoUrl = 'https://master.dev.sofascore.com/api/v1/team/'+ this.props.event.homeTeam.id+'/image';
        const awayTeamLogoUrl = 'https://master.dev.sofascore.com/api/v1/team/'+ this.props.event.awayTeam.id+'/image';

        const awayScore = this.props.event.awayScore;
        const homeScore = this.props.event.homeScore;

        return (
            <div className="event-container" title="Click for more information">
                <table>
                    <tr>
                        <td className="event-time"> 
                            <p>18:00</p>
                        </td>
                        <td className="team-name text-align-right">
                            <p>{this.props.event.homeTeam.name}</p>
                        </td>
                        <td>
                            <img className='team-logo ml8' src={homeTeamLogoUrl}></img>
                        </td>
                        <td>
                            {
                                (homeScore) ? (
                                    <p className='scoreboard ml5'>{homeScore.display}</p>

                                ) : (
                                    <p className='scoreboard ml5'>{}</p>

                                )
                            }
                        </td>
                        <td className="versus">
                            <p>-</p>
                        </td>
                        <td>
                        {
                                (awayScore) ? (
                                    <p className='scoreboard mr5'>{awayScore.display}</p>

                                ) : (
                                    <p className='scoreboard mr5'>{}</p>

                                )
                            }
                        </td>
                        <td>
                        <img className='team-logo mr8' src={awayTeamLogoUrl}></img>
                        </td>
                        <td className="team-name text-align-left">
                            <p>{this.props.event.awayTeam.name}</p>
                        </td>                   
                    </tr>
                </table>
            </div>
        )
    }
}
