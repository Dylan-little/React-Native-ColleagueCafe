import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchCoffees = () => dispatch => {

    dispatch(coffeesLoading());

    return fetch(baseUrl + 'coffees')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(coffees => dispatch(addCoffees(coffees)))
        .catch(error => dispatch(coffeesFailed(error.message)));
};

export const coffeesLoading = () => ({
    type: ActionTypes.COFFEES_LOADING
});

export const coffeesFailed = errMess => ({
    type: ActionTypes.COFFEES_FAILED,
    payload: errMess
});

export const addCoffees = coffees => ({
    type: ActionTypes.ADD_COFFEES,
    payload: coffees
});

//----------------------

export const fetchFoods = () => dispatch => {
    
    dispatch(foodsLoading());

    return fetch(baseUrl + 'foods')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(foods => dispatch(addFoods(foods)))
        .catch(error => dispatch(foodsFailed(error.message)));
};

export const foodsLoading = () => ({
    type: ActionTypes.FOODS_LOADING
});

export const foodsFailed = errMess => ({
    type: ActionTypes.FOODS_FAILED,
    payload: errMess
});

export const addFoods = foods => ({
    type: ActionTypes.ADD_FOODS,
    payload: foods
});

//------------------------

export const fetchHours = () => dispatch => {
    
    dispatch(hoursLoading());

    return fetch(baseUrl + 'hours')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(hours => dispatch(addHours(hours)))
        .catch(error => dispatch(hoursFailed(error.message)));
};

export const hoursLoading = () => ({
    type: ActionTypes.HOURS_LOADING
});

export const hoursFailed = errMess => ({
    type: ActionTypes.HOURS_FAILED,
    payload: errMess
});

export const addHours = hours => ({
    type: ActionTypes.ADD_HOURS,
    payload: hours
});

//----------------

export const fetchSpecials = () => dispatch => {
    
    dispatch(specialsLoading());

    return fetch(baseUrl + 'specials')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(specials => dispatch(addSpecials(specials)))
        .catch(error => dispatch(specialsFailed(error.message)));
};

export const specialsLoading = () => ({
    type: ActionTypes.SPECIAL_LOADING
});

export const specialsFailed = errMess => ({
    type: ActionTypes.SPECIAL_FAILED,
    payload: errMess
});

export const addSpecials = specials => ({
    type: ActionTypes.ADD_SPECIAL,
    payload: specials
});

//--------------

export const fetchAboutUs = () => dispatch => {
    
    dispatch(aboutUsLoading());

    return fetch(baseUrl + 'aboutUs')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(aboutUs => dispatch(addAboutUs(aboutUs)))
        .catch(error => dispatch(aboutUsFailed(error.message)));
};

export const aboutUsLoading = () => ({
    type: ActionTypes.ABOUT_LOADING
});

export const aboutUsFailed = errMess => ({
    type: ActionTypes.ABOUT_FAILED,
    payload: errMess
});

export const addAboutUs = aboutUs => ({
    type: ActionTypes.ADD_ABOUT,
    payload: aboutUs
});

//---------------

export const postFavorite = coffeeId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(coffeeId));
    }, 2000);
};

export const addFavorite = coffeeId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: coffeeId
})

export const deleteFavorite = coffeeId => ({
    type: ActionTypes.DELETE_FAVORITE,
    payload: coffeeId
})

//---------------------------

export const postCart = coffeeId => dispatch => {
    setTimeout(() => {
        dispatch(addCart(coffeeId));
    }, 2000);
};

export const addCart = coffeeId => ({
    type: ActionTypes.ADD_CART,
    payload: coffeeId
})

export const deleteCart = coffeeId => ({
    type: ActionTypes.DELETE_CART,
    payload: coffeeId
})