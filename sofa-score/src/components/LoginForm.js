import React, {useEffect, useState} from 'react'
import { ReactComponent as Logo } from '../files/data1.svg';
import '../CSS/login.css';


function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name:"", email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
      <form onSubmit={submitHandler}>
        <div className="login-container">
            <Logo className="logo" />
            <div className="login-form-inner">
                <h2>Login</h2>
                <div className="login-form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>

                <div className="login-form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="login-form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <div className="login-wrapper">
                    <input type="submit" value="LOGIN"/>
                </div>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
            </div>
        </div>
       
      </form>
    )
}

export default LoginForm;
