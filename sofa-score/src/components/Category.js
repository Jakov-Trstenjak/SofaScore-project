import React, { Component } from 'react'
import '../CSS/category.css';
import Tournament from './Tournament';



class Category extends Component {
    
    constructor(props){
        super();

        this.state = {
            category : props.category,
            events : [],
            dict : []
        }
    }


    async GetEvent(){

        const response = await fetch('https://master.dev.sofascore.com/api/v1/category/'+ this.props.category.id+'/scheduled-events/'+this.props.date );

        // fetch all events
        const data = await response.json();

        this.setState({ events:  data.events });
        this.mapEventsWithTournaments();

        console.log(this.state.dict)

    }

    componentDidMount() {
        this.GetEvent();
      }
  
  
    mapEventsWithTournaments(){

        let dict = {};
        
        this.state.events.map( e => { 
                   dict[e.tournament.uniqueTournament.id] = e
                })

        this.setState({ dict : dict });

    }  

    render() {
        return (
            <div>
                {
                    
                     Object.keys(this.state.dict).map(key => (
                       
                        <Tournament category={this.state.category} uniqueTournamentId={key} events={this.state.dict[key]}/>   

                     )
                    )


                }
               
            </div>
            
        )
    }
}

export default Category;