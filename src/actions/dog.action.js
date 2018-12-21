import {API_BASE_URL} from '../config'; 

export const FETCH_DOG_LOADING = 'FETCH_DOG_LOADING'; 
export const fetchDogLoading = () => ({ 
    type: FETCH_DOG_LOADING
}); 

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS'; 
export const fetchDogSuccess = dog => ({ 
    type: FETCH_DOG_SUCCESS, 
    dog
}); 

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR'; 
export const fetchDogError = err => ({ 
    type: FETCH_DOG_ERROR, 
    err
}); 

export const ADOPT_DOG_LOADING = 'ADOPT_DOG_LOADING'; 
export const adoptDogLoading = () => ({ 
    type: ADOPT_DOG_LOADING
})

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR'; 
export const adoptDogError = err => ({ 
    type: ADOPT_DOG_ERROR, 
    err
})

export const adoptDog = () => (dispatch) => { 
    dispatch(adoptDogLoading); 

    return fetch(`${API_BASE_URL}/dog`, { 
        method: 'DELETE'
    })
        //FETCH DOG IF ADOPTION SUCCESSFUL
        .then(data => dispatch(fetchDog()))
        .catch(err => dispatch(adoptDogError(err))); 
}

export const fetchDog = () => (dispatch) => { 
    dispatch(fetchDogLoading()); 

    return fetch(`${API_BASE_URL}/dog`, { 
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => dispatch(fetchDogSuccess(data)))
        .catch(err => dispatch(fetchDogError(err)));      
}