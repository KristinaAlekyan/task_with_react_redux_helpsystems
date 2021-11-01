import React from "react";
import Data from "./users.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import User from "./User";
import {connect} from 'react-redux';
import {deleteUser} from "../redux/action";


class UserContainter extends React.Component {
  constructor(prop){
    super(prop)
    this.state = {         
      inputFirstName : '',
      inputLastName: ''
    }
  } 

  deleteUser = (id) => {
    this.props.deleteUser(id);
    console.log(id)
  } 

  render() {
    return (
      <>
        <form> 
          <input />
          <input />
          <button >Save</button>
        </form>

        <div>
          {this.props.users.map(user => 
              <User 
                  key = {user.id}
                  id = {user.id}
                  first_name = {user.first_name} 
                  last_name = {user.last_name} 
                  deleteUser ={this.deleteUser}
              />
            )
          }
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  deleteUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainter);