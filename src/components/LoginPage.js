import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './LoginPage.css';

class Login extends Component {  
  constructor(props) {  
      super(props);  
      this.state = {email: '', password:''};   
      this.handleSubmit = this.handleSubmit.bind(this);  
  }  
  
  handleSubmit() {
      //storing the value in session storage
      sessionStorage.setItem('email', this.state.email);
      sessionStorage.setItem('password', this.state.password);

      //navigating to next page which is Home page
      window.history.pushState({}, undefined, "/Home");
  }  
  render() { 
      return (  
        <div className="Login">
        <div className="Login-container">
          <div className="Login-field">
          <form onSubmit={this.handleSubmit}>  
          <h2>Welcome to Verizon</h2>
            <p>Sign In to your Account</p>

             <div className="LoginUI">
                <label>Email</label> 
                <input type="email" value={this.state.email} onChange={(event)=>{
                    this.setState({email:event.target.value})
                }} /> 
            </div>  
            <div className="LoginUI">
                <label>Password</label>  
                <input type="password" value={this.state.password} onChange={(event)=>{
                    this.setState({password:event.target.value})
                }} />  
            </div>
            <div className="Login-btn">
            <input type="submit" value="Submit" disabled={this.state.password.length<8}/>  
         </div>
         </form>
          </div>
          </div>
          </div>
         
      );  
  }  
} 
export default Login;