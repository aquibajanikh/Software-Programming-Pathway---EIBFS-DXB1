import React from 'react';
import CardImage from './../images/card.PNG';
import './ApplyCard.css';

class ApplyCard extends React.Component{

    state = {
        firstName:"User",
        lastName:"Name"
    }

    changeFirstName = (e) => {
        this.setState({firstName:e.target.value});
    }

render(){
        return(
        <div id='applyCard'>
            <input type='text' placeholder='First name'
            onChange={this.changeFirstName}/>
            <br/>
            <input type='text' placeholder='Last name' onChange={(e)=>{
                this.setState({lastName:e.target.value})
            }}/>
            <br/>
            <input type='submit' value='Apply'/><br/><br/><br/>
            <img src={CardImage}/>
            <h3>{this.state.firstName} {this.state.lastName}</h3>
        </div>);
    }
}

export default ApplyCard;