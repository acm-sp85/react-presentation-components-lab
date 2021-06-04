// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
    state = { 
        mood: 'happy'
     }


handleClick = () => {
    console.log("hey")
    this.setState(prevState => ({
        mood: prevState.mood === 'happy'? 'sad':'happy'
      }));
}


    render() { 

        
        return ( 
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
         );
    }
}
 
export default SimpleComponent;