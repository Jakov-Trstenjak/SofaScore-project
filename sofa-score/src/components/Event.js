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

        const eventStatus = this.props.event.status.code;
        let eventStatusDescription = '';
        let isMatchLive='';
        let startTime = '';

        switch(eventStatus){
            case 120 :
            case 100 : 
                eventStatusDescription = this.props.event.status.description;
                break;
            case 31 :
                eventStatusDescription = this.props.event.status.description;
                isMatchLive='match-live'
                break;
            case 6 :
            case 7 : 
                let statusTime = this.props.event.statusTime;
                eventStatusDescription = (statusTime.initial + statusTime.extra) / 60;
                eventStatusDescription+='\'';
                isMatchLive='match-live'
                break;
            case 0 :
                let t = new Date( this.props.event.startTimestamp * 1000 );
                startTime = t.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
                isMatchLive='not-started'
                break;
        }


        return (
            <div className="event-container" title="Click for more information">
                <table>
                    <tr>
                        <td className={'event-time '+isMatchLive}> 
                            {
                                (isMatchLive =='not-started') ? (
                                    <p>{startTime}</p>

                                ) : (
                                    <p>{eventStatusDescription}</p>
                                )
                            }
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
                            <p>{this.props.event.awayTeam.name}</p>
                        </td>                   
                    </tr>
                </table>
            </div>
        )
    }
}
