import * as ActionTypes from './ActionTypes';

export const aboutUs = (state = { isLoading: true,
                                     errMess: null,
                                     aboutUs: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ABOUT:
            return {...state, isLoading: false, errMess: null, aboutUs: action.payload};

        case ActionTypes.ABOUT_LOADING:
            return {...state, isLoading: true, errMess: null, aboutUs: []}

        case ActionTypes.ABOUT_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};