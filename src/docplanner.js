import React, { Component } from 'react';
import Header from './header';
import MainContent from './maincontent';
import Footer from './footer';
class Docplanner extends Component {
    render() { 
        return ( 
            <div>
            <Header/>
            <MainContent/>
            <Footer/>
            </div>
         );
    }
}
export default Docplanner;