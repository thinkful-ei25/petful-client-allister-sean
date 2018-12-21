import {API_BASE_URL} from '../config'; 

export const FETCH_CAT_LOADING = 'FETCH_CAT_LOADING'; 
export const fetchCatLoading = () => { 
    type: FETCH_CAT_LOADING
}

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS'; 
export const fetchCatSuccess = cat => { 
    type: FETCH_CAT_SUCCESS, 
    cat
}

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR'; 
export const fetchCatError = err => { 
    type: fetchCatError, 
    err
}

export const fetchCat = () => (dispatch) => { 
    dispatch(fetchCatLoading); 

    return fetch(`${API_BASE_URL}/cat`, { 
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => dispatch(fetchCatSuccess(data)))
        .catch(err => dispatch(fetchCatError(err)));      
}