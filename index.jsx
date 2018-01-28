import React from 'react';
import ReactDom from 'react-dom';

import './style/style.css'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Child extends React.Component {
    render(){
        return <b>This is text from child component </b>
        
    }

}
class Users extends React.Component {
    render(){
        /*return <div>
            <h1>{this.props.myName}</h1>
            <button onClick = {this.props.myFunction}>check</button>
        </div>*/
        return <div><h1>this is user component</h1>
        <h2>ohh wah chal gea</h2>
        
        </div>
        
        
    }

}
class AppComponent extends React.Component {

    constructor(){
        super();

        this.state = {
            color: 'green-color'
        };
        this.sayhellow = this.sayhellow.bind(this);

        this.name = 'Muhammad Tahir';
    }
    performAction(){
        alert('this is users component');
    }
    sayhellow(){
        // alert("Neeche show Ho Raha Mera Component gereen main.")
        this.state.color = 'yellow-color';
        this.setState(this.state);
    }
    render(){
            /*return <div>
                 <Child/> 
                 <button onClick={this.sayhellow.bind(this)}>My New Component</button> 
                <button onClick={()=>this.sayhellow()}>My New Component</button>
                
                 <h1 className="province">This is our 1st Component</h1> 
                <h1 className={this.state.color}>This is our 1st Component</h1>
                
            </div>*/
            return <Router>
                {/*<div>
                <ABCD myName = {this.name} myFunction = {this.performAction}/>

            </div>*/}
            <div>
            <div>This is Home Page</div>
            <Link to = "/users">Users Page</Link>
            <Route path = "/users" component = {Users} />
            </div>
            </Router>
            
                
                    
        
    }


}

ReactDom.render(<AppComponent />, document.getElementById('rootElement'));