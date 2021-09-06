import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import data from '../data.json';

class Main extends Component {
    render() {
        return (
            <>

                {data.map((item) => {
                   
                    return( <HornedBeasts title={item.title} imageUrl={item.image_url} description={item.description}  favNum={0} />);
                })}
                
            </>
        )
    }
}

export default Main
