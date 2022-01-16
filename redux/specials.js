import * as ActionTypes from './ActionTypes';

export const specials = (state = { isLoading: true,
                                     errMess: null,
                                     specials: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SPECIAL:
            return {...state, isLoading: false, errMess: null, specials: action.payload};

        case ActionTypes.SPECIAL_LOADING:
            return {...state, isLoading: true, errMess: null, specials: []}

        case ActionTypes.SPECIAL_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};