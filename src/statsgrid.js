import React, { Component } from 'react';
class StatsGrid extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={this.props.Containerclasses}>
                <div className={this.props.imgClasses}>
                    <img src={this.props.imgurl} alt={this.props.imgalt}/>
                </div>
                <h3 className="grid-stats-heading">{this.props.title}</h3>
                {this.props.children}
            </div>
         );
    }
}
 
export default StatsGrid;