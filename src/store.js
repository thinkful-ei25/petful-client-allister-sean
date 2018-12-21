import {createStore, applyMiddleware} from 'redux'
import combinedReducers from  './reducers/index.reducer'; 
import thunk from 'redux-thunk'; 

const store = createStore(
    combinedReducers, 
    applyMiddleware(thunk)
); 

export default store; 

