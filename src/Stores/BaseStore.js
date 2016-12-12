//import assign from 'object-assign';
import {Constants} from '../settings';
import {EventEmitter} from 'events';

export default class BaseStore extends EventEmitter
{

    constructor()
    {
        super();                    
        this._onChange = this._onChange.bind(this);
    }
    
    addChangeListener(callback) {
        this.on(Constants.CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(Constants.CHANGE_EVENT, callback);
    }

    // triggers change listener above, firing controller-view callback
    emitChange() {
        this.emit(Constants.CHANGE_EVENT);
    }

}