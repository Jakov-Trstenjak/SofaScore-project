
import React , {useState} from 'react';

function App() {

  const adminUser = {
      email: "adminUser@admin.com",
      password: "12345678"
  }

  const[user, setUser] = useState({name:"", email:"" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("Logout")
  }

  return (
    <div className="App">
      {
        (user.email != "") 
        

      }
    </div>
  );
}

export default App;
