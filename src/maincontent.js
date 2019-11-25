import React, { Component } from 'react';
import HealthCare from './healthcare';
import ForPatientDoctor from './forpatientdoctor';
import LocalCulture from "./localculture";
import DocplannerStats from './docplannerstats';
import Offices from './offices'

class MainContent extends Component {
    render() { 
        return ( 
            <main>
                <HealthCare/>
                <ForPatientDoctor/>
                <LocalCulture/>
                <DocplannerStats/>
                <Offices/>
            </main>
         );
    }
}
export default MainContent;