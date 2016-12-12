import React, { Component} from 'react';
import logo from '../img/tstLogo_redGray.svg';

class AppHeader extends Component {
    render() {
        return (
        <div className="Main-header">
            <img src={logo}  className="Main-logo" alt="logo" />
            App Header
        </div>
        )
    }
}

export default AppHeader;

