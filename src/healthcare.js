import React, { Component } from 'react';
class HealthCare extends Component {
    render() { 
        return (  
            <section className="healthcare-exp">
            <div className="healthcare-exp-container">
                <div className="healthcare-exp-first-row">
                    <img alt="docplanner mini logo" src="img/sygnet.png"/>
                    <h1 className="heading-level1">Making the healthcare experience more human</h1>
                </div>
            </div>
            <div className="healthcare-exp-second-row">
                <p className="paragraph-for-patient">We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere</p>
                <p className="paragraph-for-doctors">We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters:
                    their patients.</p>
            </div>
        </section>
        );
    }
}
export default HealthCare;