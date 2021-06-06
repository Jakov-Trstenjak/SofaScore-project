
import React , {useState} from 'react';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import EventInfo from './components/EventInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  const adminUser = {
      email: "admin@admin.com",
      password: "123"
  }

  const[user, setUser] = useState({name:"", email:"" });
  const [error, setError] = useState("");

  const Login = details => {

    if(details.email == adminUser.email && details.password == adminUser.password){
      setUser({
        name : details.name,
        email : details.email
      })
    }else{
      setError("Details do not match")
    }

  }

  return (
    <Router>
      <div className="App">
      {
        (user.email != "") ? (
          <div>
          <div className="navigation-bar">
              <Navbar></Navbar>
          </div>
          <Switch>
            <Route exact path="/:sport?" component={HomePage} />
            <Route exact path="/event/:id" component={EventInfo} />
          </Switch> 
       
          </div>
        ) 
         :
        <Switch>
          <div className="login-body">
            <Route>
                <LoginForm Login={Login} error={error} path='/Login'/>
            </Route>
          </div>
      </Switch> 

      }
    </div> 
    </Router>
  
  );
}
export default App;
