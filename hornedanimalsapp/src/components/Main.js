import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends Component {
    render() {
        return (
            <>
                <HornedBeasts title={"Markhor"} imageUrl={"https://modernfarmer.com/wp-content/uploads/2014/08/saiga.jpg"} description={"The markhor, according to ARKive, lives in the mountains of central Asia, adeptly climbing craggy rocks with the grace of North America’s own mountain goat. It’s extremely endangered, with an estimated 2,500 left in the wild in part due to hunting for its absurdly spectacular corkscrewed horns, which can grow to more than five feet long."} />
                <HornedBeasts title={"Saiga" } imageUrl={"https://modernfarmer.com/wp-content/uploads/2014/08/nubianibex.jpg" } description={"Native to the dusty steppes of Kazakhstan, Russia, and sometimes Uzbekistan during migrations, the saiga is a truly absurd-looking and delightful antelope. Its fleshy, shotgun-like nose is used to filter out dust in its habitat and also, we think, to warm cold winter air before it makes its way to the animal’s lungs. Its spiralled horns are a light, dusky pink, with the luster of jade. It’s also incredibly endangered; read this for more about the plight of the noble, floppy-nosed saiga." } />
            </>
        )
    }
}

export default Main
