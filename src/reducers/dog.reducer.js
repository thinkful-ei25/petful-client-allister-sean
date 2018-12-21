import { 
    FETCH_DOG_LOADING, 
    FETCH_DOG_SUCCESS, 
    FETCH_DOG_ERROR,
    ADOPT_DOG_LOADING, 
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
    return state; 
}