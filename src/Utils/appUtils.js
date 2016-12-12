//import axios from 'axios';
import AppActions from "../Actions/appActions.js";

export default {

	getDefaultData() {

		// axios.get('api/getInitData', {
		// })
		// .then(function (response) {
		// 	AppActions.setInitialData(response.data);
		// })
		// .catch(function (response) {
		// 	console.log(response);
		// });

        let initData =  {
            firstName: 'Default FirstName',
            lastName: 'Default LastName'
        };

        AppActions.setInitialData(initData);
	}
};
