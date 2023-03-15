import React from 'react';
import axios from 'axios';

class UserList extends React.Component{
    state={
        users:[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
            res=>{
                let tempData = res.data;
                this.setState({ users:tempData });
            }    
        );
    }

    render(){
        return(
        <ul>
            {
                this.state.users
                .map((user)=><li key={user.id}>{user.name}</li>)
            }
        </ul>
        );
    }

    
}

export default UserList;