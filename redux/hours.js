import * as ActionTypes from './ActionTypes';

export const hours = (state = { isLoading: true,
                                     errMess: null,
                                     hours: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_HOURS:
            return {...state, isLoading: false, errMess: null, hours: action.payload};

        case ActionTypes.HOURS_LOADING:
            return {...state, isLoading: true, errMess: null, hours: []}

        case ActionTypes.HOURS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};