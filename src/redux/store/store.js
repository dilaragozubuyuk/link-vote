import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools}  from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/index.reducer'

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store
