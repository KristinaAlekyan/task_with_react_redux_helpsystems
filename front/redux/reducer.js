import { DELETE_USER } from "./actionTypes";

const initialState = {
    users: [
        {"id":1,"first_name":"Karoline","last_name":"Rennebeck","email":"krennebeck0@flickr.com","gender":"Female","ip_address":"202.122.85.110"},
        {"id":2,"first_name":"Corby","last_name":"D' Angelo","email":"cdangelo1@elegantthemes.com","gender":"Male","ip_address":"14.208.20.218"},
        {"id":3,"first_name":"Duff","last_name":"Getcliffe","email":"dgetcliffe2@sun.com","gender":"Female","ip_address":"151.177.43.179"},
        {"id":4,"first_name":"Gabbie","last_name":"Nancarrow","email":"gnancarrow3@mtv.com","gender":"Male","ip_address":"68.203.120.243"},
        {"id":5,"first_name":"Theobald","last_name":"Enevoldsen","email":"tenevoldsen4@google.com.au","gender":"Male","ip_address":"28.60.223.213"},
         {"id":6,"first_name":"Elliot","last_name":"Logue","email":"elogue2q@aol.com","gender":"Female","ip_address":"28.122.207.21"},
        {"id":7,"first_name":"Jaimie","last_name":"Brokenbrow","email":"jbrokenbrow2r@altervista.org","gender":"Female","ip_address":"235.104.255.52"}
    ]
}
  

const usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case DELETE_USER:
            
            return {
                ...state, 
                users: state.users.filter((i) => i.id != action.payload.userId )                
            }
        default:
            return state;
    }
};

export default usersReducer;