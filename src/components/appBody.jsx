import React, { Component } from 'react';
import AppInput from "../components/appInput.jsx"
import AppSummary from "../components/appSummary.jsx"
import AppDetail from "../components/appDetail.jsx"


class AppBody extends Component {
    render() {
        return ( 
            <div className="AppBody">
                <AppInput />
                <AppSummary />
                <AppDetail />
            </div> 
        );
    }
}

export default AppBody;