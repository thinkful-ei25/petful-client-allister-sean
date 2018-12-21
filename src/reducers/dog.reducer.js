import { 
    FETCH_DOG_LOADING, 
    FETCH_DOG_SUCCESS, 
    FETCH_DOG_ERROR,
    ADOPT_DOG_ERROR  
} from '../actions/index.action'; 

const initialState = { 
    dog : { 
        data : null, 
        error : null, 
        loading : false
    }
}

export default function reducer(state=initialState, action) { 
    if (action.type === FETCH_DOG_LOADING) { 
        const newDog = Object.assign({}, state.dog, 
            {loading:true, data:null, error:null}); 
        
        return Object.assign({}, state, {dog : newDog}); 
    }
    else if (action.type === FETCH_DOG_SUCCESS) { 
        const newDog = Object.assign({}, state.dog, 
            {loading:false, data: action.dog, error: null}); 
        
        return Object.assign({}, state, {dog: newDog}); 
    }
    else if (action.type === FETCH_DOG_ERROR) { 
        const newDog = Object.assign({}, state.dog, 
            {loading:false, data:null, error:action.err}); 
        
        return Object.assign({}, state, {dog: newDog}); 
    }
    else if (action.type === ADOPT_CAT_ERROR) { 
        const newDog = Object.assign({}, state.dog, { 
            loading: false, data: null, error: action.err}); 
        
        return Object.assign({}, state, {dog: newDog}); 
    }
    return state; 
}