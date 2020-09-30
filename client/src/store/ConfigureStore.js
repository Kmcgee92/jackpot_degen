import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import Auth from './Auth';
import Jackpot from './Jackpot';
import SignUp from './SignUp';
import CardRoom from './CardRoom';
import News from './News';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    Auth,
    Jackpot,
    SignUp,
    CardRoom,
    News,
});

const configureStore = initialState => {
    return createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk)),
    );
};

export default configureStore;