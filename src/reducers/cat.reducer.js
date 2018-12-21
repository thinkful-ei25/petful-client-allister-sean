import { 
    FETCH_CAT_LOADING, 
    FETCH_CAT_SUCCESS, 
    FETCH_CAT_ERROR, 
    ADOPT_CAT_ERROR
} from '../actions/cat.action'; 

const initialState = { 
    cat : { 
        data : null, 
        error : null, 
        loading : true
    }
}

export default function reducer(state=initialState, action){ 
    if (action.type === FETCH_CAT_LOADING) { 
        const newCat = Object.assign({}, state.cat, 
            {loading : true, data: null, error: null}); 
         
        return Object.assign({}, state, { cat : newCat}); 
    }
    else if (action.type === FETCH_CAT_SUCCESS) { 
        const newCat = Object.assign({}, state.cat, 
            {loading: false, data: action.cat, error: null}); 
        
        return Object.assign({}, state, {cat : newCat}); 
    }
    else if (action.type === FETCH_CAT_ERROR) { 
        const newCat = Object.assign({}, state.cat, 
            {loading : false, data: null, error: action.err}); 
        
        return Object.assign({}, state.cat, {cat: newCat}); 
    }
    else if (action.type === ADOPT_CAT_ERROR) {
        const newCat = Object.assign({}, state.car, 
            {loading: false, data:null, error : action.err}); 

        return Object.assign({}, state, {cat: newCat}); 
    }
    return state; 
}