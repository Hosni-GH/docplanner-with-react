import React, { Component } from 'react';
import StatsGrid from './statsgrid'
class DocplannerStats extends Component {
    render() { 
        return ( 
            <section className="docplanner-stats">
            <div className="stats-container">
                <div className="stats-intro">
                    <h2 className="heading-level2">The world's<br/>biggest healthcare platform</h2>
                    <p className="stats-paragraph">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                </div>
                <div className="stats-grid">
                    <div className="stats-grid-first-col">
                        <StatsGrid 
                            imgClasses="grid-element-icon leader-icon" 
                            Containerclasses="grid-element grid-element-leader" 
                            imgurl="./img/flag.png" 
                            imgalt="leader in 10 countries" 
                            title="leader in 10 countries"
                            >
                                <p>Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile</p>
                        </StatsGrid>
                        <StatsGrid 
                            imgClasses="grid-element-icon patients-icon" 
                            Containerclasses="grid-element grid-element-patients" 
                            imgurl="./img/patients.png" 
                            imgalt="30 million unique patients" 
                            title="30 million unique patients"
                            >
                            <p>visit us every month</p>
                        </StatsGrid>
                    </div>
                    <div className="stats-grid-second-col">
                        <StatsGrid 
                            imgClasses="grid-element-icon appointments-icon" 
                            Containerclasses="grid-element grid-element-appointments" 
                            imgurl="./img/visits.png" 
                            imgalt="1.5 million appointments" 
                            title="1.5 million appointments"
                            >
                                <p>booked last month</p>
                        </StatsGrid>
                        <StatsGrid 
                            imgClasses="grid-element-icon doctors-icon" 
                            Containerclasses="grid-element grid-element-doctors" 
                            imgurl="./img/doctors.png" 
                            imgalt="2 million active doctors" 
                            title="2 million active doctors"
                            >
                                <p>trust in our solutions</p>
                        </StatsGrid>
                    </div>
                </div>
            </div>
        </section>
         );
    }
}
export default DocplannerStats;