import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/reducer';

const store = createStore(rootReducer);

export default store
