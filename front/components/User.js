import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

class User extends React.Component {
  constructor(props) {
    super(props);
  }   
    render() {
      
        const {id,first_name,last_name,  deleteUser} = this.props;
        return (
            <div>
          <ListGroup as="ul">
            <ListGroup.Item as="li" className="d-flex flex-row ">
              <div className ="bg-light border m-1">{id}</div>
              <div className ="m-1">{first_name}</div>
              <div className ="m-1">{last_name}</div>
              <Button className="btn-secondary m-1" > Edit </Button>
              <Button variant="dark m-1" onClick={() => deleteUser(id)} > Delete</Button>
            </ListGroup.Item>
          </ListGroup>
      </div>
        );
    }
}

export default User;