import React from 'react'
import Category from './Category';


class  CategoryListPage extends React.Component {

    constructor(props) {
        super(props);
      
        this.state = {
            categories : [],
            date : (new Date()).toISOString().split('T')[0]
        };
    }

    async GetCategories(sport) {
        sport = 'football';

        const response = await fetch('https://master.dev.sofascore.com/api/v1/sport/'+sport+'/'+this.state.date+'/7200/categories');
    
        //fetch all categories
        const data = await response.json()

        this.setState({ categories:  data.categories });
    }

    componentDidMount() {
      this.GetCategories();
    }
  

    render() {
      return (
        //foreach category, display a Category element with the corespoding parameters
        <div>
          {
            this.state.categories.map(category => (
                <Category></Category>
              )
            )
          }
        </div>
      )
    }
}

export default CategoryListPage
