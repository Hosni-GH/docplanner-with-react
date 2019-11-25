import React, { Component } from 'react';
class ForPatientDoctor extends Component {
    render() { 
        return (  
            <section className="for-patient-doctor">
            <div className="for-patient-doctor-container">
                <div className="for-patient">
                    <p className="for-patient-text"><span className="for-patient-minified">For patients</span><br/>Find a doctor, book a visit and solve any health-related doubt</p>
                    <div className="choose-country-container">
                        <select className="country-list">
                            <option>Choose country</option>
                            <option value="http://www.doctoraliar.com">Argentina</option>
							<option value="http://www.doctoralia.com.au">Australia</option>
							<option value="http://www.doctoralia.com.br">Brazil</option>
							<option value="http://www.doctoralia.cl">Chile</option>
							<option value="http://www.doctoralia.co">Colombia</option>
							<option value="http://www.znamylekar.cz">Czech</option>
							<option value="http://www.doctoralia-fr.com">France</option>
							<option value="http://www.miodottore.it">Italy</option>
							<option value="http://www.doctoralia.com.mx">Mexico</option>
							<option value="http://www.doctoralia.pe">Peru</option>
							<option value="http://www.znanylekarz.pl">Poland</option>
							<option value="http://www.doctoralia.com.pt">Portugal</option>
							<option value="http://www.doctoralia.es">Spain</option>
							<option value="http://www.doktortakvimi.com">Turkey</option>
							<option value="http://www.doctoralia.co.uk">UK</option>
                        </select>
                    </div>
                    <figure className="for-patient-figure">
                        <img src="./img/screen-for-patient.png" alt="screen for patient"/>
                    </figure>
                </div>
                <div className="for-doctor">
                    <p className="for-doctor-text"><span className="for-doctor-minified">For doctors</span><br/>Save time managing visits and cut no-shows by half</p>
                    <figure className="for-doctor-figure">
                        <img src="./img/screen-for-doctor.png" alt="screen for doctor"/>
                    </figure>
                </div>
            </div>
        </section>
        );
    }
}
export default ForPatientDoctor;