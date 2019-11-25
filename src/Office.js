import React, { Component } from 'react';
class Office extends Component {
    render() { 
        return ( 
        <div className={this.props.classes}>
            <a href={this.props.link}>
                <figure className={this.figureClasse}>
                    <img src={this.props.imgSrc} alt={this.props.imgAlt}/>
                </figure>
                <div className ={this.props.officeDescription}>
                    <span>{this.props.place}</span>
                    <span>{this.props.btn}</span>
                </div>
            </a>
        </div>
         );
    }
}
 
export default Office;