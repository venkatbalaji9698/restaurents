import { combineReducers } from 'redux'
import restaurantsReducer from './restaurantsReducers';

const rootReducer = combineReducers({
    restaurantsReducer   //Combibining all reducers here but we have only one here we can add as many required

})
export default rootReducer