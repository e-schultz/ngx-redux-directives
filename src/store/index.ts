import { IAppState, rootReducer } from './store';


import { environment } from '../environments/environment';
const createLogger = require('redux-logger');
const persistState = require('redux-localstorage');

export {
  IAppState,
  rootReducer,
};

export let middleware = [];
export let enhancers = [];

if (!environment.production) {
  middleware.push(
    createLogger({
      level: 'info',
      collapsed: true
    }));
}