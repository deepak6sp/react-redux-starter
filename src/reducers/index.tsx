import {combineReducers} from 'redux';
import SignFormReducer from './signForm';

const MainReducer = combineReducers({
    newtext: SignFormReducer
});

export default MainReducer;
