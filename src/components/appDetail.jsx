import React, { Component } from 'react';

class AppDetail extends Component {
    render() {
        return ( 
            <div className="AppDetail">
                <div>AppDetail</div>
                
                <div>
                    <p>{this.state.firstName}</p>
                </div>
            </div>
        );
    }
}

export default AppDetail;