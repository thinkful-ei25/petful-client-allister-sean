import {combineReducers} from 'redux'; 
import dogReducer from './dog.reducer'; 
import catReducer from './cat.reducer'; 

const combinedReducer =  
    combineReducers({ 
        cat : catReducer, 
        dog : dogReducer
    }); 

export default combinedReducer; 