import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./style/navbar.css"
import navLogo from "./Img/navLogo.png"

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <nav className="navbar navbar-light  w-100">
                        <div className="container-fluid">
                            <a className="navbar-brand" href='#32'>
                                <img src={navLogo} alt="" />
                            </a>
                            <form className="d-flex">
                                <Link to={"/mainPage"}><a href="#Home" className='fs-4 mx-3   text-light'>Home</a></Link>
                                <Link to={"./aboutPage"}><a href="#Home" className='fs-4 mx-3   text-light'>About Us</a></Link>
                                <Link to={"./productPage"}><a href="#Home" className='fs-4 mx-3   text-light'>Products</a></Link>
                                <Link to={"./contactPage"}><a href="#Home" className='fs-4 mx-3   text-light'>Contact</a></Link>

                            </form>

                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;
