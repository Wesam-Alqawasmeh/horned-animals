import React, { Component } from 'react'
import votesRed from '../img/votesRed.png'

class HornedBeasts extends Component {

    constructor(props){
        
        super(props);
        
        this.state = {
            favState : this.props.favNum,
        }
    }

    favRaise = () => {
        this.setState ({
            favNum : this.state.favState+1,

        })

        console.log('hello');
    }

    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt="" title="" />
                <p>{this.props.description}</p>
                <button onClick = {this.favRaise}>Vote for favorites</button>
                <p>{this.state.favState}</p>
            </>
        )
    }
}

export default HornedBeasts
