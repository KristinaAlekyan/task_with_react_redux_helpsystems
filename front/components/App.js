import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContainter from "./UserContainter";
import {connect} from "react-redux";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isShownUsers: false, 
        };
    }
    handleClickShowUsers = () => {
        this.setState( {isShownUsers: true, 
                        isShownProducts: false
                        });
    }
    render(){        
        const isShownUsers = this.state.isShownUsers;
        let showUsers;
        if (isShownUsers) {
            showUsers = <UserContainter/>;
        }
        return (
            <>
                <div className = "container-fluid border border-primary"> 
                    <a href = "">Home</a>
                    <br/>
                    <Button onClick = {this.handleClickShowUsers} variant="secondary" className="m-2">User</Button>
                    <br/>              
                </div>
                <div> 
                    {showUsers} 
                </div>
                
                
            </>
        );
    }
}

export default connect()(App);
