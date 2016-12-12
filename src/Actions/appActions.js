import Dispatcher from '../Dispatcher.js';
import Constants from '../Constants/appConstants';


export default {
    submitInputText(data) {
        Dispatcher.handleViewAction({
            actionType: Constants.ActionTypes.SET_TEXT,
            data: data
        });
        
    },
    
    // setAppTitleText(data) {
    //     Dispatcher.handleViewAction({
    //         actionType: Constants.ActionTypes.SET_APP,
    //         data: data
    //     });
    // },

    // setInitialData(data) {
    //     Dispatcher.handleViewAction({
    //         actionType: Constants.ActionTypes.INIT_DATA,
    //         data: data
    //     });
    // },
};