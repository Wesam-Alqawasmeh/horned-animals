import React, { Component } from 'react'

class HornedBeasts extends Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt="" title="" />
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeasts
