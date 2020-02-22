import {combineReducers} from 'redux'
import linkReducer from './links.reducer'

export default combineReducers({
    links: linkReducer
})
