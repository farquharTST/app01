import React, { Component } from 'react';
import '../css/App.css';
import AppStore from '../Stores/appStore.js';
import AppUtils from '../Utils/appUtils.js';
import AppActions from "../Actions/appActions.js";

class AppInput extends Component {
    render() {
        return ( 
            <div className="AppInput">
                <table className="InputTable">
                    <thead>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>First Input</td>
                            <td><input type="text" name="firstInput" /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Second sdfdfInput</td>
                            <td><input type="text" name="secondInput" /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <a  onClick={()=>AppActions.submitInputText('Test')}> Submit </a>
                                
                            </td>
                            <td></td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default AppInput;