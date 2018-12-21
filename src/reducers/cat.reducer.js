import { 
    FETCH_CAT_LOADING, 
    FETCH_CAT_SUCCESS, 
    FETCH_CAT_ERROR, 
    ADOPT_CAT_LOADING, 
    ADOPT_CAT_ERROR
} from '../actions/index.action'; 

const initialState = { 
    cat : { 
        data : null, 
        error : null, 
        loading : false
    }
}

export default function reducer(state=initialState, action){ 
    return state; 
}