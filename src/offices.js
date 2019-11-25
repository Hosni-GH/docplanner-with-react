import React, { Component } from 'react';
import Office from './Office'
class Offices extends Component {
    render() { 
        return ( 
            <section classNameName="offices">
            <div className="offices-container">
                <div className="offices-first-row">
                    <h2 className="heading-level2">Improve the lives of millions. Change yours forever</h2>
                    <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
                </div>
                <div className="offices-second-row">
                    <div className="offices-grid-first-row">
                        <Office classes="office"
                            link="#"
                            figureClasse="office-img"
                            imgSrc="./img/warsaw.png"
                            imgAlt="warsaw office"
                            officeDescription="office-description"
                            place="Warsaw"
                            btn="See openings"
                        />
                        <Office classes="office"
                            link="#"
                            figureClasse="office-img"
                            imgSrc="./img/barcelona.png"
                            imgAlt="barcelona office"
                            officeDescription="office-description"
                            place="Barcelona"
                            btn="See openings"
                        />
                        <Office classes="office"
                            link="#"
                            figureClasse="office-img"
                            imgSrc="./img/istanbul.png"
                            imgAlt="istanbul office"
                            officeDescription="office-description"
                            place="Istanbul"
                            btn="See openings"
                        />
                    </div>
                    <div className="offices-grid-first-row">
                        <Office classes="office"
                            link="#"
                            figureClasse="office-img"
                            imgSrc="./img/rome.png"
                            imgAlt="rome office"
                            officeDescription="office-description"
                            place="Rome"
                            btn="See openings"
                        />
                        <Office classes="office"
                            link="#"
                            figureClasse="office-img"
                            imgSrc="./img/mexico-city.png"
                            imgAlt="mexico city office"
                            officeDescription="office-description"
                            place="Mexico city"
                            btn="See openings"
                        />
                        <Office classes="office"
                            link="#"
                            figureClasse="office-img"
                            imgSrc="./img/curitiba.png"
                            imgAlt="curitiba office"
                            officeDescription="office-description"
                            place="Curitiba"
                            btn="See openings"
                        />
                    </div>
                </div>
            </div>
        </section>
         );
    }
}
 
export default Offices;