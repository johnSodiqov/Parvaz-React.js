import React, { Component } from 'react';
import "./style/main.css"
import Intro from './intro';
import Productss from './products';



class MainPage extends Component {

    render() {
        return (
            <div>
                <Intro/>
                <Productss/>
            </div>
        );
    }
}

export default MainPage;
