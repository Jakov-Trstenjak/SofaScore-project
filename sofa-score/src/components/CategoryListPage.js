import React from 'react'
import Category from './Category';

class  CategoryListPage extends React.Component {

    constructor(props) {
        super(props);
      
        this.state = {
            categories : {}
        };
      }



    async GetCategories(sport,date,offset) {
        const response = await fetch('https://master.dev.sofascore.com/api/v1/sport'+sport+'/'+date+'/'+offset+'/categories');
    
        //fetch all categories
        const data = await response.json()

    
      }

      render() {
        return (
          //foreach category, display a Category element with the corespoding parameters
          <main className="">  
            <h2>Categories</h2>
            <div className="row"> 
                  <Category/>
            </div>
          </main>
        )
      }
}

export default CategoryListPage
