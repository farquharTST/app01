import Dispatcher from '../Dispatcher';
import Constants from '../Constants/appConstants.js';
import BaseStore from './BaseStore';

class AppStore extends BaseStore
{
    constructor()
    {
        super();
        // this._firstName;
        // this._lastName;
    }

    sampleMethod() 
    { 
        return 'OK'; 
    }
}

const store = new AppStore();
