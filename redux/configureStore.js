import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { coffees } from './coffees';
import { foods } from './foods';
import { hours } from './hours';
import { aboutUs } from './aboutUs' 
import { specials } from './specials';
import { favorites } from './favorites';
import { carts } from './carts';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            coffees,
            foods,
            hours,
            aboutUs,
            specials,
            favorites,
            carts
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}