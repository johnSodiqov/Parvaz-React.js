import React, { Component } from 'react';
import intro_img from "./Img/intro-img.png"
import "./style/intro.css"

class Intro extends Component {
    render() {
        return (
            <div className='intro'>
               <div className="intro-text">
                <h1>Parvazprof Industrial and Production Company</h1>
                <p>Is the top feed mill in the north which supplies broiler, layer and breeder chicken feed, dairy cattle feed, beef cattle feed, small ruminant feed, to a variety of customers throughout north and northeastern provinces of Afghanistan...</p>
                <button className='btn btn-outline-light'>Learn More {"->"}</button>
               </div>
               <div className="intro-img">
                <img src={intro_img} alt="" />
               </div>
               <div className="intro-products">
                    <img src={intro_img} alt="" />
                    <img src={intro_img} alt="" />
                    <img src={intro_img} alt="" />
                    <img src={intro_img} alt="" />
                    <img src={intro_img} alt="" />
                    <img src={intro_img} alt="" />
               </div>
            </div>
        );
    }
}

export default Intro;
